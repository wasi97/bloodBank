import React, { useState } from 'react'
import { View, Text, Button } from 'native-base'
import database from '@react-native-firebase/database'
import {StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


const companyAccess = () => {

  const [userdata, setUserData] = useState([])



  const list = () => {
    database().ref('/students').on('child_added', function (snapshot) {
      const data = snapshot.val()
      setUserData(userdata => [...userdata, data])
    });

    return userdata.map((element) => {
      return (
        <View  >
          <View style={styles.container}>
            <View >
              <Text style={[styles.name, styles.design]}>{element.FirstName}</Text>
            </View>
            <View >
              <Text style={[styles.name, styles.design]}>{element.lastName}</Text>
            </View>
            <View >
              <Text style={[styles.Marks, styles.design]}>{element.Marks}</Text>
            </View>
            <View >
              <Text style={[styles.Marks, styles.design]}>{element.email}</Text>
            </View>
            <View>
              <Text style={[styles.address, styles.design]}>{element.location}</Text>
            </View>
            <View>
              <Text style={[styles.contact, styles.design]}>{element.cellNum}</Text>
            </View>
          </View>
        </View>
      );
    });
  };

  return <ScrollView>
      <View>{list()}</View>;
      </ScrollView>
};

export default companyAccess;





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
  Marks: {
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