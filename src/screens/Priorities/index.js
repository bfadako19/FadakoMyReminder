import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';



const PrioritiesScreen = props => {

    const navigation = useNavigation();
return(
<View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => console.log('Add Priority')}
                >
                <Text style={styles.buttonText}>Add Priority</Text>
            </TouchableOpacity>
        </View>
);
  
};

export default PrioritiesScreen;