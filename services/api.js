import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nhcqmhocgttcdtgqggnx.supabase.co/rest/v1',
  headers: {
    apikey: 'sb_publishable_1HrfwCMaIT4MAA0FWAptOg_bB2HOhsz',
    authorization: 'Bearer sb_publishable_1HrfwCMaIT4MAA0FWAptOg_bB2HOhsz',
  },
});
