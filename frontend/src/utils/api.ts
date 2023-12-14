import axios from 'axios';
import { api } from './Constants';

export interface RepositoriesData {
  name: string;
  stargazers_count: number;
  stargazers_url: string;
  language: string;
  description: string;
  updated_at: string;
  html_url: string;
}

export const fetchDataFromApi = async (username: string) => {
  const url = `${api.base_endpoint}/repositories/${username}`;
  const { data } = await axios.get<RepositoriesData[]>(url);
  return data;
};
