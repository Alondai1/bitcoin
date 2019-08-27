import React, { Component } from 'react';


function UserPreview (props) {
    return <li className="userItem card blue-grey darken-1 ">
<span className="card-title">{props.contact.name}</span>
<img src={`https://avatars.dicebear.com/v2/avataaars/${props.contact.name}.svg`} alt=""></img>
    </li>
}

export default UserPreview; 
