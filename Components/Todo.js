import React from 'react'
import { View, Text, StyleSheet,} from 'react-native'

const Todo = (props) =>{
    return (
        <View style={[styles.item,{margin:6,padding:4}]}>
            <Text>{props.item}</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    item:{
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
        borderColor: 'grey',
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'whitesmoke'
    }
})
export default Todo