import React, { Component } from 'react';
import { Container, Body, Header, Button, Text, Content, Form, Item, Input, Label, Title, Left, Right } from 'native-base';
import { StyleSheet } from "react-native"


export default function studentLogin(props) {
  return (
    <Container>
      {/* header  */}
      <Header>
       
        <Body>
          <Title style={{ paddingLeft: 50 }}>
            Campus Recruitment System
</Title>
        </Body>
      </Header>
      <Text></Text>
      <Header>
      <Body>
          <Title style={{paddingLeft:100 }}>
            Student Login
</Title>
        </Body>
      </Header>
      {/* form sign in credentias */}
      <Form>
        <Item stackedLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item stackedLabel >
          <Label>Password</Label>
          <Input />
        </Item>
        <Item stackedLabel >
          <Button rounded block onPress={()=>props.navigation.navigate('studentAccess')}>
            <Text>Login</Text>
          </Button>
        </Item>
      </Form>


    </Container>

  )

}




const styles = StyleSheet.create({
  Main: {

  }
})