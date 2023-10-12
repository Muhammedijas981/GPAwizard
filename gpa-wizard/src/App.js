import React, { useState } from 'react';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import './App.css';
import Cgpa from './Screens/Cgpa/Cgpa';
import Sgpa from './Screens/Sgpa/Sgpa';

function App() {

  // const [showComponent, setShowComponent] = useState(false);
  const [showSgpa, setShowSgpa] = useState(false);
  const [showCgpa, setShowCgpa] = useState(true);
  const [buttonText, setButtonText] = useState('CGPA');

  const handleClick = () => {
    if (buttonText === 'CGPA') {
      setShowSgpa(true);
      setShowCgpa(false);
      setButtonText('SGPA');
    } else {
      setShowSgpa(false);
      setShowCgpa(true);
      setButtonText('CGPA');
    }
  };

  return (
    <div className="App">
      <div className='header'>
        <div style={{ flex: 0.1 }}></div>
        <div className='logo'>
          <img className='image' src={require('./Asset/logo.png')} />
        </div>
        <div className='switch'>
          <div className='button' onClick={handleClick}>{buttonText}<ArrowDropDownRoundedIcon /></div>
        </div>
      </div>
      <div className='content'>
        {showCgpa && <Cgpa />}
        {showSgpa && <Sgpa/>}
      </div>
      <div className='footer'>
        <footer>
          <p>&copy; {new Date().getFullYear()} GPAwizard. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
