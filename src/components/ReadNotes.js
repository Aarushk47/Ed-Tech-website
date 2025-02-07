import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios'

const ReadNotes = () => {
  const { location, id } = useParams()

  return (
    <>
      <section class='watch-video'>
        <div class='video-container'>
          <div class='video'>
            <img style={{width:'50%'}}
              src={`/uploads/${location}`}
              controls
              poster='images/post-1-1.png'
              id='video'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ReadNotes
