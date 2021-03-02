import { baseUrl } from './api';

const url = (id: string) => `/donation/${id}`;

const getUrl = (id: string) => `${baseUrl}${url(id)}`;

export type Donation = {
  id: string,
  value: number;
  comment: string;
  status: string;
  brCode: string;
}

export const donationGet = async (id: string): Promise<Donation> => {
  const response = await fetch(getUrl(id), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return data;
}
