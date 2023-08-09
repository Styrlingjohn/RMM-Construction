import * as React from 'react';
import './App.css';
import PictureSlideshow from './components/Pics';

function App() {

  return (
    <div className='site'>
      <header className='header'>
        <img className='logo' src='/RMM-grey-logo.png'></img>
      </header>
      <body className='body' >
        <section className='textbox1'>
          <div >
            <h1>About Our Company</h1>
            <p>Rocky Mountain Maintenance is a large scale earthmoving and excavation company with a proven track record of high quality work on some of Southeast Idaho's
              largest projects. Working in both the construction and agricultural fields we have many current and former satisfied clients including J.R. Simplot, Lamb Weston, Teton West of Washington, The Haskell Company, Steuve Construction, International
              Farming Corporation, and many more. Working on large excavation and earthmoving projects requires a company with a safety first mindset, effective communication skills, experienced project managers and operators, and top
              of the line equipment that can efficiently achieve your project goals. Contact us and see how Rocky Mountain Maintenance can complete your project on time and under budget</p>
          </div>
        </section>
        <section>
          <div className='imageList'>
            <PictureSlideshow/>
          </div>
        </section>
        <section className='textbox2'>
          <div>
            <h1>Services Offered:</h1>
            <ul> 
              <li>Earthmoving</li>
              <li>Excavation</li>
              <li>GPS and Laser Grading</li>
              <li>Trucking and Hauling</li>
              <li>Gravel Crushing and Hauling</li>
            </ul>
          </div>
        </section>
        <section className='contactInfo'>
          <div>
            <p>
              Preston Armstrong
            </p>
            <br></br>


            <p>
              208-339-1132
              <br></br>
              @yahoo.com
            </p>
            
          </div>
        </section>
      </body>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
