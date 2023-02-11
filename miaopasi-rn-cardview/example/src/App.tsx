import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { MiaopasiRnCard } from 'miaopasi-rn-cardview';

export default function App() {
  return (
    <View style={styles.container}>
      <MiaopasiRnCard color="#32a852" style={styles.box}>
        <Text>哈哈哈</Text>
        <Text>哈哈哈</Text>
        <Text>哈哈哈</Text>
        <Text>哈哈哈</Text>
      </MiaopasiRnCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // width: 60,
    // height: 60,
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
  },
});
