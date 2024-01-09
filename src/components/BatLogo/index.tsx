import React from 'react';
import { Image, Text, View } from 'react-native';

import logo from '../../assets/batman-logo.png'

import styles from './styles';

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image style={styles.image}  source={logo} />
    </View>
  );
}

