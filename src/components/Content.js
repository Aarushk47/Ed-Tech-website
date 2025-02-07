import React from 'react'



const Content = ({ content }) => {
  function extractFilename (path) {
    const parts = path.split('\\')
    const filename = parts.pop()
    return filename
  }

  const handleVideo = (id,tutor, location) => {
    window.location.href = `/watch-video/${tutor}/${id}/${location}`;
  }
  console.log('content', content)
  return (
    <section class='playlist-videos'>
      <h1 class='heading'>Lectures </h1>

      <div class='box-container'>
        {content.map(c => {
          {
            console.log(c.tutor._id);
          }
          return (
            <button onClick={() => handleVideo(c._id , c.tutor._id, extractFilename(c.video))} class='box'>
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

export default Content
