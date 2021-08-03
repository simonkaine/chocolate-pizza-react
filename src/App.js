import React, { Component } from 'react';
import Header from './header';
import Recipe from './body';
import Footer from './footer';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <Header />
      <Recipe />
      <Footer />
      </>
     );
  }
}
 
export default App;