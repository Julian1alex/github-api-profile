import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import {useGithub} from "../redux/ducks/github"
import User from "./User"
import Repos from "./Repos"
import "../styles/base.css";
import Icons from "../lib/Icon"

function Wrap() {
return (
  <Provider store={store}>
    <App/>
  </Provider>
)}

function App() {
  const {user, repos} = useGithub('Julian1alex')
  
  return (
      <div className="bodycontainer">
        <div className="heading">
          <div>
            <div className="headingflex">

              <div className="octicon">
              <Icons  icon="github"></Icons>
              </div>

              <div className="searchbarf">
                <input className="searchbar" type="text" placeholder="Search or jump to...."/>
              </div>

              <ul className="navbar">
                <li>Pull Requests</li>
                <li>Issues</li>
                <li>Marketplace</li>
                <li>Explore</li>
              </ul>

              <ul className="headericons">
                <li><div className="icon1"><Icons icon="bell"></Icons></div></li>
                <li><div className="icon2"><Icons icon="plus"></Icons></div></li>
                <li><div className="down"><Icons icon="caret-down"></Icons></div></li>
                <img className="avatar" src="https://avatars1.githubusercontent.com/u/55994100?v=4"/>
                <li><div className="down1"><Icons icon="caret-down"></Icons></div></li>
              </ul>

            </div>
          </div>
        </div>
        <div className="maincontainer">
        <User {...user}/>
        <Repos repos={repos}/>
        </div>
      </div>
  )
}

export default Wrap
