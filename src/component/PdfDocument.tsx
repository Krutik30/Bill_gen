/* eslint-disable @typescript-eslint/no-explicit-any */
// PdfModal.js
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Modal from 'react-modal';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

const PdfDocument = ({ formData }: any) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Name: {formData.name}</Text>
                <Text>Bill Name: {formData.billName}</Text>
                <Text>Price of Foot: {formData.priceOfFoot}</Text>
                <Text>Number of Rooms: {formData.numberOfRooms}</Text>
                <Text>Work Done in Foots:</Text>
                {formData.workDone.map((work: string, index: number) => (
                    <Text key={index}>Room {index + 1}: {work}</Text>
                ))}
            </View>
        </Page>
    </Document>
);

const PdfModal = ({ isOpen, onRequestClose, formData }: any) => (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="PDF Modal">
        <PDFViewer width="100%" height="800px">
            <PdfDocument formData={formData} />
        </PDFViewer>
        <button onClick={() => alert('Download logic here')}>Download PDF</button>
    </Modal>
);

export default PdfModal;
