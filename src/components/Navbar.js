import React, { useEffect } from 'react'
// import '../script'

const Navbar = () => {

   useEffect(() => {
      let toggleBtn = document.getElementById('toggle-btn');
      let body = document.body;
      let darkMode = localStorage.getItem('dark-mode');
      
      const enableDarkMode = () =>{
         toggleBtn.classList.replace('fa-sun', 'fa-moon');
         body.classList.add('dark');
         localStorage.setItem('dark-mode', 'enabled');
      }
      
      const disableDarkMode = () =>{
         toggleBtn.classList.replace('fa-moon', 'fa-sun');
         body.classList.remove('dark');
         localStorage.setItem('dark-mode', 'disabled');
      }
      
      if(darkMode === 'enabled'){
         enableDarkMode();
      }
      
      toggleBtn.onclick = (e) =>{
         darkMode = localStorage.getItem('dark-mode');
         if(darkMode === 'disabled'){
            enableDarkMode();
         }else{
            disableDarkMode();
         }
      }
      
      let profile = document.querySelector('.header .flex .profile');
      
      document.querySelector('#user-btn').onclick = () =>{
         profile.classList.toggle('active');
      }
      
      
    
      
      let sideBar = document.querySelector('.side-bar');
      
      document.querySelector('#menu-btn').onclick = () =>{
         sideBar.classList.toggle('active');
         body.classList.toggle('active');
      }
      
      document.querySelector('#close-btn').onclick = () =>{
         sideBar.classList.remove('active');
         body.classList.remove('active');
      }
      
      window.onscroll = () =>{
         profile.classList.remove('active');
      
         if(window.innerWidth < 1200){
            sideBar.classList.remove('active');
            body.classList.remove('active');
         }
      }
   }, [])

   const handleLogout = () => {
    localStorage.clear();
 }

  return (
    <>
      <header class='header'>
        <section class='flex'>
          <a href='home.html' class='logo'>
            <img style={{width:'20%'}} src="/logot.png" alt="" />
          </a>

         

          <div class='icons'>
            <div id='menu-btn' class='fas fa-bars'></div>
            <div id='search-btn' class='fas fa-search'></div>
            <div id='user-btn' class='fas fa-user'></div>
            <div id='toggle-btn' class='fas fa-sun'></div>
            
          </div>

          <div class='profile'>
            <img src='images/pic-1.jpg' class='image' alt='' />
            
            <a href='/profile' class='btn'>
              view profile
            </a>
            <div class='flex-btn'>
              <a onclick={handleLogout} href='/tutorLogin' class='option-btn'>
                Login as teacher
              </a>
              <a onclick={handleLogout} href='/tutorRegister' class='option-btn'>
              Register as teacher
              </a>
            </div>
          </div>
        </section>
      </header>
    </>
  )
}

export default Navbar
