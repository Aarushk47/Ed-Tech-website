import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { toast } from 'react-hot-toast'

const AddContent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    playlist: '',
    thumb: null,
    video: null
  })

  const [playlistOptions, setPlaylistOptions] = useState([])

  const handleInputChange = event => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFileChange = event => {
    const { name, files } = event.target
    setFormData({
      ...formData,
      [name]: files[0]
    })
  }
  const tutortoken = localStorage.getItem('teachers_access_token')

  const handleSubmit = async event => {
    
    event.preventDefault()
    const data = new FormData()
    data.append('title', formData.title)
    data.append('description', formData.description)
    data.append('status', formData.status)
    data.append('thumb', formData.thumb)
    data.append('video', formData.video)
    try {
      const response = await axios.post(`/addContent/${formData.playlist}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${tutortoken}`
        }
      })
      console.log(response.data)
      toast.success('Video Added to Playlist')
    } catch (error) {
      toast.error('Not Posted')

      console.error(error)
    }
  }
  const fetchPlaylists = async () => {
   
    try {
      const response = await axios.get('/getPlayListbyId',  {
         headers: {
           'Content-Type': 'multipart/form-data',
           Authorization: `Bearer ${tutortoken}`
         }
       })
        setPlaylistOptions(response.data.playlist);
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchPlaylists()
  }, [])

  return (
    <>
      <section class='video-form'>
        <h1 class='heading'>upload content</h1>

        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <p>
            video status <span>*</span>
          </p>
          <select
            name='status'
            class='box'
            value={formData.status}
            onChange={handleInputChange}
            required
          >
            <option value='' selected disabled>
              -- select status
            </option>
            <option value='active'>active</option>
            <option value='deactive'>deactive</option>
          </select>
          <p>
            video title <span>*</span>
          </p>
          <input
            type='text'
            name='title'
            maxlength='100'
            required
            placeholder='enter video title'
            class='box'
            value={formData.title}
            onChange={handleInputChange}
          />
          <p>
            video description <span>*</span>
          </p>
          <textarea
            name='description'
            class='box'
            required
            placeholder='write description'
            maxlength='1000'
            cols='30'
            rows='10'
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          <p>
            video playlist <span>*</span>
          </p>
          <select
            name='playlist'
            class='box'
            value={formData.playlist}
            onChange={handleInputChange}
            required
          >
            <option value='' disabled selected>
              --select playlist
            </option>
            {playlistOptions.map(playlist => (
              <option key={playlist._id} value={playlist._id}>
                {playlist.title}
              </option>
            ))}
          </select>
          <p>
            select thumbnail <span>*</span>
          </p>
          <input
            type='file'
            name='thumb'
            accept='image/*'
            required
            className='box'
            onChange={handleFileChange}
          />
          <p>
            select video <span>*</span>
          </p>
          <input
            type='file'
            name='video'
            accept='video/*'
            required
            className='box'
            onChange={handleFileChange}
          />
          <input type='submit' value='upload video' name='submit' class='btn' />
        </form>
      </section>
    </>
  )
}

export default AddContent
