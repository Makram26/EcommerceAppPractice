import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState,useEffect } from 'react'

import auth from '@react-native-firebase/auth';
import Login from './src/Screens/Login';


const App = () => {

  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isSignInClicked, setIsSignInClicked] = useState(false);
  const colorValue = useRef(new Animated.Value(0)).current;



  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);




if (initializing) return null;


  const handleRegisterClick = () => {
    setIsRegisterClicked(true);
    setIsSignInClicked(false);

    Animated.timing(colorValue, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start();
    UserLogout()
  };

  const handleSignInClick = () => {
    setIsSignInClicked(true);
    setIsRegisterClicked(false);

    Animated.timing(colorValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const registerButtonColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#2e2e2c'],
  });

  const signInButtonColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#2e2e2c', '#FFFFFF'],
  });
  const UserLogout=(()=>{
    try {
        auth()
    .signOut()
    .then(() => console.log('User signed out!'));
    } catch (error) {
        console.log("error",error)
    }
    
})



  if(!user){
    return(
       <Login/>
    )
  }
  else{
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.stretch}
              source={{ uri: 'https://sarajbarbosa.files.wordpress.com/2019/05/59903330_10219567452358981_1135600524272336896_n.jpg' }}
            />
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Enterprise team collaboration.</Text>
          </View>
          <View style={styles.discriptionContainer}>
            <Text style={styles.discripText}>
              Bring together your files, your tools,projects and people. Including a new mobile and desktop application
            </Text>
          </View>
  
        </View>
        <View style={styles.lowerContainer}>
          <TouchableOpacity style={{flex:1}} onPress={handleRegisterClick}>
            <Animated.View
              style={{
                ...styles.btnStyle,
                backgroundColor: registerButtonColor,
               
              }}
            >
                <Text style={{...styles.btnText,color:isRegisterClicked ? "#000000":"#FFFFFF"}}>Register</Text>
              
              {/* Register button text or icon */}
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1}} onPress={handleSignInClick}>
            <Animated.View
              style={{
                ...styles.btnStyle,
                backgroundColor: signInButtonColor,
               
              }}
            >
              {/* Sign In button text or icon */}
  
             
                <Text style={{...styles.btnText,color:isSignInClicked? "#000000":"#FFFFFF"}}>Sign In</Text>
             
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#090909"
  },
  container: {
    flex: 0.9,
    backgroundColor: "#090909"
  },
  imageContainer: {
    flex: 0.5,
    // backgroundColor: "green"
  },
  stretch: {
    width: "100%",
    height: "100%"
  },
  headingContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "blue"
  },
  headingText: {
    color: "#FFFFFF",
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold"
  },
  discriptionContainer: {
    flex: 0.3,
    // backgroundColor: "yellow"
  },
  discripText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    // backgroundColor: "yellow",

    padding: 20
  },
  lowerContainer: {
    flex: 0.09,
    backgroundColor: "#2e2e2c",
    flexDirection: "row",
    borderRadius: 30,
    marginBottom: 10
    // justifyContent:"space-between",
    // alignItems:"center"
  },
  btnStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30

  },
  btnText: {
    // backgroundColor:"blue",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center"
  }
})





// import React, { useState, useRef } from 'react';
// import { View, TouchableOpacity, Animated,Text } from 'react-native';

// const App = () => {
//   const [isRegisterClicked, setIsRegisterClicked] = useState(false);
//   const [isSignInClicked, setIsSignInClicked] = useState(false);
//   const colorValue = useRef(new Animated.Value(0)).current;

  // const handleRegisterClick = () => {
  //   setIsRegisterClicked(true);
  //   setIsSignInClicked(false);

  //   Animated.timing(colorValue, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // const handleSignInClick = () => {
  //   setIsSignInClicked(true);
  //   setIsRegisterClicked(false);

  //   Animated.timing(colorValue, {
  //     toValue: 2,
  //     duration: 2000,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // const registerButtonColor = colorValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['blue', 'red'],
  // });

  // const signInButtonColor = colorValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['red', 'blue'],
  // });

//   return (
    // <View>
    //   <TouchableOpacity onPress={handleRegisterClick}>
    //     <Animated.View
    //       style={{
    //         backgroundColor: registerButtonColor,
    //         width: 200,
    //         height: 50,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <TouchableOpacity>
    //         <Text>Register</Text>
    //       </TouchableOpacity>
    //       {/* Register button text or icon */}
    //     </Animated.View>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={handleSignInClick}>
    //     <Animated.View
    //       style={{
    //         backgroundColor: signInButtonColor,
    //         width: 200,
    //         height: 50,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}
    //     >
    //       {/* Sign In button text or icon */}

    //       <TouchableOpacity>
    //         <Text>Sign In</Text>
    //       </TouchableOpacity>
    //     </Animated.View>
    //   </TouchableOpacity>
    // </View>
//   );
// };

// export default App;