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
        paddingVertical: 30
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
    profileHeader: {
        alignItems: 'center',
        marginVertical: 50,
    },
    mainHeader: {
        fontSize: 40, 
        fontWeight: 'extrabold',
    },
    profileSection: {
        flexDirection: 'row', 
        marginVertical: 10
    },
    headerText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    profileText: {
        fontSize: 25,
        fontWeight: 'bold',
        width: '50%',
        textAlign: 'justify'
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 20,
    },
    sectionHeader: {
        width: "100vw",
        textAlign: 'center',   
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    sectionContent: {
        width: "100vw",
        textAlign: 'center',
        fontSize: 16,
        margin: 2
    },
    workObjectFlex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    }
});

const pdfStyles = StyleSheet.create({
    allSideBorder: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000000'
    },
    topBorder: {
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderColor: '#000000'
    },
    bottomBorder: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#000000'
    },
    leftBorder: {
        borderStyle: 'solid',
        borderLeftWidth: 1,
        borderColor: '#000000'
    },
    rightBorder: {
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderColor: '#000000'
    },
    verticalBorder: {
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: '#000000'
    },
})

const PdfDocument = ({ formData }: any) => {

    let totalFoot = 0;
    let totalPrice = 0;
    formData.groups.map((group:any) => {
        let groupFoot = 0;
        let groupPrice = 0;
        group.workObjects.map((workObject: any) => {
            workObject['total'] = (workObject.height || 1) * workObject.width * workObject.length;
            workObject['price'] = workObject['total'] * formData.priceOfFoot;
            groupFoot += workObject['total'];
            groupPrice += workObject['price'];
        })
        group['groupFoot'] = groupFoot;
        group['groupPrice'] = groupPrice;

        totalFoot += groupFoot;
        totalPrice += groupPrice;
    })

    console.log(formData)
    return (
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
                        </View>
                        <Image style={styles.photo} src="./images/vishwakarma.png" />
                    </View>
                    <View style={styles.profileHeader}>
                        <View style={styles.profileSection}>
                            <Text style={styles.profileText}>Name</Text>
                            <Text style={styles.profileText}> : {formData.name}</Text>
                        </View>
                        <View style={styles.profileSection}>
                            <Text style={styles.profileText}>To</Text>
                            <Text style={styles.profileText}> : {formData.billName}</Text>
                        </View>
                        <View style={styles.profileSection}>
                            <Text style={styles.profileText}>Address</Text>
                            <Text style={styles.profileText}>: {formData.address}</Text>
                        </View>
                        <View style={styles.profileSection}>
                            <Text style={styles.profileText}>Phone Number</Text>
                            <Text style={styles.profileText}> : {formData.phoneNumber}</Text>
                        </View>
                        <View style={styles.profileSection}>
                            <Text style={styles.profileText}>Furniture Price (Rate)</Text>
                            <Text style={styles.profileText}> : Rs. {formData.priceOfFoot}</Text>
                        </View>
                    </View>
                </View>
            </Page>
            {
                formData.groups.map((group: any, index: number) => {
                    return (
                        <Page>
                            <View style={styles.section}>
                                <View style={styles.sectionHeader}>
                                    <Text>{group.groupName || `Group ${index + 1}`}</Text>
                                </View>
                                <View style={{...styles.sectionContent, ...pdfStyles.allSideBorder}}>
                                    <View style={{ ...styles.workObjectFlex, ...pdfStyles.bottomBorder }}>
                                        <Text style={{
                                            width: '40%',
                                            ...pdfStyles.rightBorder, 
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            Object Name
                                        </Text>
                                        <Text style={{
                                            width: '10%',
                                            ...pdfStyles.rightBorder,
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            Height
                                        </Text>
                                        <Text style={{
                                            width: '10%',
                                            ...pdfStyles.rightBorder,
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            Width
                                        </Text>
                                        <Text style={{
                                            width: '10%',
                                            ...pdfStyles.rightBorder,
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            Length
                                        </Text>
                                        <Text style={{
                                            width: '15%',
                                            ...pdfStyles.rightBorder,
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            Foot
                                        </Text>
                                        <Text style={{
                                            width: '15%',
                                            ...pdfStyles.rightBorder,
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            Price
                                        </Text>
                                    </View>
                                    {
                                        group.workObjects.map((workObject: any) => {
                                            return (
                                                <View style={{...styles.workObjectFlex, ...pdfStyles.bottomBorder}}>
                                                    <Text style={{
                                                        width: '40%',
                                                        ...pdfStyles.rightBorder
                                                    }}>
                                                        {workObject.objectName}
                                                    </Text>
                                                    <Text style={{
                                                        width: '10%',
                                                        ...pdfStyles.rightBorder
                                                    }}>
                                                        {workObject.height}
                                                    </Text>
                                                    <Text style={{
                                                        width: '10%',
                                                        ...pdfStyles.rightBorder
                                                    }}>
                                                        {workObject.width}
                                                    </Text>
                                                    <Text style={{
                                                        width: '10%',
                                                        ...pdfStyles.rightBorder
                                                    }}>
                                                        {workObject.length}
                                                    </Text>
                                                    <Text style={{
                                                        width: '15%',
                                                        ...pdfStyles.rightBorder
                                                    }}>
                                                        {workObject.total}
                                                    </Text>
                                                    <Text style={{
                                                        width: '15%',
                                                        ...pdfStyles.rightBorder
                                                    }}>
                                                        {workObject.price}
                                                    </Text>
                                                </View>
                                            )
                                        })
                                    }
                                    <View style={{ ...styles.workObjectFlex, ...pdfStyles.bottomBorder }}>
                                        <Text style={{
                                            width: '40%',
                                            ...pdfStyles.rightBorder,
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            
                                        </Text>
                                        <Text style={{
                                            width: '10%',
                                            ...pdfStyles.rightBorder,
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            
                                        </Text>
                                        <Text style={{
                                            width: '10%',
                                            ...pdfStyles.rightBorder,
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            
                                        </Text>
                                        <Text style={{
                                            width: '10%',
                                            ...pdfStyles.rightBorder,
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            
                                        </Text>
                                        <Text style={{
                                            width: '15%',
                                            ...pdfStyles.rightBorder,
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            {totalFoot}
                                        </Text>
                                        <Text style={{
                                            width: '15%',
                                            ...pdfStyles.rightBorder,
                                            paddingBottom: 10,
                                            flexWrap: 'wrap'
                                        }}>
                                            {totalPrice}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </Page>
                    )
                })
            }
        </Document>
    )
};

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
