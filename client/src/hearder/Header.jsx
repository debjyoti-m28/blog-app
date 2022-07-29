import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Share your thoughts</span>
            <span className="headerTitleLg">Let's Blog</span>
        </div>
        <img
        className="headerImage"
         src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
         alt=""
           />
    </div>
  )
}
