import {React,useState} from 'react';
import { View ,Text ,Button, StyleSheet} from 'react-native';
import Todo  from './Todo';
const TodoList  = () =>{
    const [title, setTitle] = useState('Hello')
    return (
        <View style={{width:'80%', marginBottom: 60}}>
            
            <Text style={[styles.align,styles.font]}>{title}</Text>
            <Todo name="Ubair Noor"/>
            <Todo name="React Developer"/>
            <Button title='Change Me'  onPress={()=>setTitle('Hello this is React Native Application')}/>
           
        </View>
    )
} 

const styles =  StyleSheet.create({
    align:{
        alignSelf:'center'
    },
    font:{
        fontSize: 20,
        fontFamily:'bold'
    }
})

export default TodoList