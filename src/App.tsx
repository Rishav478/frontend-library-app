import React from 'react';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

import './App.css';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/Homepage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

export const  App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
     {/* <SearchBooksPage/>
      <Footer/>
    </div>
  );
}


