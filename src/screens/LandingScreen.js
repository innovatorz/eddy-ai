import { Button, Text, View } from "native-base";
import React from "react";
import { withAuthenticator } from 'aws-amplify-react-native'

// Start Backend integration using amplify
import Amplify from "aws-amplify";
import config from "../aws-exports";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
// End

export const LandingScreen = ({navigation }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center" }}>
        Your Class is one click away
      </Text>
      <Button style={{ alignSelf: "center", marginTop: 80 }} onPress={() => {
        navigation.navigate("Login")
      }}>
        <Text>Sign in as a Teacher</Text>
      </Button>
      <Button style={{ alignSelf: "center", marginTop: 20 }}>
        <Text>Student Access Code</Text>
      </Button>
    </View>
  );
};



// export const LandingScreen = withAuthenticator()

// export default withAuthenticator(LandingScreen)