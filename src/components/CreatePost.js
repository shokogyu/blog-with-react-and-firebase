import React, { useEffect, useState } from 'react'
import './CreatePost.css'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState()
  const [postText, setPostText] = useState()

  const navigate = useNavigate()

  const createPost = async () => {
    await addDoc(collection(db, 'post'), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName, // firebase側で用意されているプロパティ
        id: auth.currentUser.uid,
      }
    })

    navigate('/')
  }

  useEffect(() => {
    if(!isAuth) {
      navigate('/login')
    }
  }, [])

  return (
    <div className='createPostPage'>
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="postFieldWrapper">
          <div className="inputPost">
            <p className='inputPostLabel'>タイトル</p>
            <input type="text" placeholder='タイトルを記入' onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="inputPost">
            <p className='inputPostLabel'>投稿</p>
            <textarea placeholder='投稿内容を記入' onChange={(e) => setPostText(e.target.value)}></textarea>
          </div>
          <div className="inputPost">
            <button className="postButton" onClick={createPost}>投稿する</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost