import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');

const AddReminder = props => {

    const navigation = useNavigation();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const onReminderAdd = () => {
        if (!title){
            alert('Please enter a title.');
            return;
        }
        if (!description){
            alert('Please enter a description.');
            return;
        }
        if (!date){
            alert('Please enter a date.');
            return;
        }
        
        
        try {
            database.AddReminder(title, description,date);
        } catch (error) {
            console.log('Error adding reminder ' + error);
        }

        alert(title + " "  + ' Added!');
        navigation.navigate('Add Reminder!');
    }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput 
                value={title}
                onChangeText={value => setTitle(value)}
                style={styles.title}
                clearButtonMode={'while-editing'}
                placeholder={'Enter a Title'}
                placeholderTextColor={'black'}
            />
            <TextInput 
                value={description}
                onChangeText={value => setDescription(value)}
                style={styles.description}
                clearButtonMode={'while-editing'}
                placeholder={'Enter a Description'}
                placeholderTextColor={'black'}
            />
            <TextInput 
                value={date}
                onChangeText={value => setDate(value)}
                style={styles.date}
                clearButtonMode={'while-editing'}
                placeholder={'Enter a Date'}
                placeholderTextColor={'black'}
            />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onReminderAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default AddReminder;