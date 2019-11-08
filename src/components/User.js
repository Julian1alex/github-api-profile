import React from "react"


export default function (props) {
    return (
        <div className="section1">
            <img className="profilepic" src={props.avatar_url}/>
            <h1 className="name"> Alexander Gonzalez</h1>
            <h2 className="username"> {props.login}</h2>
            <button className="follow">Follow Me</button>
        </div>
    )
}