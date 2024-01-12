/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Page, Text, View, Document, StyleSheet, pdf, PDFViewer } from '@react-pdf/renderer';
// @ts-ignore
import { Image } from '@react-pdf/primitives';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';

// Set the app element for react-modal
Modal.setAppElement('#root');


const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 20,
        fontSize: 10, // Set font size to 10
    },
    section: {
        flexGrow: 1,
        marginBottom: 10,
    },
    godName: {
        color: 'red',
        width: "100vw", 
        textAlign: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    mainHeader: {
        fontSize: 20, 
        fontWeight: 1400,
    },
    headerText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 20,
    },
    sectionHeader: {
        width: "100vw",
        textAlign: 'center',   
        fontSize: 14,
        fontWeight: 'bold',
    }
});

const PdfDocument = ({ formData }: any) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <View style={styles.godName} >
                    {/* <Image style={styles.godName} src="./images/godName.png" /> */}
                    <Text>
                        || Om Nama: Shivay ||
                    </Text>
                </View>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.mainHeader}>
                            Vishwakarma Furnitures
                        </Text>
                        <Text style={styles.headerText}>{formData.billName}</Text>
                        <Text>{formData.name}</Text>
                    </View>
                    <Image style={styles.photo} src="./images/vishwakarma.png" />
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text>Bed Room</Text>
                    </View>
                    <View>

                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

const generatePdfBlob = async (formData: any): Promise<Blob | null> => {
    try {
        // Generate the PDF content
        const pdfContent = await pdf(<PdfDocument formData={formData} />);

        // Retrieve the PDF blob using the toBlob method
        const blob = await pdfContent.toBlob();

        return blob;
    } catch (error) {
        console.error('Error generating PDF blob:', error);
        return null;
    }
};

const PdfModal = ({ isOpen, onRequestClose, formData }: any) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth < 600); // Adjust the threshold as needed
        };

        checkScreenWidth();

        // Add event listener to update isMobile when the window is resized
        window.addEventListener('resize', checkScreenWidth);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    useEffect(() => {
        // Cleanup function to remove the app element when the component unmounts
        return () => {
            // @ts-expect-error
            Modal.setAppElement(null);
        };
    }, []);

    const handleDownload = async () => {
        // Generate the PDF blob
        const blob = await generatePdfBlob(formData);

        // Trigger the download with a specified filename
        if (blob) {
            saveAs(blob, 'generated-pdf.pdf');
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="PDF Modal">
            {
                !isMobile 
                    ? <PDFViewer width="100%" height={800}>
                        <PdfDocument formData={formData} />
                    </PDFViewer> 
                    : <button onClick={handleDownload}>Download PDF</button>
            }
        </Modal>
    );
};

export default PdfModal;
