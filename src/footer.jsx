import React, { Component } from 'react';
import SmlLogo from './assets/small-logo.png';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer>
                <section className='small-logo-bg'>
                    <hr />
                    <img src={SmlLogo} alt="small fork and knife"/> 
                </section>
                <section>
                    <p>Delicious &copy; 2013 &#8226; All Rights Reserved.</p> 
                    <br></br>
                    <p>Proudly Published With Ghost.</p>
                </section>
            </footer>
         );
    }
}
 
export default Footer;