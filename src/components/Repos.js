import React from "react"

export default function (props) {
return(
<div className="section2">
    <div className="isection2">
    <ul className="repobar">
                <li>Overview</li>
                <li>Repositories</li>
                <li>Projects</li>
                <li>Packages</li>
                <li>Stars</li>
                <li>Followers</li>
                <li>Following</li>
              </ul>
    <div className="contentsec">
        <div>
        <input className="searchbarrepo" type="text" placeholder="Find a repositorty...."/>
        </div>
        <ul className="contentbutton">
            <button className="contentbuttons1"> Type: All</button>
            <button className="contentbuttons2"> Language: All</button>
            <button className="contentbuttons3"> New</button>

        </ul>

    </div>
{props.repos.map((repo, i) => (
    <div className="myrepos" key={'repo' + i}>
        <h2 className="reponame">{repo.name}</h2>
        <p className="datestamp">{repo.updated_at}</p>
    </div>
))}
    </div>
    </div>
) 
}