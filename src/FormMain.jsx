import React from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import { Component } from 'react';

class FormMain extends Component{
    render(){
      return(
        <div>
          <Header />
          <Form />
          <Footer />
        </div>
      )
    }
}

export default FormMain;