import React, { useState } from 'react';
import axios from '../axios';
import toast from 'react-hot-toast'

const CreatePlaylist = () => {
  const [playlistData, setPlaylistData] = useState({
    tutor: '', // Assuming you have a tutor field in the playlist schema
    title: '',
    description: '',
    thumb: null, // Initialize thumb as null
    date: '',
    status: 'deactive'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPlaylistData({
      ...playlistData,
      [name]: value
    });
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    setPlaylistData({
      ...playlistData,
      thumb: file
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('tutor', playlistData.tutor);
    formData.append('title', playlistData.title);
    formData.append('description', playlistData.description);
    formData.append('thumb', playlistData.thumb);
    formData.append('date', playlistData.date);
    formData.append('status', playlistData.status);

    try {
    const tutortoken = localStorage.getItem('teachers_access_token');
      const response = await axios.post('/addPlaylist', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${tutortoken}`
        }
      });

      console.log('react',response.data);

      // Reset the form after successful submission
      setPlaylistData({
        tutor: '',
        title: '',
        description: '',
        thumb: null,
        date: '',
        status: 'deactive'
      });

      toast.success('Playlist Added')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="playlist-form">
        <h1 className="heading">create playlist</h1>

        <form onSubmit={handleSubmit}>
          <p>playlist status <span>*</span></p>
          <select name="status" className="box" required onChange={handleInputChange} value={playlistData.status}>
            <option value="" disabled>-- select status</option>
            <option value="active">active</option>
            <option value="deactive">deactive</option>
          </select>

          <p>playlist title <span>*</span></p>
          <input type="text" name="title" maxLength="100" required placeholder="enter playlist title" className="box" onChange={handleInputChange} value={playlistData.title} />

          <p>playlist description <span>*</span></p>
          <textarea name="description" className="box" required placeholder="write description" maxLength="1000" cols="30" rows="10" onChange={handleInputChange} value={playlistData.description}></textarea>

          <p>playlist thumbnail <span>*</span></p>
          <input type="file" name="thumb" accept="image/*" required className="box" onChange={handleFileInputChange} />

          <input type="submit" value="create playlist" name="submit" className="btn" />
        </form>
      </section>
    </>
  );
};

export default CreatePlaylist;
