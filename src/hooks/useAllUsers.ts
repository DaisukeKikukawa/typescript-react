import axios from 'axios';
import { useState } from 'react';
import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = () => {
    setLoading(true);
    axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users')
    .then((res) => setUsers(res.data))
    .catch(() => {
      showMessage({ title: 'ユーザーの取得に失敗しました', status: 'error'})
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return { getUsers, loading, users };
}
