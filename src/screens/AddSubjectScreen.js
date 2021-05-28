import { Button, Text, View } from "native-base";
import React, { useEffect } from "react";
import { Image, SectionList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const AddSubjectScreen = () => {

    const DATA = [
    {
        title: "Today",
        data: [
            { title: "English 1", description: "History of English speaking duck", background:'#707BFF' },
            { title: "Filipino", description: "Ang patu na Pinoy",background:'#FFA844' }
        ],
    },
    {
        title: "Yesterday",
            data: [
                { title: "English 1", description: "History of English speaking duck", background:'#FF7474' },
                { title: "Filipino", description: "Ang patu na Pinoy", background:'#F170FF' }
            ],
        }
];
    
    const Item = ({ item }) => (
        <TouchableOpacity style={{marginTop:8}}>
            <View style={{padding:20,backgroundColor:item.background}}>
                <Text >{item.title}</Text>
                <Text>{ item.description}</Text>
            </View>
        </TouchableOpacity>
        
    );

    const FloatingPlusButton = () => (
        <View style={{
            padding: 24, backgroundColor: '#5663FF', position: 'absolute',
            right: 16,
            bottom: 24,
            width: 80,
            height: 80,
            borderRadius:50
        }}>
            {/* <Text>Plus</Text> */}
            <Image source={require('../assets/images/plus-icon.png')} width={32} height={32}/>
        </View>
    )

    return (
        <>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item item={item} />}
                renderSectionHeader={({ section: { title } }) => (<Text style={{fontSize:12}}>{title}</Text>)}
           
            />
            <FloatingPlusButton/>
        </>
    )
}