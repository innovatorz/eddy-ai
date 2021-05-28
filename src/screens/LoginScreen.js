import { withAuthenticator } from "aws-amplify-react-native";
import { Text } from "native-base";
import React, { useEffect } from "react";

const LoginScreen = () => {
  return <Text style={{ fontSize: 20 }}>Login</Text>;
};

export default withAuthenticator(LoginScreen, { includesGreetings: true });
