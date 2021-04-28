import React from 'react';
import { ActivityIndicator, View, Text, SafeAreaView, } from 'react-native';

export default function formAmigo({navigation}) {
    return (
        <SafeAreaView>
            <View>
                <ActivityIndicator>
                    <Text>Aguarde, por favor...</Text>
                </ActivityIndicator>
            </View>
        </SafeAreaView>
        
    );
}