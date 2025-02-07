import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios'
import toast from 'react-hot-toast'

const WatchVideo = () => {
  const { location, id, tutor } = useParams()
  const [comments, setcomments] = useState([])
  const [comment, setcomm] = useState([])

  const token = localStorage.getItem('access_token')
  const studentToken = localStorage.getItem('access_token')
  const config = {
    headers: {
      Authorization: `Bearer ${studentToken}`
    }
  }

  const fetchComment = async () => {
    try {
      const response = await axios.get(`/comments/${id}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      setcomments(response.data.comments)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchComment()
  }, [])

  const handleComment = async e => {
    e.preventDefault()

    const response = await axios
      .post(
        `/comment/${id}/${tutor}`,
        {
          comment
        },
        config
      )
      .then(() => {
        // window.location.reload(false)
        toast.success(`Comment Posted`)
        
      })
      .catch(err => {
        console.log(err)
        toast.error(`Couldn't Post`)

      })
  }
  const handleDel = async _id => {
    const response = await axios
      .delete(`/delcomment/${_id}`, config)

      .catch(err => {
        console.log(err)
      })

    console.log(response.data)
  }

  return (
    <>
      <section class='watch-video'>
        <div class='video-container'>
          <div class='video'>
            <video
              src={`/uploads/${location}`}
              controls
              poster='images/post-1-1.png'
              id='video'
            ></video>
          </div>
        </div>
      </section>

      <section class='comments'>
        <h1 class='heading'>{comments.length}</h1>

        <form
          action=''
          method='POST'
          onSubmit={handleComment}
          class='add-comment'
        >
          <h3>add comments</h3>
          <textarea
            name={comment}
            onChange={e => setcomm(e.target.value)}
            placeholder='enter your comment'
            required
            maxlength='1000'
            cols='30'
            rows='10'
          ></textarea>
          <input
            type='submit'
            value='add comment'
            class='inline-btn'
            name='submit'
          />
        </form>

        <h1 class='heading'>user comments</h1>

        <div class='box-container'>
          {comments &&
            comments
              .map(c => {
                return (
                  <div class='box'>
                    <div class='user'>
                      <img src='/images/pic-1.jpg' alt='' />
                      <div>
                        <h3>{c.user.name}</h3>
                        <span>
                          {c.date.slice(0, 10)} <br /> {c.date.slice(11, 16)}
                        </span>
                      </div>
                    </div>
                    <div class='comment-box'>{c.comment}</div>
                    <form action='' class='flex-btn'>
                      {console.log('cid', c._id)}
                      <button
                        onClick={() => handleDel(c._id)}
                        class='inline-delete-btn'
                      >
                        Delete Comment
                      </button>
                    </form>
                  </div>
                )
              })
              .reverse()}
        </div>
      </section>
    </>
  )
}

export default WatchVideo
