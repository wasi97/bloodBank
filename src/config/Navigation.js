import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home'
import SignUp from '../screen/SignUp'
import SignIn from '../screen/Signin'
import studentLogin from '../screen/studentLogin'
import companyLogin from '../screen/companyLogin'
import adminLogin from '../screen/adminLogin'
import studentSignup from '../screen/studentSignup'
import CompanySignUp from '../screen/companySignup'
import adminSignup from '../screen/adminSignup'
import companyAccess from '../screen/companyAccess'
import studentAccess from '../screen/studentAccess'
import adminAccess from '../screen/adminAccess'


const Stack = createStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          {/* Login screens */}
          <Stack.Screen name="studentLogin" component={studentLogin} />
          <Stack.Screen name="companyLogin" component={companyLogin} />
          <Stack.Screen name="adminLogin" component={adminLogin} />
          {/* SignUp screens */}
          <Stack.Screen name="studentSignup" component={studentSignup} />
          <Stack.Screen name="CompanySignUp" component={CompanySignUp} />
          <Stack.Screen name="adminSignup" component={adminSignup} />
          {/* Access to data screens */}
          <Stack.Screen name="studentAccess" component={studentAccess} />
          <Stack.Screen name="companyAccess" component={companyAccess} />
          <Stack.Screen name="adminAccess" component={adminAccess} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;