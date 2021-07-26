import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY} from '../constants';

const OrderDelivery = ({route, navigation}) => {
  const [restaurant, setRestaurant] = React.useState(null);
  const [streetName, setStreetName] = React.useState('');
  const [fromLocation, setFromLocation] = React.useState(null);
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);

  React.useEffect(() => {
    let {restaurant, currentLocation} = route.params;

    console.log(restaurant);

    let fromLoc = currentLocation.gps;
    let toLoc = restaurant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

    setRestaurant(restaurant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);

  function renderMap() {
    const destinationMarker = () => (
      <Marker coordinate={toLocation}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
            }}>
            <Image
              source={icons.pin}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
            />
          </View>
        </View>
      </Marker>
    );

    const carIcon = () => (
      <Marker coordinate={fromLocation} anchor={{x: 0.5, y: 0.5}} flat={true}>
        <Image
          source={icons.car}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Marker>
    );

    return (
      <View style={{flex: 1}}>
        <MapView
          // provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{flex: 1}}>
          {destinationMarker()}
          {carIcon()}
        </MapView>
      </View>
    );
  }

  return <SafeAreaView style={{flex: 1}}>{renderMap()}</SafeAreaView>;
};

export default OrderDelivery;
