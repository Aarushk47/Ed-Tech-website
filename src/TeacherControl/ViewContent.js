import React, { useEffect, useState } from 'react'
import axios from '../axios'

const ViewContent = () => {
  const [playlistOptions, setPlaylistOptions] = useState([])
  const tutortoken = localStorage.getItem('teachers_access_token')

  const fetchPlaylists = async () => {
    try {
      const response = await axios.get('/getContentbyId', {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${tutortoken}`
        }
      })
      setPlaylistOptions(response.data.content)
      console.log(response.data.content)
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
  return (
    <>
      <section class='view-content'>
        {playlistOptions.map(video => (
          <div class='container'>
            <video
              src={`uploads/${extractFilename(video.video)}`}
              autoplay
              controls
              poster={`uploads/${extractFilename(video.thumb)}`}
              class='video'
            ></video>
            <div class='date'>
              <i class='fas fa-calendar'></i>
              <span>{video.date.slice(0, 10)}</span>
            </div>
            <h3 class='title'>{video.title}</h3>
            <div class='flex'>
              <div>
                <i class='fas fa-heart'></i>
                <span>total likes</span>
              </div>
              <div>
                <i class='fas fa-comment'></i>
                <span>PlayList - {video.playlist.title}</span>
              </div>
            </div>
            <div class='description'>{video.description}</div>
            <form action='' method='post'>
              <div class='flex-btn'>
              
                <input
                  type='submit'
                  value='delete'
                  class='delete-btn'
                  onclick="return confirm('delete this video?');"
                  name='delete_video'
                />
              </div>
            </form>
          </div>
        ))}
      </section>

      {/* <section class="comments">

   <h1 class="heading">user comments</h1>

   
   <div class="show-comments">
      <?php
         $select_comments = $conn->prepare("SELECT * FROM `comments` WHERE content_id = ?");
         $select_comments->execute([$get_id]);
         if($select_comments->rowCount() > 0){
            while($fetch_comment = $select_comments->fetch(PDO::FETCH_ASSOC)){   
               $select_commentor = $conn->prepare("SELECT * FROM `users` WHERE id = ?");
               $select_commentor->execute([$fetch_comment['user_id']]);
               $fetch_commentor = $select_commentor->fetch(PDO::FETCH_ASSOC);
      ?>
      <div class="box">
         <div class="user">
            <img src="../uploaded_files/<?= $fetch_commentor['image']; ?>" alt="">
            <div>
               <h3><?= $fetch_commentor['name']; ?></h3>
               <span><?= $fetch_comment['date']; ?></span>
            </div>
         </div>
         <p class="text"><?= $fetch_comment['comment']; ?></p>
         <form action="" method="post" class="flex-btn">
            <input type="hidden" name="comment_id" value="<?= $fetch_comment['id']; ?>">
            <button type="submit" name="delete_comment" class="inline-delete-btn" onclick="return confirm('delete this comment?');">delete comment</button>
         </form>
      </div>
      <?php
       }
      }else{
         echo '<p class="empty">no comments added yet!</p>';
      }
      ?>
      </div>
   
</section> */}
    </>
  )
}

export default ViewContent
