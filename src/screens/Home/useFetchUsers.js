import useAxios from 'axios-hooks';
import { fetchUsersAxiosOptions } from '../../services/fetchUsers';
import { useEffect } from 'react';
import { Alert } from 'react-native';

const DEFAULT_ERROR_MESSAGE = 'Something went Wrong';

export default () => {
  const [{ loading, data, error }] = useAxios(fetchUsersAxiosOptions);
  useEffect(() => {
    if (error) {
      Alert.alert('', error.message || DEFAULT_ERROR_MESSAGE);
    }
  }, [error]);

  return {
    userList: data?.results,
    isLoading: loading,
  };
};
