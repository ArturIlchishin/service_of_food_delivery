import React from 'react';
import {AppRouter} from "./router/AppRouter";
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from './firebase';
import './App.css';

initializeApp(firebaseConfig)

function App() {

    return (
      <div className={'app__container'}>
          <AppRouter />
      </div>

  );
}

export default App;
