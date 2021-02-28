import React, { Component } from 'react';
import { Container, Body, Header, Button, Text, Content, Form, Item, Input, Label, Title, Left, Right } from 'native-base';
import { StyleSheet } from "react-native"


export default function SignIn(props) {
    return (
        <Container>
          <Text></Text>
            <Button rounded block onPress={()=>props.navigation.navigate('studentLogin')}>
            <Text>Student Login</Text>
          </Button>
          <Text></Text>
            <Button rounded block onPress={()=>props.navigation.navigate('companyLogin')}>
            <Text>Company Login</Text>
          </Button>
          <Text></Text>
            <Button rounded block onPress={()=>props.navigation.navigate('adminLogin')}>
            <Text>Admin Login</Text>
          </Button>


          <Container>
        <Text></Text>
        <Text>Don't have an account </Text>
        <Text></Text>
        <Button rounded block onPress={() => props.navigation.navigate('SignUp')}>
          <Text>Sign Up</Text>
        </Button>
      </Container>

        </Container>

        
    )}