import * as React from 'react';
import Slider from './components/Slider';
import './App.css';


const serviceBoxes = {
  display: 'flexbox',
  'background-color': 'rgb(189, 191, 195)',
  width: '400px',
  margin: '10px',
  'text-align': 'center',
  'line-height': '75px',
  'font-size': '25px',
  'max-width': '100%',
  'max-height': '100%',
  'justify-content': 'center',
}

const contacts = {
  textAlign: 'center',
  margin: 'auto',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
}


function App() {

  return (
    <div className='site'>

      <header className='header'>
        <img className='logo' src='/RMM-grey-logo.png' alt='greylogo'></img>
      </header>
      <body className='body' >
        <section className='textbox1'>
          <div >
            <h1 style={{ fontFamily: 'bebas neue', fontSize: '45px', }}>About Our Family Owned Company</h1>
            <p style={{ paddingTop: '20px', fontSize: '1.5vh', 'line-height': '35px' }}>Rocky Mountain Maintenance is a large scale earthmoving and excavation company with a proven track record of high quality work on some of Southeast Idaho's
              largest projects. Working in both the construction and agricultural fields we have many current and former satisfied clients including J.R. Simplot, Lamb Weston, Teton West of Washington, The Haskell Company, Steuve Construction, International
              Farming Corporation, and many more. Working on large excavation and earthmoving projects requires a company with a safety first mindset, effective communication skills, experienced project managers and operators, and top
              of the line equipment that can efficiently achieve your project goals. Contact us and see how Rocky Mountain Maintenance can complete your project on time and under budget</p>
          </div>
        </section>

        <Slider />

        <section>
          <div >
            <h1 style={{ paddingTop: '150px', textAlign: 'center', fontSize: '40px' }} >Services Offered:</h1>
            <div className='textbox2'>
              <div style={serviceBoxes}>Earthmoving</div>
              <div style={serviceBoxes}>Excavation</div>
              <div style={serviceBoxes}>GPS and Laser Grading</div>
              <div style={serviceBoxes}>Trucking and Hauling</div>
              <div style={serviceBoxes}>Gravel Crushing and Hauling</div>
            </div>
          </div>
        </section>
        <section >
          <div className='contactForm'>
            <img className='logo2' src='/Logo.png' alt='trackhoe-logo'></img>
            <div className='contactInfo'>
              <section className='contactTitles' style={contacts}>Contact Information:</section>
              <div className='contacts'>
                <section style={contacts}>
                  President & Project Superintendent
                  <br></br>
                  Russell Palmer
                  <br></br>
                  <a href="tel:208-251-8496">208-251-8496</a>
                  <br></br>
                  <a href="mailto:rmm0468@gmail.com"> rmm0468@gmail.com </a>
                </section>
                <section style={contacts}>
                  Project Manager
                  <br></br>
                  Preston Armstrong
                  <br></br>
                  <a href="tel:208-251-8496">208-251-8496</a>
                  <br></br>
                   <a href="mailto:armstrongpreston6@gmail.com"> armstrongpreston6@gmail.com </a>
                </section>
              </div>
              <br></br>
              <section className="contacts" style={contacts}>
                Address:
                <br />
                2719 W 2000 S Aberdeen, ID 83210
              </section>

            </div>
          </div>
        </section>


      </body>
    </div >
  );
}

export default App;
