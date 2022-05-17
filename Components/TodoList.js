import {React,useState} from 'react';
import { View ,Text ,Button, StyleSheet,ScrollView,TextInput} from 'react-native';
import Todo  from './Todo';
const TodoList  = () =>{
    const [title, setTitle] = useState('Hello');
    const[text,setText] = useState('ubsir');
    const [list,setList] = useState(['Hello World']);
    //Add Item Method
    const addItem = () =>{
        const updateList = list;
        updateList.push(text)
        setList(updateList)
        setText('')
    }
    /
    return (
        <View style={{width:'80%', marginBottom: 60}}>
            
            <Text style={[styles.align,styles.font]}>{title}</Text>
           <ScrollView>
               
               {list.map((x,index)=> <Todo key={index} item={x} index={index}/>)}
           </ScrollView>
           <View>
               <TextInput style={styles.input} 
               value={text}
               onChangeText={(text)=>setText(text)}
               />
           </View>
            <Button title='Add Item '  onPress={addItem}/>
           
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
    },
    input:{
        borderRadius:5,
        borderWidth:1,
        marginBottom:8,
        padding:8

    }
})

export default TodoList