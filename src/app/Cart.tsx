import {
  View,
  Text,
  Platform,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { selectCart } from '@/redux_TK/cartSlice';
const Cart = () => {
  const { totalPrice, items } = useSelector(selectCart);

  return (
    <View>
      <Text style={{ color: 'red' }}>{items.length}</Text>
      <Text style={{ color: 'blue' }}>Total Price: ${totalPrice}</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={{ color: 'blue' }}>{item.title}</Text>
            <Image
              style={{ width: '100%', height: '50%' }}
              source={{ uri: item?.imageUrl }}
            />
            <Text style={{ color: 'blue' }}>Price: ${item.price}</Text>
            <Text style={{ color: 'blue' }}>Quantity: {item.count}</Text>
          </View>
        )}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default Cart;
