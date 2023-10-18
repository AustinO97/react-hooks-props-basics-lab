import React from "react";
import Links from "./Links";

function P(props) {

  return (
    <>
      {props.bio ? <p>{props.bio}</p> : null}
    </>
    )
}



function About(props) {

  return (
    <div id="about">
      <h2>About Me</h2>
      <P bio={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}



export default About;
