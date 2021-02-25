import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses', //route URL to make request to
  headers: {
    Authorization: 'Bearer HaJYuKd3tBs7NJJ-IynsZIbw0N_2OtdnnJ29_BiSwcHmN65WzZ47VWgecotOB5MZpu_NsWdN9ydl5qRTibrGB-EUPBVX7yM8M-GURQJBMZdI9YGzc8u79pskhmXdX3Yx'
  }
});
