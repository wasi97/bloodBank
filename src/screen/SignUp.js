import React, { useState } from 'react'
import database from '@react-native-firebase/database'
import { Container, selectedValue, Content, Form, Label, Picker, Button, Text, Item, Input } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';




export default function SignUp(props) {

    const [FirstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [cellNum, setCellNum] = useState("")
    const [bloodGroup, setBloodGroup] = useState("A")
    const [RHFactor, setRHFactor] = useState("+ve")
    const [location, setLocation] = useState("")
    const [password, setPassword] = useState("")
    const [dbkey, setdbKey] = useState()

    const save_data = (props) => {

        const key = database().ref('/users').push().key
        setdbKey(key)

        let user = {
            FirstName,
            lastName,
            email: email,
            cellNum: cellNum,
            bloodGroup: bloodGroup,
            RHFactor: RHFactor,
            location: location,
            password: password,
            key: key
        }

        database().ref('/users').child(key).set(user)
        
        setFirstName("")
        setLastName("")
        setEmail("")
        setCellNum("")
        setBloodGroup("")
        setRHFactor("")
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

                        <Item >
                            <Label>Blood Group</Label>
                            <Picker

                                selectedValue={bloodGroup}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
                            >

                                <Picker.Item label="A" value="A" />
                                <Picker.Item label="B" value="B" />
                                <Picker.Item label="AB" value="AB" />
                                <Picker.Item label="O" value="O" />
                            </Picker>
                        </Item>
                        <Item >
                            <Label>RH Factor</Label>
                            <Picker
                                selectedValue={RHFactor}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => setRHFactor(itemValue)}
                            >

                                {/* <Picker.Item label="Select RH Factor" value="" /> */}
                                <Picker.Item label="+ve" value="+ve" />
                                <Picker.Item label="-ve" value="-ve" />
                            </Picker>
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