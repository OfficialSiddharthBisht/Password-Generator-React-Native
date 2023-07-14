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
  const [numbers,setNumbers] = useState(false);
  const [symbols,setSymbols] = useState(false);

  const generatePasswordString = (passwordLength) =>{
    let characterList = '';
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=";
    if(upperCase){
      characterList += upperCaseChars;
    }
    if(lowerCase){
      characterList += lowerCaseChars;
    }
    if(numbers){
      characterList += digitChars;
    }
    if(symbols){
      characterList += symbols;
    }
    const passwordResult = createPassword(characterList,passwordLength);
    setPassword(passwordResult)
    setIsPassGenerated(true);
  }
  const createPassword = (characters, passwordLength) =>{
    let result = "";
    for(let i = 0; i < passwordLength; i++){
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  }
  const resetPasswordState = () =>{
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false)
    setSymbols(false);
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
