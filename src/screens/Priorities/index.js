import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';



const PrioritiesScreen = props => {

    const navigation = useNavigation();
<View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Add Priority')}
                >
                <Text style={styles.buttonText}>Add Priority</Text>
            </TouchableOpacity>
        </View>
    console.log("Priority Added")
  
};

export default PrioritiesScreen;