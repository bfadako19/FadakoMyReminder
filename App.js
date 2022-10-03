/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import Router from './src/navigation/Router';

const database =
require ('./src/components/Handlers/database.js');
try{
  database.createRemindersTable();
} catch(error){
  console.log('Failed to create Reminders table ' + error);
}

const App: () => Node = () => {
  return <Router />;
};

export default App;
