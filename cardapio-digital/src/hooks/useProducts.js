// src/hooks/useProducts.js
import { useEffect, useState, useCallback } from 'react';
import { getProducts } from '../data/api';

export function useProducts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getProducts();
      setItems(data);
    } catch (e) {
      setError(e.message || 'Falha ao carregar produtos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { items, loading, error, reload: load };
}
