import { useEffect } from 'react'
import { Footer, Navbar, Sidebar, Courses } from './components'
import {
  About,
  Home,
  Contact,
  Teachers,
  Login,
  Register,
  Profile,
  Landing
} from './pages'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import RegTeacher from './pages/RegTeacher'
import LoginTeacher from './pages/LoginTeacher'
import Update from './pages/Update'
import Playlist from './pages/Playlist'
import Dashboard from './TeacherControl/Dashboard'
import CreatePlaylist from './TeacherControl/CreatePlaylist'
import AddContent from './TeacherControl/AddContent'
import ViewCourses from './TeacherControl/ViewCourses'
import ViewContent from './TeacherControl/ViewContent'
import WatchVideo from './components/WatchVideo'
import TeacherPro from './pages/TeacherPro'
import AddNotes from './TeacherControl/AddNotes'
import ReadNotes from './components/ReadNotes'

function App () {
  return (
    <Router>
      <MainContent />
    </Router>
  )
}

function MainContent () {
  const location = useLocation()
console.log('location', location.pathname);
  const hideNavAndSidebar =
    location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/'


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88'
            },
            style: {
              background:
                'linear-gradient(90deg, #254380 -3.1%, #54A7C8 112.18%)',
              color: 'white'
            }
          }
        }}
      ></Toaster>

      {!hideNavAndSidebar && <>
        <Navbar />
        <Sidebar />
        </>}
     
      <main>
        <Routes>
          
          <Route path='' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/tutorRegister' element={<RegTeacher />} />
          <Route path='/tutorLogin' element={<LoginTeacher />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/mycourses' element={<ViewCourses />} />
          <Route path='/mycontent' element={<ViewContent />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/update' element={<Update />} />
          <Route path='/playlist/:playId' element={<Playlist />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add_playlist' element={<CreatePlaylist />} />
          <Route path='/add_content' element={<AddContent />} />
          <Route
            path='/watch-video/:tutor/:id/:location'
            element={<WatchVideo />}
          />
          <Route path='/read-notes/:id/:location' element={<ReadNotes />} />
          <Route path='/teacher/:teacherId' element={<TeacherPro />} />
          <Route path='/add_notes' element={<AddNotes />} />
        </Routes>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {!hideNavAndSidebar && (
        <>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
