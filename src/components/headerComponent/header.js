import React, { Component } from 'react';
import logo from './logo2.png';



class Header extends Component {
    render () {
        return (
<header>
          <div className ="logo">
          <img src={logo}style={styles}/>
      </div>
      
      
    <p>
    Clcick on map and add Illegal trash dumping
    </p>
  </header>

        );
    }
}
const styles ={

      width: '30%',
      height: '30%',
      paddingTop: '10px',
    
};

export default Header;