import React, { useEffect, useState } from 'react'
import Courses from '../components/Courses'
import axios from '../axios'

const Home = () => {
  const [bookmarks, setbookmarks] = useState([])
  const [comments, setcomments] = useState([])

  const token = localStorage.getItem('access_token')

  const studentProfile = async () => {
    const response = await axios.get(`/studentprofile`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    })

    console.log(response.data)
    setbookmarks(response.data.bookmarks)
    setcomments(response.data.comments)
  }

  useEffect(() => {
    studentProfile()
  }, [])

  return (
    <>
      <section class='home-grid'>
        <h1 class='heading'>quick options</h1>

        <div class='box-container'>
          <div class='box'>
            <h3 class='title'>likes and comments</h3>

            <p class='likes'>
              total comments : <span>{comments.length}</span>
            </p>
            <a href='#' class='inline-btn'>
              view comments
            </a>
            <p class='likes'>
              saved playlists : <span>{bookmarks.length}</span>
            </p>
            <a href='#' class='inline-btn'>
              view playlists
            </a>

            {!token && (
              <>
                <p class='likes'>Login</p>
                <a href='/login' class='inline-btn'>
                  Login
                </a>
              </>
            )}
          </div>

          <div class='box'>
            <h3 class='title'>top categories</h3>
            <div class='flex'>
              <a href='#'>
                <i class='fas fa-code'></i>
                <span>development</span>
              </a>
              <a href='#'>
                <i class='fas fa-chart-simple'></i>
                <span>business</span>
              </a>
              <a href='#'>
                <i class='fas fa-pen'></i>
                <span>design</span>
              </a>
              <a href='#'>
                <i class='fas fa-chart-line'></i>
                <span>marketing</span>
              </a>
              <a href='#'>
                <i class='fas fa-music'></i>
                <span>music</span>
              </a>
              <a href='#'>
                <i class='fas fa-camera'></i>
                <span>photography</span>
              </a>
              <a href='#'>
                <i class='fas fa-cog'></i>
                <span>software</span>
              </a>
              <a href='#'>
                <i class='fas fa-vial'></i>
                <span>science</span>
              </a>
            </div>
          </div>

          <div class='box'>
            <h3 class='title'>popular topics</h3>
            <div class='flex'>
              <a href='#'>
                <i class='fab fa-html5'></i>
                <span>HTML</span>
              </a>
              <a href='#'>
                <i class='fab fa-css3'></i>
                <span>CSS</span>
              </a>
              <a href='#'>
                <i class='fab fa-js'></i>
                <span>javascript</span>
              </a>
              <a href='#'>
                <i class='fab fa-react'></i>
                <span>react</span>
              </a>
              <a href='#'>
                <i class='fab fa-php'></i>
                <span>PHP</span>
              </a>
              <a href='#'>
                <i class='fab fa-bootstrap'></i>
                <span>bootstrap</span>
              </a>
            </div>
          </div>

          <div class='box'>
            <h3 class='title'>become a tutor</h3>
            <p class='tutor'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, nam?
            </p>
            <a href='teachers' class='inline-btn'>
              get started
            </a>
          </div>
        </div>
      </section>

      <Courses />
    </>
  )
}

export default Home
