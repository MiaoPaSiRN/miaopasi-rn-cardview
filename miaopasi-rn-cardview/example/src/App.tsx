import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MiaopasiRnMapView, { Region } from 'miaopasi-rn-cardview';

export default function App() {
  var mapRef: MiaopasiRnMapView | null;
  const initialRegion = {
    latitude: 31.18573,
    longitude: 121.60698,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  var region = {
    latitude: 37.48,
    longitude: -122.16,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  const onRegionChange = (region: Region) => {
    // Do stuff with event.region.latitude, etc.
    console.log('onRegionChange: ', region);
  };

  return (
    <View style={styles.container}>
      <MiaopasiRnMapView
        ref={(ref) => (mapRef = ref)}
        style={styles.box}
        initialRegion={initialRegion}
        region={region}
        onRegionChange={onRegionChange}
      >
        <Text>地图1</Text>
      </MiaopasiRnMapView>
      <MiaopasiRnMapView
        style={styles.box}
        initialRegion={initialRegion}
        region={region}
        onRegionChange={onRegionChange}
      >
        <Text>地图2</Text>
      </MiaopasiRnMapView>
      <Button
        title="点击修改地图1"
        onPress={() => {
          // this.myNativeReference.callNativeMethod();
          mapRef?.animateToRegion(
            {
              latitude: 37.48,
              longitude: -122.16,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            },
            10
          );
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
