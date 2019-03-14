import React from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput
} from 'react-native';

export class HomeScreen extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image resizeMode={'contain'} style={styles.logo} source={{ uri: 'https://prioritas-group.com/assets/front/common/img/logo-inverse.png' }} />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Nama Personal</Text>
                    <TextInput placeholder="Nama Personal" />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerLogo: {
        alignContent: 'center',
        marginBottom: 25
    },
    mainContainer: {
        flex: 1
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 80,
        alignSelf: 'stretch'
    },
})