import { useQuery } from '@tanstack/react-query';
import { fetchForestData } from '../services/api';

export function useForestData() {
  const { data: forests = [], isLoading, error } = useQuery({
    queryKey: ['forests'],
    queryFn: fetchForestData,
  });

  return { forests, isLoading, error };
}