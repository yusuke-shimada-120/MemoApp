import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import { Link, router } from 'expo-router'
import { useState } from 'react'

import Button from '../../components/Button'

const handlePress = (): void => {
  // ログイン
  router.replace('/memo/list')
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
          <Text style={styles.title}>Log In</Text>
          <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='Email Address'
          textContentType='emailAddress'
          />
          <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          autoCapitalize='none'
          secureTextEntry
          placeholder='Password'
          textContentType='password'
          />
          <Button label='Submit' onPress={handlePress}/>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Not registered</Text>
            <Link href="/auth/sign_up" asChild>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Sign Up here!</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    inner: {
      paddingVertical: 24,
      paddingHorizontal: 27
    },
    title: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold',
      marginBottom: 24
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#fff',
      height: 48,
      padding: 8,
      fontSize: 16,
      marginBottom: 16
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    footerText: {
      fontSize: 14,
      color: '#888',
      marginRight: 8
    },
    footerLink: {
      fontSize: 14,
      color: '#004390'
    }
})

export default Login
