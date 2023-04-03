import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      // ローカルストレージにログイン認証状態を保存
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    })
  }

  return (
    <div>
        <p>ログインしてはじめる</p>
        <button onClick={LoginWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login