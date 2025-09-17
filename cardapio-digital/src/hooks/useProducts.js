// src/hooks/useProducts.js
import { useEffect, useState, useCallback } from 'react';
import { getProducts, getProductById } from '../data/api';

export function useProducts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // ALTERAÇÃO: Modificado para suportar pesquisa por nome ou ID
  // Função agora aceita termo de busca e decide se pesquisa por nome ou ID
  const load = useCallback(async (search = '') => {
    try {
      setLoading(true);
      setError('');
      
      // ALTERAÇÃO: Lógica para determinar se é pesquisa por ID ou por nome
      // Se o termo de busca é um número, tenta buscar por ID primeiro
      const isNumericSearch = /^\d+$/.test(search.trim());
      
      if (isNumericSearch && search.trim() !== '') {
        try {
          // Tenta buscar por ID específico
          const product = await getProductById(search.trim());
          setItems([product]); // Retorna array com um produto
          return;
        } catch (e) {
          // Se não encontrar por ID, busca por nome
          const data = await getProducts(search);
          setItems(data);
          return;
        }
      }
      
      // Busca normal por nome ou lista todos os produtos
      const data = await getProducts(search);
      setItems(data);
    } catch (e) {
      setError(e.message || 'Falha ao carregar produtos');
    } finally {
      setLoading(false);
    }
  }, []);

  // ALTERAÇÃO: Adicionada função de pesquisa que pode ser chamada externamente
  // Permite que o componente ProductsScreen faça pesquisas específicas
  const search = useCallback(async (term) => {
    setSearchTerm(term);
    await load(term);
  }, [load]);

  useEffect(() => {
    load();
  }, [load]);

  return { 
    items, 
    loading, 
    error, 
    searchTerm, 
    reload: () => load(searchTerm), 
    search 
  };
}
