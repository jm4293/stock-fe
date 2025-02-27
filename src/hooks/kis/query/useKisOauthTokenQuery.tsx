import { useQuery } from '@tanstack/react-query';
import KisApi from '@/api-url/kis/kis.api';

export const useKisOauthTokenQuery = () => {
  return useQuery({
    queryKey: ['kis-oauth-token'],
    queryFn: () => KisApi.getOauthToken(),
    staleTime: 1000 * 60 * 60 * 6, // 6시간
  });
};
