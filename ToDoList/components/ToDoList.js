import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { View, Text, Button, StyleSheet } from 'react-native';
import AddTask from './AddTask';

const ToDoList = ({ initialValues }) => {
    const [toDos, setToDo] = useState(initialValues.map((value) => ({ id: uuidv4(), title: value })));

    const addToDo = (newTitle) => {
        const newToDo = { id: uuidv4(), title: newTitle };
        setToDo((prevToDo) => [...prevToDo, newToDo]);
    };

    const removeToDo = (id) => {
        setToDo((prevToDo) => toDos.filter((toDo) => toDo.id !== id))
    }

    return (
        <View style={styles.container}>
          {toDos.map((toDo) => (
            <View key={toDo.id}>
              <Text style={styles.text}>Task: {toDo.title}</Text>
              <View style={styles.buttonContainer}>
                <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
              </View>
            </View>
          ))}
          <AddTask onAddTask={addToDo} />
        </View>
    );
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

ToDoList.defaultProps = {
    initialValues: [],
};

export default ToDoList;