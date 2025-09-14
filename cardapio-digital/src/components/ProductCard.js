// src/components/ProductCard.js
import { View, Text, StyleSheet } from 'react-native';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>
        R$ {Number(product.price).toFixed(2).replace('.', ',')}
      </Text>
      <Text style={styles.sku}>SKU: {product.sku}</Text>
      {product.description ? (
        <Text style={styles.desc}>{product.description}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  price: { fontSize: 14, fontWeight: '700', marginBottom: 4 },
  sku: { fontSize: 12, color: '#666' },
  desc: { fontSize: 13, marginTop: 6, color: '#333' },
});
