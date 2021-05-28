import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { AccessCodeScreen } from "../screens/AccessCodeScreen";
import { AddSubjectScreen } from "../screens/AddSubjectScreen";
import { ClassroomScreen } from "../screens/ClassroomScreen";
import { SubjectScreen } from "../screens/SubjectScreen";
import { TeacherClassSummaryScreen } from "../screens/TeacherClassSummaryScreen";
import { TeacherReportHistoryScreen } from "../screens/TeacherReportHistoryScreen";
import { TeacherDashboardScreen } from "../screens/TeachersDashboardScreen";
import { SplashScreen } from "../screens/SplashScreen";
import { LandingScreen } from "../screens/LandingScreen";


const Stack = createStackNavigator()


export const MainStack = ({ initialRouteName}) => {
  
    return (
        <Stack.Navigator headerMode="screen" initialRouteName={initialRouteName}>
            
        
            <Stack.Screen
                name="Landing"
                component={LandingScreen}
                options={() => {
                    return {
                    headerShown:false
                }} }
            />
      
                <Stack.Screen
                    name="Access Code"
                    component={AccessCodeScreen}
                />
               <Stack.Screen
                name="Add Subject"
                component={AddSubjectScreen}
            />
          
            <Stack.Screen
                name="Classroom"
                component={ClassroomScreen}
            />

            <Stack.Screen
                name="Subject"
                component={SubjectScreen}
            />

            <Stack.Screen
                name="Teacher Class Summary"
                component={TeacherClassSummaryScreen}
            />

            <Stack.Screen
               name="Teacher Report History"
               component={TeacherReportHistoryScreen}
            />

            <Stack.Screen
               name="Teacher Dashboard"
               component={TeacherDashboardScreen}
            />           
   


          
         
        </Stack.Navigator>
    )
}