import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { useParams } from 'react-router-dom'
import Content from '../components/Content'
import toast from 'react-hot-toast'
import Notes from '../components/Notes'
const Playlist = () => {
  const [playlistOptions, setPlaylistOptions] = useState([])
  const [notesOptions, setNotesOptions] = useState([])
  const [playDetails, setplayDetails] = useState(null)

  const { playId } = useParams()

  const token = localStorage.getItem('access_token')
  const studentToken = localStorage.getItem('access_token')
  const config = {
    headers: {
      Authorization: `Bearer ${studentToken}`
    }
  }

  const fetchPlaylists = async () => {
    try {
      const response = await axios.get(`/getContentbyplayId/${playId}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      setPlaylistOptions(response.data.content)
    } catch (error) {
      console.error(error)
    }
  }
  const fetchNotes = async () => {
    try {
      const response = await axios.get(`/getNotesbyplayId/${playId}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      setNotesOptions(response.data.content)
    } catch (error) {
      console.error(error)
    }
  }

  const playListDetails = async () => {
    try {
      const response = await axios.get(`/getPlayListbyId/${playId}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      setplayDetails(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    playListDetails()
    fetchPlaylists()
    fetchNotes()
  }, [])
  function extractFilename (path) {
    const parts = path.split('\\')
    const filename = parts.pop()
    return filename
  }

  const handleBookmark = async e => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'post',
        url: `/bookmark/${playId}`,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      toast.success(`Bookmarked`)
    } catch (error) {
      toast.error(`Could not Bookmarked`)
      console.log(error)

    }
  }

  return (
    <>
      <section class='playlist-details'>
        <h1 class='heading'>playlist details</h1>

        <div class='row'>
          <div class='column'>
            <form
              onSubmit={handleBookmark}
              action=''
              method='post'
              class='save-playlist'
            >
              <input type='submit' value={'Bookmark'} />
            </form>

            <div class='thumb'>
              {playDetails && (
                <img
                  src={`/uploads/${extractFilename(
                    playDetails.playlist.thumb
                  )}`}
                  alt=''
                />
              )}
              <span>10 videos</span>
            </div>
          </div>
          <div class='column'>
            <div class='tutor'>
              <img src='/images/pic-2.jpg' alt='' />
              <div>
                {playDetails && <h3>{playDetails.playlist.tutor.name}</h3>}
                {playDetails && (
                  <span>{playDetails.playlist.date.slice(0, 10)}</span>
                )}
              </div>
            </div>

            <div class='details'>
              {playDetails && <h3>{playDetails.playlist.title}</h3>}
              {playDetails && <p>{playDetails.playlist.description}</p>}
             
              {playDetails && (
                <a
                  href={`/teacher/${playDetails.playlist.tutor._id}`}
                  class='inline-btn'
                >
                  view profile
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <Content content={playlistOptions} />
      <Notes content={notesOptions} />
    </>
  )
}

export default Playlist
