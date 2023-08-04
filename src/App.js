import * as React from 'react';
import './App.css';

function App() {
  const itemData = [
    {
      img: '/123_1',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
  ];

  return (
    <div className='site'>
      <header className='header'>
        <img className='logo' src='/RMM-grey-logo.png'></img>
      </header>
      <body className='body' >
        {/* <img className='Bbogo' src="/RMM Logo.png"></img> */}
        <div className='textbox1'>
          <p>Rocky Mountain Maintenance is a large scale earthmoving and excavation company with a proven track record of high quality work on some of Southeast Idaho's
            largest projects. Working in both the construction and agricultural fields we have many current and former satisfied clients including J.R. Simplot, Lamb Weston, Teton West of Washington, The Haskell Company, Steuve Construction, International
            Farming Corporation, and many more. Working on large excavation and earthmoving projects requires a company with a safety first mindset, effective communication skills, experienced project managers and operators, and top
            of the line equipment that can efficiently achieve your project goals. Contact us and see how Rocky Mountain Maintenance can complete your project on time and under budget</p>
        </div>
        <div className='picMain'>
          <img className='images' src='/IMG_3719.jpg'></img>
        </div>
        <div className='imageList'>
          <img className='images' src='/123_1.jpg'></img>
          <img className='images' src='/Attachment.jpg'></img>
          <img className='images' src='/IMG_3988.jpg'></img>
        </div>
      </body>
      <footer className='footer'>
      </footer>
    </div>
  );
}

export default App;
