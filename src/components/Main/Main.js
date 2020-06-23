import React from 'react';
import classes from './Main.module.css';
import Logo from '../img/logo.png';
import Cards from './Cards/Cards';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Footer from '../Footer/Footer';
// import { Link } from 'react-router-dom';


const Main = () => (
    <div className={classes.All}>

<div className={classes.MenuLeft}>
    <div className={classes.Logo}>
<img src={Logo} alt="logo" className={classes.LogoImg} />
<h1>WikipediA</h1>
<p>The Free Encyclopedia</p>
    </div>
<div>
<ul className={classes.Links}>
        <li><a href="/">Main Page</a></li>
        <li><a href="/">Contents</a></li>
        <li><a href="/">Current Events</a></li>
        <li><a href="/">Random Article</a></li>
        <li><a href="/">About Wikipedia</a></li>
        <li><a href="/">Contact Us</a></li>
        <li><a href="/">Donate</a></li>
        <li><a href="/">Log In</a></li>
        
</ul>
</div>
</div>


<div className={classes.Main}>
<div className={classes.Welcome}>
    <p>Welcome to <a href="/">Wikipedia</a>!
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form></p>
</div>
<Cards className={classes.Cards} />
</div>
<Footer />
    </div>
);


export default Main;