import React, { useEffect, useState } from 'react'
import axios from '../axios'

const ViewCourses = () => {
  const [playlistOptions, setPlaylistOptions] = useState([])
  const tutortoken = localStorage.getItem('teachers_access_token')

  const fetchPlaylists = async () => {
    try {
      const response = await axios.get('/getPlayListbyId', {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${tutortoken}`
        }
      })
      setPlaylistOptions(response.data.playlist)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchPlaylists()
  }, [])

  function extractFilename (path) {
    const parts = path.split('\\')
    const filename = parts.pop()
    return filename
  }

  const handleDelete = async id => {
    const res = await axios.delete(`/delPlaylist/${id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${tutortoken}`
      }
    })

    console.log(res.data)
  }

  return (
    <>
      <section class='playlist-details'>
        {playlistOptions.length > 0 ? (
          <h1 class='heading'>playlist details</h1>
        ) : (
          <h1 class='heading'>No Playlists</h1>
        )}
        {
          playlistOptions.map(playlist => {
            return(
              <div class='row'>
              <div class='thumb'>
                <span>{5}</span>

                <img
                  src={`uploads/${extractFilename(playlist.thumb)}`}
                  alt=''
                />
              </div>
              <div class='details'>
                <h3 class='title'>{playlist.title}</h3>
                <div class='date'>
                  <i class='fas fa-calendar'></i>
                  <span>{playlist.date.slice(0, 10)}</span>
                </div>
                <div class='description'>{playlist.description}</div>
                <form
                  action=''
                  onSubmit={() => handleDelete(playlist._id)}
                  method=''
                  class='flex-btn'
                >
                  <input
                    type='hidden'
                    name='playlist_id'
                    value={playlist._id}
                  />

                  <input
                    type='submit'
                    value={'Delete Playlist'}
                    class='delete-btn'
                    name='delete'
                  />
                </form>
              </div>
            </div> 
            )
          })
       }
      </section>
    </>
  )
}

export default ViewCourses
