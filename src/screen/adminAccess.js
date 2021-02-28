import React from 'react'
import { View, Text, Button } from 'native-base'


const adminAccess = (props) => {
   
return(
    <View>
        <Button rounded block onPress={()=>{props.navigation.navigate('companyAccess')}}>
            <Text>View Students Data</Text>
        </Button>
        <Text></Text>
        <Button rounded block onPress={()=>{props.navigation.navigate('studentAccess')}}>
            <Text>View Companies Data</Text>
        </Button>
    </View>
)
}

export default adminAccess;

