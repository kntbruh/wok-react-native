import { View, Text, Platform, FlatList } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from '@/redux_TK/cartSlice';
import { selectWok } from '@/redux_TK/wokSlice';
const Cart = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const woksCart = useSelector(selectWok);

  return (
    <View>
      <Text style={{ color: 'red' }}>{items.length}</Text>
      <Text style={{ color: 'blue' }}>Total Price: ${totalPrice}</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={{ color: 'blue' }}>{item.title}</Text>
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
