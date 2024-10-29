import { blue, brown } from "@mui/material/colors"
import { StyleSheet } from "@react-pdf/renderer"

export const MY_DATA = {
    name: "Krutik Aghera",
    professionName: 'Web Devloper',
    professionName2: 'Software Engineer',
    emailId: 'agherakrutik99@gmail.com',
    phoneNumber: '+91-7990451310',
    location: 'Ahmedabad - Guj',
    githubId: 'Krutik30',
    
} 

export const myCvCSS = StyleSheet.create({
    page:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        fontSize: 10, // Set font size to 10
    },
    pageView: {
        height: '100%',
        width: '100%',
    },
    headerBar:{
        position: 'absolute',
        width: '100%',
        height: 120,
        backgroundColor: brown[500],
    },
    headerSquare:{
        width: 120,
        height: 120,
        backgroundColor: brown[500],
        transform: 'rotateY(0deg) rotate(45deg)',
        position: 'absolute',
        top: 40,
        left: 30,
    },
    headerMainView:{
        flexDirection: 'row',
        height: '100%',
    },
    headerImageView:{
        width: '45%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImage: {
        // width: 100,
        // height: 100,
        objectFit: 'cover',
        borderRadius: '50%'
    },
    headerMainTextView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    headerMainText: {
        fontSize: 46,
        position: 'relative',
        top: 20,
        color: 'white'
    },
    hedaerProfessionText: {
        fontSize: 18,
        position: 'relative',
        top: 20,
        color: 'white'
    },
    bodyMainView:{
        flexDirection: 'row',
        height: '100%',
        paddingTop: 120
    },
    bodyleftView: {
        width: 185,
        backgroundColor: blue[100]
    },
    contactBodyView: {
        paddingTop: 80,
        width: '100%',
        height: 200,
        flexDirection: 'column'
    },
    contactHeader: {
        textAlign: 'center',
        paddingBottom: 5
    },
    contactHeaderText: {
        fontSize: 15,
        borderBottom: 1,
    },
    svgRow: {
        paddingLeft: 20,
        paddingBottom: 2,
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    svgRowText: {
        textDecoration: 'none',
        color: 'black'
    }
})