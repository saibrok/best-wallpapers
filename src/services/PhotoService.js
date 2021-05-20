import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://picsum.photos`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getPhotos(page, limit) {
    return apiClient.get(`/v2/list?page=${page}&limit=${limit}`);
  },

  getPhotoById(id) {
    return apiClient.get(`/id/${id}/info`);
  },

  // fake api - так нельзя получить общее количество фоток
  getNumberOfPages(limit) {
    const totalNumberOfPhotos = 1000;

    return Promise.resolve(parseInt(totalNumberOfPhotos / limit));
  },
};
