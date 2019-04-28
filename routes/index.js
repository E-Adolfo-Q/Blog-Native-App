
import React from 'react';
import { Button,View } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import Login from '../screens/Login/Login';
import Blogs from '../screens/Blogs/Blogs';
import NewBlog from '../screens/NewBlog/NewBlog';

const MainStack = createStackNavigator({
  Login: {
    screen: Login,    
    navigationOptions: {
      headerTitleStyle: {textAlign:'center', alignSelf:'center',flex:1},     
      title: 'Login',
    },
  },
  Blogs: {
    screen: Blogs,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {textAlign:'center', alignSelf:'center',flex:1},  
        title: 'Blogs',
        headerRight: (<View style={{marginRight:10}}><Button
          title={'New'}          
          onPress={() => navigation.navigate('NewBlog')}
        /></View>)
      };
    },
  },
  NewBlog: {
    screen: NewBlog,
    navigationOptions: {
      title: 'NewBlog'
    }
  },
},  {
  initialRouteName: 'Login'
});

export default createAppContainer(MainStack);