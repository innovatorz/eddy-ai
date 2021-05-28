import { Text } from "native-base";
import React, { useEffect } from "react";
import { withAuthenticator,Authenticator } from 'aws-amplify-react-native'

export const LoginScreen = () => {
    return (
        <Authenticator/>
    )
}

// export const LoginScreen = () => (
//     <Authenticator>
        
//     </Authenticator>
// )
