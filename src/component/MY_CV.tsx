/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, Image, Link, Page, Text, View } from '@react-pdf/renderer'
import { MY_DATA, myCvCSS } from './MY_DATA'
import { EmailSvg, GithubSvg, LocationSvg, PhoneNumberSvg } from './SVG/SvgComp'

export default function MYCV({formData}: any) {
  return (
    <Document>
        <Page
            size="A4"
            style={myCvCSS.page}
        >
            <View
                style={myCvCSS.pageView}
            >
                <View
                    style={myCvCSS.bodyMainView}
                >
                    <View
                        style={myCvCSS.bodyleftView}
                    >
                        <View style={myCvCSS.contactBodyView}>
                            <View style={myCvCSS.contactHeader}>
                                <Text style={myCvCSS.contactHeaderText}>
                                    Contact Details
                                </Text>
                            </View>
                            <View style={myCvCSS.svgRow}>
                                <EmailSvg />
                                  <Link style={myCvCSS.svgRowText} src={MY_DATA.emailId}>
                                    <Text>
                                        {MY_DATA.emailId}
                                    </Text>
                                </Link>
                            </View>
                            <View style={myCvCSS.svgRow}>
                                <PhoneNumberSvg />
                                <Link style={myCvCSS.svgRowText} src={`tel:${MY_DATA.phoneNumber}`}>
                                    <Text>
                                        {MY_DATA.phoneNumber}
                                    </Text>
                                </Link>
                            </View>
                            <View style={myCvCSS.svgRow}>
                                <LocationSvg />
                                <Link style={myCvCSS.svgRowText} src={MY_DATA.location}>
                                    <Text>
                                        {MY_DATA.location}
                                    </Text>
                                </Link>
                            </View>
                            <View style={myCvCSS.svgRow}>
                                <GithubSvg />
                                <Link style={myCvCSS.svgRowText} src={MY_DATA.location}>
                                    <Text>
                                        {MY_DATA.githubId}
                                    </Text>
                                </Link>
                            </View>
                        </View>
                        <Text>ok</Text>
                    </View>
                </View>
                <View
                    style={myCvCSS.headerBar}
                >
                    <View fixed style={myCvCSS.headerSquare}></View>
                    <View
                        style={myCvCSS.headerMainView}
                    >
                        <View
                            style={myCvCSS.headerImageView}
                        >
                            <Image
                                style={myCvCSS.headerImage}
                                src={"/images/Krutik_photo.jpeg"}
                            />
                        </View>
                        <View style={myCvCSS.headerMainTextView}>
                            <Text
                                style={myCvCSS.headerMainText}
                            >
                                {formData.name}
                            </Text>
                            <Text
                                style={myCvCSS.hedaerProfessionText}
                            >
                                {formData.professionName} | {formData.professionName2}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
  )
}