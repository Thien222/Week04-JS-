import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} style={styles.icon} />
        <TextInput
          placeholder="Name"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} style={styles.icon} />
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold', 
    marginBottom: 24,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#F9E79F',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontWeight: 'bold', 
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold', 
  },
  forgotPassword: {
    marginTop: 20,
    color: '#000',
    fontWeight: 'bold', 
  },
});
