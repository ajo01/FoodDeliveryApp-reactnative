import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const OrderDelivery = () => {
  function renderMap() {
    return (
      <View style={{flex: 1}}>
        <MapView style={{flex: 1}}></MapView>
      </View>
    );
  }

  return <SafeAreaView style={{flex: 1}}>{renderMap()}</SafeAreaView>;
};

export default OrderDelivery;
