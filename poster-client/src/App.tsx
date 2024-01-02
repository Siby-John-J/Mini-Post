import { useState } from 'react'
import { CreatePost } from './compoents/Posts'
import Posts from './compoents/Posts'
import './App.css'
import { reRenderContext } from './context/RerenderContext'

function App() {
  const [isComment, changeComment] = useState(false)
  const [isPost, changePost] = useState(false)
  
  return (
    <reRenderContext.Provider value={{
      isComment,
      isPost,
      changeComment,
      changePost
    }}>
      <>
        <div className="postList">
          <CreatePost />
          <Posts />
        </div>
      </>
    </reRenderContext.Provider>
  )
}

export default App
