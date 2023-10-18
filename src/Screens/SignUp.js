import React, { useState,useContext } from 'react'
import { View, Text, StatusBar,Image, TextInput, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native'
import { Auth_Screen_Styles} from '../Constant/LoginStyle'
import Feather from 'react-native-vector-icons/Feather';
import MailBox from 'react-native-vector-icons/Fontisto';


const { width, height } = Dimensions.get('window');

const SignUp = ({ navigation }) => {
  

  return (
    <View style={Auth_Screen_Styles.main_container}>
     
      <StatusBar animated={true} backgroundColor="#000000" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="always">
        {/* Logo */}
        <View style={Auth_Screen_Styles.header}>
            
          <Image source={require("../assest/icon/AppLogo.jpeg")} resizeMode='contain' style={Auth_Screen_Styles.bg} />
        </View>
        <View style={Auth_Screen_Styles.body}>
          <Text style={Auth_Screen_Styles.heading}>Let's Sign In</Text>
          {/* User Email */}
          <View
            style={Auth_Screen_Styles.inputContainer}
          >
            <TextInput
              placeholder='Enter Your Email'
              placeholderTextColor="#A1A5C1"
              style={Auth_Screen_Styles.input_Text}
            //   value={userId}
            //   onChangeText={(val) => getUserIdValue(val)}
            />
            <MailBox name="email" size={width * 0.04} color="#030303" />
          </View>
          {/* <Text style={{ color: "red", marginTop: 5, fontSize: 10, marginLeft: 3 }}>{emailErrorMsg != "" ? emailErrorMsg : ""}</Text> */}
          {/* Password */}
          <View style={Auth_Screen_Styles.inputContainer}>
            <TextInput
              placeholder='Enter Your Password'
              placeholderTextColor="#A1A5C1"
              style={Auth_Screen_Styles.input_Text}
            //   secureTextEntry={oldsecureTextEntry ? false : true}
            //   value={password}
            //   onChangeText={(val) => getPasswordValue(val)}
            />
            {/* <TouchableOpacity onPress={updateOldSecureTextEntry}>
              {
                oldsecureTextEntry ?
                  <Feather name="eye" size={width * 0.04} color="#030303" />
                  :
                  <Feather name="eye-off" size={width * 0.04} color="#030303" />
              }
            </TouchableOpacity> */}
          </View>
          {/* <Text style={{ color: "red", marginTop: 5, fontSize: 10, marginLeft: 3 }}>{passwordErrorMsg != "" ? passwordErrorMsg : ""}</Text> */}
          {/* Database Name */}
          <View style={Auth_Screen_Styles.inputContainer}>
            <TextInput
              placeholder='Enter Database Name'
              placeholderTextColor="#A1A5C1"
              style={Auth_Screen_Styles.input_Text}
            //   value={dbName}
            //   onChangeText={(val) => getDBValue(val)}
            />
            <MailBox name="database" size={width * 0.04} color="#030303" />
          </View>
          {/* <Text style={{ color: "red", marginTop: 5, fontSize: 10, marginLeft: 3 }}>{dbErrorMsg != "" ? dbErrorMsg : ""}</Text> */}
          <TouchableOpacity onPress={() => submitHandler()} style={Auth_Screen_Styles.btnContainer}>
            <Text style={Auth_Screen_Styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
export default SignUp
