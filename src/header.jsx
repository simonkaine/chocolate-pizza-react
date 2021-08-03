import React, { Component } from 'react';
import Icon from './assets/logo.png';
import Facebook from './assets/fb-icon.png'
import Twitter from './assets/twit-icon.png'
import Google from './assets/gp-icon.png'
import Instagram from './assets/insta-icon.png'
import Flic from './assets/flic-icon.png'
import Pintrest from './assets/pint-icon.png'
import Rss from './assets/rss-icon.png'
import Mail from './assets/mail-icon.png'
import './header.css';

class ButtonList extends Component {
    state = {  }
    render() { 
        return ( 
            <section className='top-right'>
                    <img src={Facebook} alt="facebook" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Google} alt="google" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Flic} alt="flic" />
                    <img src={Pintrest} alt="pinterest" />
                    <img src={Rss} alt="rss" />
                    <img src={Mail} alt="mail" />
            </section>
         );
    }
}

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <section className='top-left'>
                    <img src={Icon} alt="logo" />
                </section> 
                <section className='top-left-middle'>
                    <h3>Delicious</h3>
                    <h6>THE BEST FOOD BLOG ON THE WEB</h6>
                </section>
                <ButtonList />
            </header>
         );
    }
}
 
export default Header;