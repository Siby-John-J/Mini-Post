import { useState } from "react"
import useComments from "../hooks/useComments"

export function Comments(props : any) {
  const { data } = props

  return (
    <ul>
      {
        data.map((item: string, index: number) => {
          return (
            <li key={index}>{item}</li>
          )
        })
      }
    </ul>
  )
}

export function CreateComment(props:any) {
  const { data } = props
  
  const [comment, setComment] = useState('')

  function postComment() {
    if(comment !== '') {
      useComments(comment, data)
      setComment('')
    }
  }

    return (
        <div className="actions">
            <input onChange={e => setComment(e.target.value)} type="text" />
            <button onClick={postComment}>create</button>
        </div>
    )
}