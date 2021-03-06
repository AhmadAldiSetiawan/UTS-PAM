import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Image } from 'react-native';
import styles from '../style/Daftar_Pembatalan_Style.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Daftar_Pembatalan({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            
            <Text style={[{fontSize:19, fontWeight:'bold', color:'#00579C', textAlign:'center', }]}>
                Tidak ada Aktivitas Pembatalan Tiket
            </Text>
            
        </SafeAreaView>
    );
}
