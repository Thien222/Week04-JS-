import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';

const PasswordGeneratorScreen = () => {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = () => {
    console.log('Generate password with the following settings:', {
      passwordLength,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSpecialChars,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PASSWORD GENERATOR</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={passwordLength}
          onChangeText={setPasswordLength}
          placeholder="Enter length"
        />
      </View>

      <View style={styles.option}>
        <CheckBox
          value={includeLowercase}
          onValueChange={setIncludeLowercase}
        />
        <Text style={styles.label}>Include lower case letters</Text>
      </View>

      <View style={styles.option}>
        <CheckBox
          value={includeUppercase}
          onValueChange={setIncludeUppercase}
        />
        <Text style={styles.label}>Include upcase letters</Text>
      </View>

      <View style={styles.option}>
        <CheckBox
          value={includeNumbers}
          onValueChange={setIncludeNumbers}
        />
        <Text style={styles.label}>Include number</Text>
      </View>

      <View style={styles.option}>
        <CheckBox
          value={includeSpecialChars}
          onValueChange={setIncludeSpecialChars}
        />
        <Text style={styles.label}>Include special symbol</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#23235B', // Updated background color
  },
  header: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PasswordGeneratorScreen;
