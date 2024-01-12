/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
// @ts-ignore
import { Image } from '@react-pdf/primitives';
import Modal from 'react-modal';

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

const PdfModal = ({ isOpen, onRequestClose, formData }: any) => (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="PDF Modal">
        <PDFViewer width="100%" height={800}>
            <PdfDocument formData={formData} />
        </PDFViewer>
        {/* <button onClick={() => alert('Download logic here')}>Download PDF</button> */}
    </Modal>
);

export default PdfModal;
