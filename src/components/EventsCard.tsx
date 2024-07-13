import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const EventsCard = ({imoticon, color, title, description }) => {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <View style={styles.imageCard}>
                    <MaterialIcons name={imoticon} size={40} color={color} />
                </View>
                <View style={styles.textCard}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
    },
    container : {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 10,
    },
    imageCard:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ff00ff',
    },
    textCard:{
        marginLeft: 15,
        marginBottom: 5,
        flex:1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        color: '#888',
    },
});

export default EventsCard;
