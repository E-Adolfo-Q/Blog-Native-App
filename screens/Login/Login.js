import React from 'react';
import { KeyboardAvoidingView } from 'react-native'
import { TextInput, FormControl, Button } from '../../styles';
import { Title, LoginWrapper, FormContainer } from './Login.style';

export default Login = ({ navigation }) => {
  return (    
    <LoginWrapper>
      <Title h4>Sign in to start blogging</Title>      
      <KeyboardAvoidingView behavior="padding" enabled> 
      <FormContainer>
        <FormControl>
          <TextInput
            placeholder={'Email address'}
            keyboardType={'email-address'}
          />
        </FormControl>
        <FormControl>
          <TextInput
            placeholder={'Password'}
            secureTextEntry
          />
        </FormControl>
      </FormContainer>
      <Button
        info
        nameIcon="rocket"        
        title={'Login'}
        onPress={() => navigation.navigate('Blogs')}
      />
    </KeyboardAvoidingView>
    </LoginWrapper> 
  );
}

