import React from 'react';
import Header from './Header';
import Dioses from './Dioses';
import Footer from './Footer';
import { Component } from 'react';

class DiosesMain extends Component{
    render(){
      return(
        <div>
          <Header />
          <Dioses />
          <Footer />
        </div>
      )
    }
}

export default DiosesMain;