import { baseUrl } from './api';

const url = '/donation'

const getUrl = () => `${baseUrl}${url}`;

export type DonationPostResponse = {
  id: string,
  value: number;
  comment: string;
  status: string;
  brCode: string;
}
export type DonationPayload = {
  comment: string;
  value: number;
};
export const donationPost = async (payload: DonationPayload): Promise<DonationPostResponse> => {
  const response = await fetch(getUrl(), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  return data;
}
