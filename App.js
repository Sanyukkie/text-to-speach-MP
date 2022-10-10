import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import React, { useState } from 'react';

export default function App() {

  const [keyword, setKeyword] = useState('');

  
  const speak = () => {
    Speech.speak(keyword);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder='Text' 
        onChangeText={text => setKeyword(text)} />
      <Button title="Speak" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
