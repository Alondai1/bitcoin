import React, { Component } from 'react';


function UserPreview (props) {
    return <li className="userItem ">
<span>{props.contact.name}</span>
<img src={`https://robohash.org/${props.contact.name}`} alt=""></img>
    </li>
  
}

export default UserPreview; 
