import axios from "axios"
import { User } from "../types/api/user"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const useAuth = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);

  const login = (id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        navigate('/home')
      } else {
        alert('ユーザーが見つかりません')
      }
    }).catch(() => alert('ログインできません')).finally(() => setLoading(false));
  }
  return { login, loading }
}
