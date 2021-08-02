import React, { Component } from 'react';
import Icon from './assets/logo.png'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header className='header-border'>
                    <img src={Icon} alt="logo" />
                        <h3>Delicious</h3>
                        <h5>THE BEST FOOD BLOG ON THE WEB</h5>
            </header>
         );
    }
}
 
export default Header;