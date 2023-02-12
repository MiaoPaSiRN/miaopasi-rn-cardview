import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { MiaopasiRnCard } from 'miaopasi-rn-cardview';

export default function App() {
  var region = {
    latitude: 37.48,
    longitude: -122.16,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  const onRegionChange = (event: any) => {
    // Do stuff with event.region.latitude, etc.
    console.log('onRegionChange: ', event);
  };

  return (
    <View style={styles.container}>
      <MiaopasiRnCard
        color="#32a852"
        style={styles.box}
        region={region}
        onRegionChange={onRegionChange}
      >
        <Text>地图1</Text>
      </MiaopasiRnCard>
      <MiaopasiRnCard
        color="#32a852"
        style={styles.box}
        region={region}
        onRegionChange={onRegionChange}
      >
        <Text>地图2</Text>
      </MiaopasiRnCard>
      <Button
        title="点击修改地图1"
        onPress={() => {
          // this.myNativeReference.callNativeMethod();
        }}
      />
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
    width: '100%',
    height: 200,
  },
});
