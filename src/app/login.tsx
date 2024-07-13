import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';




const EditProfileView = () => {
  const profile = {
    name: '',
    email: '',
    password: '',
    photo: 'https://example.com/jane-doe-avatar.png',
  }
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [password, setBio] = useState(profile.password);
  const [photo, setPhoto] = useState(profile.photo);

  const handleSubmit = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>

        <MaterialCommunityIcons
          style={styles.photo}
          name="human-greeting-variant"
          size={90}
          color="black"
        />
        <TouchableOpacity style={styles.changePhotoButton} onPress={() => {/* open image picker */}}>
          <Text style={styles.changePhotoButtonText}>Change Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          value={password}
          onChangeText={setBio}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit({name, email, password})}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ffd700',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fffafa',
    fontSize: 18,
  },
  photoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changePhotoButton: {
    marginTop: 1,
    borderColor: '#ffd700',
    borderRadius: 5,
  },
  changePhotoButtonText: {
    color: '#ffd700',
    fontSize: 18,
  },
});

export default EditProfileView;

