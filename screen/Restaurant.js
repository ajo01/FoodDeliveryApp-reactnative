import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import {COLORS, icons, images, SIZES, FONTS} from '../constants';

const Restaurant = ({route}) => {
  const [restaurant, setRestaurant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);

  React.useEffect(() => {
    let {item, currentLocation} = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  });

  return (
    <SafeAreaView>
      <Text>Restaurant</Text>
    </SafeAreaView>
  );
};

export default Restaurant;
