import React from 'react';
import EventsCard from '../../components/EventsCard';
import { Image , Text, View, StyleSheet } from 'react-native';

export default function Events() {
    return (
        <View>
            <EventsCard imoticon='group-add' color='black' title="Create a new event" description="This option is to create an awsome and random give the best present." />
            <EventsCard imoticon='groups' color='black' title="Modify a event" description="To be able to persuit, you must be the organizer of the event, and allows to manage the group, reschedule, re-send information to participants, ..." />
            <EventsCard imoticon='group-off' color='black' title="Delete an event" description="You must be the organizer of this particular event. Every participant will recive the annulment" />
        </View>
    );
};