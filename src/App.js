// import React, {useState} from 'react';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
// import HomePage from './Components/HomePage';
// import MovieCard from './Components/MovieCard';

// function App() {
//   return (
//     <div>
//     <Login/>
//     <SignUp/>
//     <HomePage/>
//     </div>
//  );
// }

// export default App;




import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import About from './Components/About';

const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route element={<About/>} path="/about"/>
  <Route element={<Login/>} path='/'/>
  <Route element={<SignUp/> }path="/signup"/>
  <Route element={<HomePage/> }path="/homepage"/>
</Routes>
</BrowserRouter>
<About/>
    </div>
  )
}

export default App