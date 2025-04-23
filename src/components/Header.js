import React,{useState} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      <div id="header__bar" style = {{transform: showHeaderBar? `translateY(80px)`: `translateY(0px)`}}>
        <h3 className="header__bar__title">Github Code Base</h3>
        <div className="header__bar__icons">
          <a href="https://github.com/AsHuToShSiNgH02/Sorting-Visualizer" target='_blank'><img src="https://img.icons8.com/ios/50/000000/github--v1.png"/></a>
        </div>
      </div>

      <div className="header-logo">Sorting<span>Visualizer</span></div>
      <div className="header__options">
         <h3 className="header__option" onClick = {contactHandler}><span>C</span>ode <span>B</span>ase</h3>
      </div>
   </div>
  )
}

export default Header;
