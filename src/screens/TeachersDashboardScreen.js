import { Text } from "native-base";
import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import {
  ProgressChart,
} from 'react-native-chart-kit'

export const TeacherDashboardScreen = () => {


    const screenWidth = Dimensions.get('window').width

    const data = {
    data: [0.4, 0.2, .09],
        colors: ["red", "blue", "green"],
    labels:["Happy",
      "Neutral",
      "Sad",
      ]
  };

    const chartConfig = {
     
      backgroundGradientFrom: '#fff',
      backgroundGradientTo:'#fff',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
        
    }

    return (
        <>
            <ProgressChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                withCustomBarColorFromData={true}
            />
            <Text>Teacher Dashboard</Text>
            </>
    )
}