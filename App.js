import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Form Validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength : Yup.number()
  .min(8,"Should be min of 4 characters")
  .max(16,"Cannot be more then 16 characters")
  .required("This is a required field")
})
export default function App() {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase,setLowerCase] = useState(true);
  const [upperCase,setUpperCase] = useState(false);
  const [numbers,useNumbers] = useState(false);
  const [symbols,useSymbols] = useState(false);

  const generatePasswordString = (passwordLength) =>{
    // 
  }
  const createPassword = (characters, passwordString) =>{
    // 
  }
  const resetPasswordState = () =>{
    // 
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
