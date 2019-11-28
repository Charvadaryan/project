import React, { useState } from 'react';
import Home from './screens/home/Home';
import Nav from './screens/nav/Nav';
import Login from './screens/login/Login';



function App() {
  const [tab, setTab] = useState({tab1: "Home"})

  function onClickFunction(tab2) {
    setTab({tab1: tab2})
  }

  return (
    <div className="App">
      <Nav tab3={tab.tab1} onClickFunction={onClickFunction}/>
      {tab.tab1 === "Home" ? <Home/> : <Login/>}
      

    </div>
  );  
}

export default App;