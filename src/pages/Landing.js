import React from 'react'
import './landing.css'

const Landing = () => {
  return (
    <div class='wrapper'>
      <section id='home'>
        <h2>ByteBrigade - Where Learning is Individualized </h2>
        <p>
          India's top online ed-tech platform that provides affordable and
          comprehensive learning experience to students of engineering
          background and those who are interested in the field of computer
          science.
        </p>
        <div class='btn'>
          <a class='blue' href='#courses'>
            Learn More
          </a>
          <a class='yellow' href='/home'>
            Visit Courses
          </a>
        </div>
      </section>
      <section id='features'>
        <h1>Awesome Features</h1>
        <p>Replenish man have thing gathering lights yielding shall you</p>
        <div class='fea-base'>
          <div class='fea-box'>
            <i class='fa-solid fa-graduation-cap'></i>
            <h3>Scholarship Facility</h3>
            <p>
              One make creepeth, man bearing theira firament wont great heaven
            </p>
          </div>
          <div class='fea-box'>
            <i class='fa-solid fa-school'></i>
            <h3>Interactive Classes</h3>
            <p>
              Enable learners to review each other’s work encourages a culture
              of sharing which can be valuable in spreading best-practice.
            </p>
          </div>
          <div class='fea-box'>
            <i class='fa-solid fa-chalkboard-user'></i>
            <h3>Doubt Support</h3>
            <p>
              At ByteBrigade , we provide doubt solving sessions for students to
              guide them through any query they have.
            </p>
          </div>
        </div>
      </section>

      <section class='courses'>
        <h1 class='heading'>Popular Courses</h1>
        <p>Replenish man have thing gathering lights yielding shall you</p>
        <div class='box-container'>
          <a href='playlist.html' class='inline-btn'>
            <div class='box'>
              <div class='tutor'>
                <img src='images/kylepew.jpg' alt='' />
                <div class='info'>
                  <h3>Kyle Pew</h3>
                  <span>15-02-2022</span>
                </div>
              </div>
              <div class='thumb'>
                <img src='images/html.jpg' alt='' />
              </div>
              <h3 class='title'>HTML - Introduction to HTML Web Development</h3>
            </div>
          </a>

          <a href='playlist.html' class='inline-btn'>
            <div class='box'>
              <div class='tutor'>
                <img src='/images/aman.jpg' alt='' />
                <div class='info'>
                  <h3>Aman Dhattarwal</h3>
                  <span>04-10-2021</span>
                </div>
              </div>
              <div class='thumb'>
                <img src='/images/css.jpg' alt='' />
              </div>
              <h3 class='title'>
                Ultimate CSS Grid Course : From Beginner to Advanced
              </h3>
            </div>
          </a>

          <a href='playlist.html' class='inline-btn'>
            <div class='box'>
              <div class='tutor'>
                <img src='images/jsimage.jpg' alt='' />
                <div class='info'>
                  <h3>Jonas Schmedtmann</h3>
                  <span>21-10-2023</span>
                </div>
              </div>
              <div class='thumb'>
                <img src='images/js.jpg' alt='' />
              </div>
              <h3 class='title'>The Complete Javascript Course 2023</h3>
            </div>
          </a>

          <a href='playlist.html' class='inline-btn'>
            <div class='box'>
              <div class='tutor'>
                <img src='images/daniel.jpg' alt='' />
                <div class='info'>
                  <h3>Daniel Walter Scott</h3>
                  <span>25-08-2022</span>
                </div>
              </div>
              <div class='thumb'>
                <img src='images/boots.jpg' alt='' />
              </div>
              <h3 class='title'>Responsive Web Design - HTML CSS Bootstrap</h3>
            </div>
          </a>

          <a href='playlist.html' class='inline-btn'>
            <div class='box'>
              <div class='tutor'>
                <img src='images/joe.jpg' alt='' />
                <div class='info'>
                  <h3>Joe Parys</h3>
                  <span>14-05-2022</span>
                </div>
              </div>
              <div class='thumb'>
                <img src='images/jq.png' alt='' />
              </div>
              <h3 class='title'>
                The Complete jQuery Course : From Beginner to Advancesd
              </h3>
            </div>
          </a>

          <a href='playlist.html' class='inline-btn'>
            <div class='box'>
              <div class='tutor'>
                <img src='images/jsimage.jpg' alt='' />
                <div class='info'>
                  <h3>Jonas Schmedtmann</h3>
                  <span>03-12-2023</span>
                </div>
              </div>
              <div class='thumb'>
                <img src='images/Daco_1407237.png' alt='' />
              </div>
              <h3 class='title'>
                SASS - The Complete SASS Course (CSS Preprocessor)
              </h3>
            </div>
          </a>
        </div>
      </section>

      <section id='registration'>
        <div class='reminder'>
          <p>Get 100 Online Courses For Free</p>
          <h1>Register To Get It</h1>
          <div class='time'>
            <div class='date'>
              18 <br /> Days
            </div>
            <div class='date'>
              23 <br /> Hours
            </div>
            <div class='date'>
              06 <br /> Minutes
            </div>
            <div class='date'>
              58 <br /> Seconds
            </div>
          </div>
        </div>

        <div class='form'>
          <h3>Create Free Account NOW!</h3>
          <input type='text' placeholder='Name' name='' id='' />
          <input type='text' placeholder='Email Address' name='' id='' />
          <input type='text' placeholder='Phone Number' name='' id='' />
          <div class='btn'>
            <a class='yellow' href='#'>
              Submit Form
            </a>
          </div>
        </div>
      </section>

      <section id='experts'>
        <h1>Community Experts</h1>
        <p>Replemish man have thing gathering lights yielding shall you</p>
        <div class='expert-box'>
          <div class='profile'>
            <img
              src='./images/WhatsApp Image 2023-05-02 at 12.10.11 AM.jpeg'
              alt=''
            />
            <h6>Kaamil Savla</h6>
            <p>Python and Algorithm Expert</p>
            <div class='prolinks'>
              <i class='fab fa-facebook'></i>
              <i class='fab fa-instagram'></i>
              <i class='fab fa-linkedin'></i>
            </div>
          </div>
          <div class='profile'>
            <img
              src='./images/WhatsApp Image 2023-05-01 at 9.30.57 PM.jpeg'
              alt=''
            />
            <h6>Saurav Thakur</h6>
            <p>Designer</p>
            <div class='prolinks'>
              <i class='fab fa-facebook'></i>
              <i class='fab fa-instagram'></i>
              <i class='fab fa-linkedin'></i>
            </div>
          </div>
          <div class='profile'>
            <img src='./images/IMG-2490.jpg' alt='' />
            <h6>Devendra Singh</h6>
            <p>Frontend Developer</p>
            <div class='prolinks'>
              <i class='fab fa-facebook'></i>
              <i class='fab fa-instagram'></i>
              <i class='fab fa-linkedin'></i>
            </div>
          </div>
          <div class='profile'>
            <img src='./images/IMG-2592 (1).jpg' alt='' />
            <h6>Aarush Kashyap</h6>
            <p>Backend Developer</p>
            <div class='prolinks'>
              <i class='fab fa-facebook'></i>
              <i class='fab fa-instagram'></i>
              <i class='fab fa-linkedin'></i>
            </div>
          </div>
          <div class='profile'>
            <img
              src='./images/WhatsApp Image 2023-05-02 at 12.03.06 AM.jpeg'
              alt=''
            />
            <h6>Yash Mandan</h6>
            <p>Tester</p>
            <div class='prolinks'>
              <i class='fab fa-facebook'></i>
              <i class='fab fa-instagram'></i>
              <i class='fab fa-linkedin'></i>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class='footer1'>
          <div class='footer-col'>
            <h3>Top Products</h3>
            <li>Manage Reputations</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
          </div>
          <div class='footer-col'>
            <h3>Quick Links</h3>
            <li>Jobs</li>
            <li>Brand Assets</li>
            <li>Investor Relations</li>
            <li>Terms of Service</li>
          </div>
          <div class='footer-col'>
            <h3>Features</h3>
            <li>Manage Reputations</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
          </div>
          <div class='footer-col'>
            <h3>Resources</h3>
            <li>Guides</li>
            <li>Research</li>
            <li>Experts</li>
            <li>Marketing Service</li>
          </div>
          <div class='footer-col'>
            <h3>Newsletter</h3>
            <p>You can trust us. We only send promo offers</p>
            <div class='subscribe'>
              <input type='text' placeholder='Your Email Address' />
              <a href='#' class='yellow'>
                SUBSCRIBE
              </a>
            </div>
          </div>
        </div>
        <div class='copyright'>
          <p>Copyright @2023 All Rights Reserved | The Byte Brigade</p>
          <div class='prolinks'>
            <i class='fab fa-facebook'></i>
            <i class='fab fa-instagram'></i>
            <i class='fab fa-linkedin'></i>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
