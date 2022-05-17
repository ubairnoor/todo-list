import {React,useState} from 'react';
import { View ,Text ,Button} from 'react-native';
import Todo  from './Todo';
const TodoList  = () =>{
    const [title, setTitle] = useState('Hello')
    return (
        <View>
            <Text>{title}</Text>
            <Button title='Change Me'  onPress={()=>setTitle('Hello this is React Native Application')}/>
            <Todo name="Ubair Noor"/>
            <Todo name="React Developer"/>


        </View>
    )
}

export default TodoList