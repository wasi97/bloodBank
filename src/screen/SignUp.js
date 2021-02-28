import React, { Component } from 'react';
import { Container, Body, Header, Button, Text, Content, Form, Item, Input, Label, Title, Left, Right } from 'native-base';
import { StyleSheet } from "react-native"


export default function SignUp(props) {
    return (
        <Container>
          <Text></Text>
          <Button rounded style={{marginLeft:128}}><Text>SignUp as</Text></Button>
          <Text></Text>
            <Button rounded block onPress={()=>props.navigation.navigate('studentSignup')}>
            <Text>Student</Text>
          </Button>
          <Text></Text>
            <Button rounded block onPress={()=>props.navigation.navigate('CompanySignUp')}>
            <Text>Company </Text>
          </Button>
          <Text></Text>
            <Button rounded block onPress={()=>props.navigation.navigate('adminSignup')}>
            <Text>Admin </Text>
          </Button>



        </Container>

        
    )}