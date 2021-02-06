import React, { useState } from 'react'
import { View, Text, Button } from 'native-base'
import database from '@react-native-firebase/database'
import {StyleSheet} from 'react-native'


const Home = () => {

  const [userdata, setUserData] = useState([])



  const list = () => {
    database().ref('/users').on('child_added', function (snapshot) {
      const data = snapshot.val()
      setUserData(userdata => [...userdata, data])
    });
    return userdata.map((element) => {
      return (
        // <View key={element.key} style={{margin: 10}}>
        //   <Text>{element.FirstName}</Text>
        //   <Text>{element.Password}</Text>
        // </View>
        <View  >
          <View style={styles.container}>
            <View >
              <Text style={[styles.bloodGroup, styles.design]}>{element.bloodGroup}</Text>
            </View>
            <View >
              <Text style={[styles.name, styles.design]}>{element.FirstName}</Text>
            </View>
            <View>
              <Text style={[styles.address, styles.design]}>{element.address}</Text>
            </View>
            <View>
              <Text style={[styles.contact, styles.design]}>{element.contact}</Text>
            </View>
          </View>
        </View>
      );
    });
  };

  return <View>{list()}</View>;
};

export default Home;





const styles = StyleSheet.create({
  container: {

    padding: 24,
    backgroundColor: "#a055",
    alignContent: "center",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'red',
  },
  design: {
    color: "white",
    width: "100%",
    height: 50,
    paddingLeft: 15,
    fontSize: 28,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  }
  ,
  bloodGroup: {
    backgroundColor: "orange",
    borderWidth: 2,
  },
  name: {
    backgroundColor: "blue",
  },
  address: {
    backgroundColor: "grey",

  },
  contact: {
    backgroundColor: "purple",

  }
})