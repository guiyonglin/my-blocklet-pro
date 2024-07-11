import instance from './interceptor';

const getProfile = function () {
  return instance.get('/profile');
};

const updateProfile = function (data) {
  return instance.put('/profile', data);
};

const addProfile = function (data) {
  return instance.post('/profile', data);
};

export { getProfile, updateProfile, addProfile };
