import type { ApiListResponse } from '../types';

import apiClient from './apiClient';

export const fetchData = async <T>(url: string) => {
  const { data } = await apiClient.get<ApiListResponse<T>>(url);
  return data;
};
