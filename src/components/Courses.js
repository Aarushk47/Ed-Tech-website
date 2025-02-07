import React, { useEffect, useState } from 'react'
import axios from '../axios'
const Courses = () => {
  const [playlistOptions, setPlaylistOptions] = useState([])
  const token = localStorage.getItem('access_token')

  const fetchPlaylists = async () => {
    try {
      const response = await axios.get('/getAllPLaylists', {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      setPlaylistOptions(response.data.playlist)
      console.log(response.data.playlist)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchPlaylists()
  }, [])
  let index = 1
  function randomNum () {
    return Math.floor(Math.random() * 9) + 1
  }
  function extractFilename(path) {
    const parts = path.split('\\');
    const filename = parts.pop();
    return filename;
  }
  return (
    <>
      <section class='courses'>
        {
          playlistOptions.length > 0 ? <><h1 class='heading'>our courses</h1></> : <><h1 class='heading'></h1></>
        }
        

        <div class='box-container'>
          {playlistOptions.map(playlist => (
            <div class='box'>
              <div class='tutor'>
                <img src={`images/pic-${index++}.jpg`} alt='' />
                <div class='info'>
                  <h3>{playlist.tutor.name}</h3>
                  <span>{playlist.date.slice(0, 10)}</span>
                </div>
              </div>
              <div class='thumb'>
                <img src={`/uploads/${extractFilename(playlist.thumb)}`} alt='' />
                <span>{randomNum()}</span>
              </div>
              <h3 class='title'>{playlist.title}</h3>
              <a href={`/playlist/${playlist._id}`} class='inline-btn'>
                view playlist
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Courses
