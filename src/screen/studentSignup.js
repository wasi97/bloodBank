import React, { useState } from 'react'
import database from '@react-native-firebase/database'
import { Container, selectedValue, Content, Form, Label, Picker, Button, Text, Item, Input } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';




export default function studentSignup(props) {

    const [FirstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [cellNum, setCellNum] = useState("")
    const [Marks, setMarks] = useState()
    const [location, setLocation] = useState("")
    const [password, setPassword] = useState("")
    const [dbkey, setdbKey] = useState()

    const save_data = (props) => {

        const key = database().ref('/students').push().key
        setdbKey(key)

        let user = {
            FirstName,
            lastName,
            email: email,
            cellNum: cellNum,
            Marks:Marks,
            location: location,
            password: password,
            key: key
        }

        database().ref('/students').child(key).set(user)
        
        setFirstName("")
        setLastName("")
        setEmail("")
        setCellNum("")
        setMarks("")
        setLocation ("")
        setPassword ("")


    }

    return (


        <ScrollView>
            <Container>

                <Content>
                    <Form>
                        <Item floatingLabel>

                            <Label>First Name</Label>
                            <Input value={FirstName} onChangeText={FirstName => setFirstName(FirstName)} />
                        </Item>

                        <Item floatingLabel>
                            <Label>Last Name</Label>
                            <Input value={lastName} onChangeText={lastName => setLastName(lastName)} />
                        </Item>

                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input value={email} onChangeText={email => setEmail(email)} />
                        </Item>

                        <Item floatingLabel>
                            <Label>Cell #</Label>
                            <Input value={cellNum} onChangeText={cellNum => setCellNum(cellNum)} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Marks</Label>
                            <Input value={Marks} onChangeText={Marks => setMarks(Marks)} />
                        </Item>

                        <Item floatingLabel>
                            <Label floatingLabel>City</Label>
                            <Input value={location} onChangeText={location => setLocation(location)} />
                        </Item>

                        <Item floatingLabel>
                            <Label floatingLabel>Password</Label>
                            <Input value={password} secureTextEntry={true} onChangeText={password => setPassword(password)} />
                        </Item>


                        <Text>{"\n"}</Text>
                        <Item>
                            <Button rounded onPress={()=>{save_data();props.navigation.navigate('SignIn')}}>
                                <Text>Sign Up</Text>
                            </Button>
                        </Item>
                    </Form>
                </Content>

            </Container>
        </ScrollView>

    )
}