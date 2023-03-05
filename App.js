import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useEffect} from 'react';
import styles from './App.scss';

/**
 * in here nest will be passed with function that flat the css with inheritance
 * will try my best to convert scss to stylesheet obj
 *
 *
 * IDEA >
 * [obj] => flat into pices with inheritance and bla bla
 *
 */

const nest = {
  main: {
    nesting: {
      color: '#67b967',
    },
  },
};

export default function App() {
  return (
    <View style={styles.main}>
      <Text style={styles.myClass}>App</Text>
      <Text style={styles.redColor}>Variable</Text>
      <Text style={styles.nsesting}>Nesting is not working 💔</Text>

      <Text style={myStyle.nesting}>Im gonna use this</Text>
    </View>
  );
}

const myStyle = StyleSheet.create(nest.main);
