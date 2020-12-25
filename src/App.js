import React, {Fragment} from 'react';
import {Navbar} from './components/Navbar';
import {Main} from './pages/Main';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <div className="container pt-4">
        <Main/>
      </div>
    </Fragment>
  );
}

export default App;
