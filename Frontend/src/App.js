import React from "react"
import Header from "./components/common/header/Header"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import Politics from "./components/politics/Politics"
import Memes from "./components/memes/Memes"
import Sports from "./components/sports/sports"
import Login from "./components/common/login/Login"
import SignUp from "./components/common/login/Register"
import Logout from "./components/common/login/logout";

// import Login from "./components/login";
// import SignUp from "./components/signup";
// import UserDetails from "./components/userDetails";

function App() {
  return (
    
      <Router>
        {/* <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
          </div>
          </div>
          </div> */}
        <Header />
        

        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/culture' component={Culture} />
          <Route exact path='/politics' component={Politics} />
          <Route exact path='/memes' component={Memes} />
          <Route exact path='/sports' component={Sports} />
          {/* <Route exact path="/" element={isLoggedIn == "true" ? <UserDetails /> : <Login />}/>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/userDetails" element={<UserDetails />} /> */}
              <Route path="/login" component={Login} />
              <Route path="/registration" component={SignUp} />
              <Route path="/logout" component={Logout} />

      
        </Switch>
        <Footer />
      </Router>
  )
}

export default App
