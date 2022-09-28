import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Reminder from '../../components/Reminder';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import { openDatabase } from "react-native-sqlite-storage";

const GetRemindersDB = openDatabase({name: 'GetReminders.db'});
const remindersTableName = 'reminders';

const RemindersScreen = props => {

  const navigation = useNavigation();

  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      let results = [];
      GetRemindersDB.transaction(txn => {
        txn.executeSql(
          `SELECT * FROM ${remindersTableName}`,
          [],
          (_, res) => {
            let len = res.rows.length;
            console.log('Length of lists ' + len);
            if (len > 0){
              for (let i = 0; i < len; i++){
                let reminder = res.rows.reminder(i);
                results.push({
                  id: reminder.id,
                  title: reminder.title,
                  description: reminder.description,
                  date: reminder.date

                
                });
              }
            
              setReminders(results);
            } else {
              setReminders([]);
            }
          },
          error => {
            console.log('Error getting reminders ' + error.message);
          },
        )
      });
    });
    return listener;
  });

  return (
    <View style={styles.container}>
      <View>
        <FlatList 
          data={reminders}
          renderItem={({reminder}) => <reminders post={reminder} />}
          keyExtractor={reminder => reminder.id}
        />
      </View>
        <View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Add Reminder')}
                >
                <Text style={styles.buttonText}>Add Reminder</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default RemindersScreen;