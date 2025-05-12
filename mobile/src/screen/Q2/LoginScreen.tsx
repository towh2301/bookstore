import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles";

type loginProps = {
    title: string,
    description: string,
}

const LoginScreen: React.FC<loginProps> = ({ description, title }) => {
    return <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.input} placeholder="Phone" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{description}</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
};

export default LoginScreen;