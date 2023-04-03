import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import './Home.css'

const Home = () => {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "post"))
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getPosts()
  }, [])

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "post", id))

    // リロードし直す場合
    // window.location.href = '/'

    // stateを変更する場合
    setPostList(postList.filter((post) => post.id !== id))
  }

  return (
    <div className='homePage'>
      <div className="homePageInner">
        {postList.map((post) => {
          return (
            <div className="postContainer" key={post.id}>
              <div className="postContents">
                  <div className="postHeader">
                    <h1>{post.title}</h1>
                  </div>
              </div>
              <div className="postTextContainer">
                {post.postText}
              </div>
              <div className="nameAndDeleteButton">
                <h3>@{post.author.username}</h3>
                {post.author.id === auth.currentUser?.uid && (
                  <button onClick={() => handleDelete(post.id)}>削除</button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home