import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios'

const Dashboard = () => {
  const { teacherId } = useParams()
  const token = localStorage.getItem('teachers_access_token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const [play, setPlay] = useState([])
  const [teacher, setTeacher] = useState([])
  const [content, setContent] = useState([])
  const [comments, setcomments] = useState([])

  useEffect(() => {
    const validateTeacher = async () => {
      try {
        const response = await axios.get('/validateTeacher', config)
        setTeacher(response.data)
      } catch (error) {
        console.log('Error from Teacher')
      }
    }

    const fetchTeacherData = async () => {
      if (teacher) {
        const response = await axios.get(`/teacherprofile/${teacher._id}`, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        })
        setPlay(response.data.playlist)
        setContent(response.data.content)
        setcomments(response.data.comments)
      }
    }
    validateTeacher()

    fetchTeacherData()
    console.log('techer',teacher);
  }, [])

  useEffect(() => {
    const fetchTeacherData = async () => {
      const response = await axios.get(`/teacherprofile/${teacher._id}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      setPlay(response.data.playlist)
      setContent(response.data.content)
      setcomments(response.data.comments)
      console.log('comments',response.data.comments)

    }

    fetchTeacherData()

    console.log('content',content);

  }, [teacher])

  console.log(teacher._id)

  function extractFilename (path) {
    const parts = path.split('\\')
    const filename = parts.pop()
    return filename
  }

  const handleLogout = () => {
    localStorage.clear()
  }
  return (
    <>
      <section class='dashboard'>
        <h1 class='heading'>dashboard</h1>

        <div class='box-container'>
          <div class='box'>
            <h3>welcome!</h3>
            <p>{teacher.name}</p>
            <a href={`/teacher/${teacher._id}`} class='btn'>
              view profile
            </a>
          </div>

          <div class='box'>
            <h3>{content.length}</h3>
            <p>total contents</p>
            <a href='/add_content' class='btn'>
              add new content
            </a>
          </div>

          <div class='box'>
            <h3>{play.length}</h3>
            <p> total playlist</p>
            <a href='/add_playlist' class='btn'>
              add new playlist
            </a>
          </div>

          <div class='box'>
            <h3>{play.length}</h3>
            <p> total notes</p>
            <a href='/add_notes' class='btn'>
              add new notes
            </a>
          </div>

          <div class='box'>
            <h3>{comments.length}</h3>
            <p>total comments</p>
          </div>

          <div class='box'>
            <h3>quick select</h3>
            <p>login or register</p>
            <div class='flex-btn'>
              <a onClick={handleLogout} href='/login' class='option-btn'>
                Login As Student
              </a>
              <a onClick={handleLogout} href='/register' class='option-btn'>
                Register As Student
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
