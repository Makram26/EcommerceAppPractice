import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors, { COLORS } from '../Util/Color';
const { width, height } = Dimensions.get('window');
export const Splash_Screen_Styles = StyleSheet.create({
    main_container: {
        flex: 1,
        overflow: 'hidden'
    },
    bg: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logo: {
        marginBottom: 85,
        width: 118,
        height: 132
    },
    btn_container: {
        backgroundColor: "#FFFFFF",
        width: "46%",
        padding: 15,
        borderRadius: 10,
        marginBottom: 78
    },
    btn_text: {
        color: "#000000",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
        letterSpacing: 0.03
    }
})
export const Auth_Screen_Styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    header: {
        flex: 0.23,
    },
    bg: {
        width: "100%",
        height: height * 0.2, // Adjust the percentage as needed
        marginTop: height * 0.03, // Adjust the percentage as needed
    },
    BackBtn: {
        backgroundColor: "#F5F4F8",
        justifyContent: "center",
        alignItems: "center",
        margin: width * 0.02, // Adjust the percentage as needed
        width: width * 0.12, // Adjust the percentage as needed
        height: width * 0.12, // Adjust the percentage as needed
        borderRadius: (width * 0.12) / 2, // Adjust the percentage as needed
    },
    body: {
        flex: 0.75,
        marginTop: height * 0.01, // Adjust the percentage as needed
        padding: width * 0.05, // Adjust the percentage as needed
    },
    logo1: {
        width: width * 0.3, // Adjust the percentage as needed
        height: height * 0.15, // Adjust the percentage as needed
        alignSelf: "center",
        marginBottom: height * 0.02, // Adjust the percentage as needed
    },
    heading: {
        color: COLORS.heading,
        fontWeight: "700",
        fontSize: width * 0.05, // Adjust the percentage as needed
        // lineHeight: height * 0.035, // Adjust the percentage as needed
        letterSpacing: 0.03,
        marginBottom: height * 0.01, // Adjust the percentage as needed
    },
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F4F8",
        borderRadius: width * 0.04, // Adjust the percentage as needed
        flexDirection: "row",
        padding: width * 0.035, // Adjust the percentage as needed
        marginTop: height * 0.02, // Adjust the percentage as needed
    },
    input_Text: {
        color: COLORS.heading,
        fontWeight: "500",
        fontSize: width * 0.04, // Adjust the percentage as needed
        paddingTop: Platform.OS === "ios" ? height * 0.01 : -height * 0.003, // Adjust the percentage as needed
        paddingBottom: height * 0.01, // Adjust the percentage as needed
        width: "90%"
    },
    showpasswordContainer: {
        flexDirection: "row-reverse",
        color: "#000000",
        fontSize: width * 0.035, // Adjust the percentage as needed
        fontWeight: "600",
        lineHeight: height * 0.025, // Adjust the percentage as needed
        letterSpacing: 0.03,
        marginBottom: height * 0.02, // Adjust the percentage as needed
    },
    btnContainer: {
        backgroundColor: COLORS.btn_color,
        width: "100%",
        alignSelf: "center",
        padding: width * 0.05, // Adjust the percentage as needed
        borderRadius: width * 0.04, // Adjust the percentage as needed
        marginTop: height * 0.03, // Adjust the percentage as needed
    },
    btnText: {
        color: "#FFFFFF",
        fontSize: width * 0.04, // Adjust the percentage as needed
        fontWeight: "700",
        // lineHeight: height * 0.03, // Adjust the percentage as needed
        letterSpacing: 0.03,
        textAlign: "center"
    },
    footer: {
        flex: 0.07,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: height * 0.02, // Adjust the percentage as needed
    },
    footerText: {
        color: "#53587A",
        fontWeight: "400",
        fontSize: width * 0.035, // Adjust the percentage as needed
        lineHeight: height * 0.025, // Adjust the percentage as needed
        letterSpacing: 0.03
    }
});


export const Header_Styles = StyleSheet.create({
    Header_container: {
        // flex: 0.1,
        width: "100%",
        height: 70,
        backgroundColor: COLORS.btn_color,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15
    },
    headerTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 32,
        marginLeft: 15
    }
})