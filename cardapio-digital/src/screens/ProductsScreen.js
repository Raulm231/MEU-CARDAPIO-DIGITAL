// src/screens/ProductsScreen.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

export default function ProductsScreen() {
  // ALTERAÇÃO: Adicionado estado para controlar o campo de pesquisa
  // Permite pesquisar produtos por nome ou ID
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const { items, loading, error, reload, search } = useProducts();

  // Carregamento inicial
  if (loading && items.length === 0) {
    return (
      <SafeAreaView style={styles.containerCenter}>
        <ActivityIndicator size="large" />
        <Text style={styles.infoText}>Carregando produtos...</Text>
      </SafeAreaView>
    );
  }

  // Erro inicial (sem dados)
  if (error && items.length === 0) {
    return (
      <SafeAreaView style={styles.containerCenter}>
        <Text style={[styles.infoText, { color: 'red', textAlign: 'center' }]}>
          {error}
        </Text>

        <View style={{ height: 12 }} />
        <Button title="Tentar novamente" onPress={reload} />

        <View style={{ height: 12 }} />
        <Text style={styles.hint}>
          Verifique o API_URL em <Text style={styles.code}>src/data/config.js</Text>{' '}
          e teste a rota <Text style={styles.code}>/products</Text> no navegador do
          emulador/celular.
        </Text>
      </SafeAreaView>
    );
  }

  // ALTERAÇÃO: Adicionadas funções para gerenciar a pesquisa
  // Permite pesquisar por nome do produto ou por ID
  const handleSearch = async () => {
    if (localSearchTerm.trim() === '') {
      reload(); // Se campo vazio, carrega todos os produtos
    } else {
      await search(localSearchTerm.trim());
    }
  };

  const handleClearSearch = async () => {
    setLocalSearchTerm('');
    reload(); // Carrega todos os produtos
  };

  // Lista de produtos
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Produtos</Text>
        <Button title="Recarregar" onPress={reload} />
      </View>

      {/* ALTERAÇÃO: Adicionado componente de pesquisa */}
      {/* Permite pesquisar produtos por nome ou ID */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar por nome ou ID..."
          value={localSearchTerm}
          onChangeText={setLocalSearchTerm}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
        {localSearchTerm !== '' && (
          <TouchableOpacity style={styles.clearButton} onPress={handleClearSearch}>
            <Text style={styles.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Se houver erro durante um refresh, mas já temos dados, mostra um aviso */}
      {!!error && items.length > 0 && (
        <View style={styles.bannerError}>
          <Text style={styles.bannerErrorText}>{error}</Text>
        </View>
      )}

      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={
          items.length === 0 ? styles.listEmpty : styles.list
        }
        ListEmptyComponent={
          <View style={{ alignItems: 'center', padding: 24 }}>
            <Text>Nenhum produto cadastrado.</Text>
          </View>
        }
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={reload} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#f7f7f7',
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { fontSize: 20, fontWeight: '700' },
  list: { paddingBottom: 16 },
  listEmpty: { flexGrow: 1, justifyContent: 'center' },
  infoText: { marginTop: 10, fontSize: 14 },
  hint: { fontSize: 12, color: '#555', textAlign: 'center' },
  code: { fontFamily: 'monospace' },
  bannerError: {
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#ffe6e6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffcccc',
  },
  bannerErrorText: { color: '#b30000', fontSize: 12 },
  // ALTERAÇÃO: Adicionados estilos para o componente de pesquisa
  // Estilos para a barra de pesquisa por nome ou ID
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    marginRight: 4,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  clearButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
