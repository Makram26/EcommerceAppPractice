import { StyleSheet, Text, View, StatusBar, TextInput, Platform, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import CustomStatusBar from '../components/CustomStatusBar'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EyeIcon from 'react-native-vector-icons/Octicons';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import firebase from "@react-native-firebase/app"



const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")






    const [passwordShow, setPasswordShow] = useState(false)






    const UserLogin = async () => {
        console.log("email", email)
        console.log("password", password)
        try {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(async () => {
                    console.log('User account created & signed in!');
                    try {
                        firestore()
                        .collection('users')
                        .add({
                           uid:auth().currentUser.uid,
                           Numbers:[]
                        }).then(docRef => {
                          console.log("Document written with ID: ", docRef.id);
                        //   docID = docRef.id
                          // console.log("You can now also access this. as expected: ", this.foo)
                        })

                    } catch (error) {
                       console.log("try catch error",error)
                    }



                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error("error", error);
                });
        } catch (error) {
            console.log("error", error)
        }




    }





    return (

        <View style={{ flex: 1 }}>

            <ScrollView contentContainerStyle={styles.mainContainer} keyboardShouldPersistTaps="handled">
                {/* <StatusBar  backgroundColor={"#000000"}/> */}
                <CustomStatusBar backgroundColor={"blue"} barStyle="light-content" />

                {/* <Text style={styles.gobackIcon}>goBackIcon</Text> */}
                <TouchableOpacity>
                    <Icon name="arrow-left-top" size={30} style={styles.gobackIcon} />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <View style={styles.HeadingContainer}>
                        <Text style={styles.HeadingText}>Let's sign you in.</Text>
                        <Text style={{ ...styles.HeadingText, fontWeight: "500", fontSize: 30 }}>Welcome back.</Text>
                        <Text style={{ ...styles.HeadingText, fontWeight: "500", fontSize: 30 }}>You've been missed!</Text>


                    </View>

                    <View style={styles.inputmainContainer}>

                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder='Phone, email or username'
                                placeholderTextColor="#757272"
                                style={styles.textInputStyle}
                                value={email}
                                onChangeText={(val) => setEmail(val)}
                            />
                        </View>

                        <View style={{ ...styles.inputContainer, flexDirection: "row" }}>
                            <TextInput
                                placeholder='password'
                                placeholderTextColor="#757272"
                                secureTextEntry={passwordShow ? false : true}
                                style={{ ...styles.textInputStyle, width: "88%" }}
                                value={password}
                                onChangeText={(val) => setPassword(val)}
                            />
                            <View style={{ justifyContent: "center", }}>
                                {
                                    passwordShow ?
                                        <TouchableOpacity onPress={() => setPasswordShow(!passwordShow)}>
                                            <EyeIcon name="eye" size={24} style={{ color: "#FFFFFF", marginLeft: 10 }} />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => setPasswordShow(!passwordShow)}>
                                            <EyeIcon name="eye-closed" size={24} style={{ color: "#FFFFFF", marginLeft: 10 }} />
                                        </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </View>


                    <View style={styles.lowerContainer}>
                        <View style={styles.bottomText}>
                            <Text style={styles.textStyle}>Don't have an account? <Text style={{ color: "#FFFFFF" }}> Register</Text></Text>
                        </View>

                        <TouchableOpacity onPress={() => UserLogin()} style={styles.btnContainer}>
                            <Text style={styles.btnText}>Sign In</Text>
                        </TouchableOpacity>


                    </View>


                </View>



            </ScrollView>
        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        backgroundColor: "#000000",
        // height: "100%"
    },
    gobackIcon: {
        color: "#FFFFFF",
        padding: 15,
        // backgroundColor:"red"
    },
    HeadingContainer: {
        flex: 0.3,
        // backgroundColor:"blue",
        justifyContent: "center",
        marginTop: 20
        // alignItems:"center"

    },
    HeadingText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 35,
        textAlign: "left",
        marginLeft: 18
    },
    inputmainContainer: {
        flex: 0.5,
        // backgroundColor:"green"
    },
    inputContainer: {
        width: "85%",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#757272",
        padding: Platform.OS == "ios" ? 17 : 3,
        marginTop: 25
    },
    textInputStyle: {
        color: "#FFFFFF"
    },
    lowerContainer: {
        flex: 0.2,
        justifyContent: "flex-end"
        // backgroundColor:"red"
    },
    bottomText: {
        alignItems: "center",
        marginTop: 25,
    },
    textStyle: {
        color: "#999696",
        fontSize: 16
    },
    btnContainer: {
        width: "85%",
        backgroundColor: "#FFFFFF",
        alignSelf: "center",
        marginTop: 20,
        alignItems: "center",
        borderRadius: 10,
        marginBottom: Platform.OS == "android" ? 20 : 30
    },
    btnText: {
        fontSize: 17,
        padding: 15,
        fontWeight: "bold",
        color: "#000000"
    }
})