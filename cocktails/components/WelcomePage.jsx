import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Dimensions,
  Image,
  Picker,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';
import Env from '../constants/Env';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#F5F5F5',
  },
});

export default function FirstPage() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios
      .get(Env.url.schools)
      .then((result) => result.data)
      .then((data) => setSchools(data));
  }, []);

  return (
    <KeyboardAvoidingWrapper>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
              <Text style={styles.title}>Bring your dream bar to home (NOM)</Text>
            </View>
            <View style={styles.body}>

            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingWrapper>
  );
}