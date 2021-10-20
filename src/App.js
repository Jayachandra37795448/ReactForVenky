import {useState, useEffect, Component} from 'react'
import React from 'react';
import jsonData from './data.json';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button';
import  Invoices from './components/Invoices';
import Modal from "./components/Modal";

var logoImage = require('./assets/logo.svg')
var imageAvatar = require('./assets/image-avatar.jpg')

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    invoices = JSON.parse(JSON.stringify(jsonData));

    render() {
        return (<Router>
            <div className="wrapper">

                <div className="nav lite-dark-them">
                    <div className='logo-container'>
                        <img src={logoImage.default} className='imgNavLogo'/>
                    </div>
                    <div className='logo-container1'>
                    </div>
                    <div className='sunLogo'>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.817 16.18a.96.96 0 01.953.848l.007.112v1.535a.96.96 0 01-1.913.112l-.006-.112V17.14c0-.53.43-.96.96-.96zm-4.5-1.863c.347.346.373.89.08 1.266l-.08.09-1.085 1.087a.96.96 0 01-1.437-1.267l.08-.09 1.086-1.086a.959.959 0 011.357 0zm10.356 0l1.086 1.086a.959.959 0 11-1.357 1.357l-1.085-1.086a.959.959 0 111.356-1.357zM9.817 4.9a4.924 4.924 0 014.918 4.918 4.924 4.924 0 01-4.918 4.918A4.924 4.924 0 014.9 9.818 4.924 4.924 0 019.817 4.9zm8.858 3.958a.96.96 0 110 1.919H17.14a.96.96 0 110-1.92h1.535zm-16.18 0a.96.96 0 01.112 1.912l-.112.007H.96a.96.96 0 01-.112-1.913l.112-.006h1.534zm14.264-5.983a.96.96 0 010 1.357l-1.086 1.086a.96.96 0 11-1.356-1.357l1.085-1.086a.96.96 0 011.357 0zm-12.617-.08l.09.08 1.086 1.086A.96.96 0 014.05 5.398l-.09-.08-1.086-1.086a.959.959 0 011.267-1.436zM9.817 0c.53 0 .96.43.96.96v1.535a.96.96 0 01-1.92 0V.96c0-.53.43-.96.96-.96z"
                                fill="#858BB2" fill-rule="nonzero"/>
                        </svg>
                    </div>
                    <hr className='colorHr'/>
                    <div className='avtarImage'>
                        <img src={imageAvatar.default} className='imgNavLogo imgAvatar'/>
                    </div>
                </div>
                <div className="main">
                    {/*<button onClick={this.toggleModal}>
                        <span>Open the modal in app.js</span>
                    </button>*/}

                    <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                       <span>`Here's some content for the modal` in app.js</span>
                    </Modal>
                    <Header invoices={this.invoices}></Header>
                    <Invoices invoices={this.invoices}/>

                </div>
            </div>

        </Router>);
    }
}

export default App;


