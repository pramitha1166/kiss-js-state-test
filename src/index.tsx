//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import CounterBloc from './bloc/counter-bloc'
import { BlocBuilder } from 'kiss-js-bloc-react';
import CounterComponent from './components/counter-component';
import CounterActions from './components/counter-actions';
import Header from './components/header/header';

let bloc = new CounterBloc()

const App: React.FC = () => {

    return (
        <div>
            <Header />
            <CounterComponent />
            <CounterActions />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

