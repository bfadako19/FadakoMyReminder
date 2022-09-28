import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Reminder = props => {

    const post = props.post;

    const onPress = () => {
        console.log(post.title + " " + post.description + " " + post.date);
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 2}}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.description}>{post.description}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.date}>{post.date}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Reminder;