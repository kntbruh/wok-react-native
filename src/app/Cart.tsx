import {
  View,
  Text,
  Platform,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { clearCart, removeItem, selectCart } from '@/redux_TK/cartSlice';
import { AntDesign } from '@expo/vector-icons';
import Button from '@/components/myComponents/Button';
import { useAppDispatch } from '@/redux_TK/store';
import { Ionicons } from '@expo/vector-icons';
const Cart = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const dispatch = useAppDispatch();

  const clearCartHandle = () => {
    dispatch(clearCart());
  };
  const removeCartHandle = (id: string) => {
    dispatch(removeItem(id));
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.totalProducts}>Всего товаров: {items.length}</Text>
        <Text style={styles.totalPrice}>Общая сумма: ${totalPrice}</Text>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.titleText}>{item.title}</Text>
              <Image style={styles.wokImage} source={{ uri: item?.imageUrl }} />
            </View>
            <View>
              <Text style={{ color: 'blue' }}>Цена: ${item.price}</Text>
              <Text style={{ color: 'blue' }}>Количество: {item.count}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.removeCart}
                onPress={() => removeCartHandle(item.id)}
              >
                <Ionicons name='bag-remove' size={24} color='black' />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View>
        <TouchableOpacity style={styles.clearCart} onPress={clearCartHandle}>
          <Text>Очистить корзину</Text>
          <AntDesign name='delete' size={24} color='black' />
        </TouchableOpacity>
      </View>
      <Button text='Оформить заказ' />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, gap: 10 },
  totalProducts: {
    color: 'red',
  },
  productContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'lightgrey',
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  wokImage: { width: 70, height: 70 },
  titleText: { color: 'green', fontSize: 15, fontWeight: 'bold' },
  totalPrice: { fontSize: 20, color: 'gold', fontWeight: 'bold' },
  removeCart: { width: 30, height: 30 },
  clearCart: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});
export default Cart;
