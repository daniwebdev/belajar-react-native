import React from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { 
  StyleSheet,
  Text, 
  View,
  Image,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput
} from 'react-native';

import bgImage from '../images/background.jpg';

const win = Dimensions.get('window')

export class LoginScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <ImageBackground source={bgImage} style={styles.containerBackground}>
            <View style={styles.containerLogo}>
              <Image resizeMode={'contain'} style={styles.logo} source={{uri: 'https://prioritas-group.com/assets/front/common/img/logo-inverse.png'}} />
              <Text style={styles.textLogo}>Login Predator</Text>
            </View>

            <KeyboardAvoidingView behavior="padding">
              <View style={styles.inputContainer}>
                <Icon 
                  name={'account'} 
                  size={28} 
                  color={'rgba(0,0,0,0.4)'}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.inputUsername}
                  placeholder={'Username'}
                  placeholderTextColor={'rgba(0,0,0, 0.5)'}
                  underlineColorAndroid={'transparent'}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon 
                  name={'lock'} 
                  size={28} 
                  color={'rgba(0,0,0,0.4)'}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.inputUsername}
                  placeholder={'Password'}
                  placeholderTextColor={'rgba(0,0,0, 0.5)'}
                  underlineColorAndroid={'transparent'}
                />
              </View>
              <View>
                <TouchableOpacity 
                  onPress={() => navigate('HomeScreen')}
                  style={styles.loginButton}>
                  <Icon name={'login-variant'} size={20} color={'#FFFFFF'} />
                  <Text>Login</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'stretch',
    width: 200,
    height: 80
  },
  containerLogo: {
    alignItems: 'center',
    marginBottom: 25
  },
  textLogo: {
    color: 'rgb(255,255,255)',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },
  inputUsername: {
    width: win.width - 55,
    height: 45,
    borderRadius: 20,
    paddingLeft: 43,
    backgroundColor: 'rgba(255,255,255,0.7)',
    color: 'rgba(0,0,0,0.5)',
    marginHorizontal: 25,
    zIndex:1
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  inputIcon: {
    position: 'absolute',
    paddingLeft: 35,
    paddingTop: 5,
    zIndex:2
  },
  loginButton: {
    width: win.width - 55,
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgba(0,0,0,0.5)',
    marginHorizontal: 25,
    backgroundColor: '#0047BA',
    flexDirection: 'row',
  }
});
