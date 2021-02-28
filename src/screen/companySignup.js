import React, { useState } from 'react'
import database from '@react-native-firebase/database'
import { Container, selectedValue, Content, Form, Label, Picker, Button, Text, Item, Input } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';




export default function companySignup(props) {

    const [CompanyName, setCompanyName] = useState("")
    const [email, setEmail] = useState("")
    const [cellNum, setCellNum] = useState("")
    const [location, setLocation] = useState("")
    const [password, setPassword] = useState("")
    const [dbkey, setdbKey] = useState()

    const save_data = (props) => {

        const key = database().ref('/company').push().key
        setdbKey(key)

        let user = {
            
            CompanyName:CompanyName,
            email: email,
            cellNum: cellNum,
            location: location,
            password: password,
            key: key
        }

        database().ref('/company').child(key).set(user)
        
        setCompanyName("")
        setEmail("")
        setCellNum("")
        setLocation ("")
        setPassword ("")


    }

    return (


        <ScrollView>
            <Container>

                <Content>
                    <Form>
                        <Item floatingLabel>

                            <Label>Company Name</Label>
                            <Input value={CompanyName} onChangeText={CompanyName => setFirstName(CompanyName)} />
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