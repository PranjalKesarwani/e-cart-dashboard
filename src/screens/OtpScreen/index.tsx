import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {RootStackParamList } from '../../types/types';

type OtpScreenProps = NativeStackScreenProps<RootStackParamList, "OtpScreen">;

const OtpScreen = ({ navigation }: OtpScreenProps) => {





    return (
        <View>
            <Text>Analytics screen</Text>
        </View>
    );
};

export default OtpScreen;

const styles = StyleSheet.create({




});
