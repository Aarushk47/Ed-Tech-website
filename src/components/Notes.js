import React from 'react'
import WatchVideo from './WatchVideo'


const Notes = ({ content }) => {
   console.log(content);
  function extractFilename (path) {
    const parts = path.split('\\')
    const filename = parts.pop()
    return filename
  }

  const handleVideo = (id,location) => {
    window.location.href = `/read-notes/${id}/${location}`;
  }
  console.log('content', content)
  return (
    <section class='playlist-videos'>
      <h1 class='heading'>Notes</h1>

      <div class='box-container'>
        {content.map(c => {
          return (
            <button onClick={() => handleVideo(c._id, extractFilename(c.note))} class='box'>
              <i class='fas fa-play'></i>
              {content && (
                <img src={`/uploads/${extractFilename(c.thumb)}`} alt='' />
              )}
              <h3>{content && c.title}</h3>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default Notes
