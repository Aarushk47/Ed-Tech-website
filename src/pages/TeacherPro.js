import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios'

const TeacherPro = () => {
  const { teacherId } = useParams()
  const [play, setPlay] = useState([])
  const [content, setContent] = useState([])
  const [notes, setNotes] = useState([])
  const [comments, setcomments] = useState([])
  const token = localStorage.getItem('access_token')

  useEffect(() => {
    const fetchTeacherData = async () => {
      const response = await axios.get(`/teacherprofile/${teacherId}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

      setPlay(response.data.playlist)
      setContent(response.data.content)
      setcomments(response.data.comments)
      setNotes(response.data.notes)
    }

    fetchTeacherData()
  }, [])


  function extractFilename (path) {
    const parts = path.split('\\')
    const filename = parts.pop()
    return filename
  }

  return (
    <>
      <section class='teacher-profile'>
        <h1 class='heading'>profile details</h1>

        <div class='details'>
          <div class='tutor'>
            <img src='/images/pic-2.jpg' alt='' />
            <h3>{play.length > 0 && play[0].tutor && play[0].tutor.name}</h3>
            <span>Tutor</span>
          </div>
          <div class='flex'>
            <p>
              total playlists : <span>{play.length}</span>
            </p>
            <p>
              total videos : <span>{content.length}</span>
            </p>

            <p>
              total comments : <span>{comments.length}</span>
            </p>
            <p>
              total notes : <span>{notes.length}</span>
            </p>
          </div>
        </div>
      </section>

      <section class='courses'>
        <h1 class='heading'>our courses</h1>

        <div class='box-container'>
          {play.length > 0 &&
            play.map(p => {
              return (
                <div class='box'>
                  <div class='thumb'>
                    <img src={`/uploads/${extractFilename(p.thumb)}`} alt='' />
                    <span>2 videos</span>
                  </div>
                  <h3 class='title'>{p.title}</h3>
                  <a href={`/playlist/${p._id}`} class='inline-btn'>
                    view playlist
                  </a>
                </div>
              )
            })}
        </div>
      </section>
    </>
  )
}

export default TeacherPro
