import React, { Component } from 'react';
import { Container, Body, Header, Button, Text, Content, Form, Item, Input, Label, Title, Left, Right } from 'native-base';
import { StyleSheet } from "react-native"


export default function SignIn(props) {
  return (
    <Container>
      {/* header  */}
      <Header>
        <Left />
        <Body>
          <Title style={{ paddingLeft: 20 }}>
            Wasi Blood Bank
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
          <Button rounded block onPress={()=>props.navigation.navigate('Home')}>
            <Text>Login</Text>
          </Button>
        </Item>
      </Form>

      <Container>
        <Text></Text>
        <Text>Don't have account </Text>
        <Text></Text>
        <Button rounded block onPress={() => props.navigation.navigate('SignUp')}>
          <Text>Sign Up</Text>
        </Button>
      </Container>

    </Container>

  )

}




const styles = StyleSheet.create({
  Main: {

  }
})