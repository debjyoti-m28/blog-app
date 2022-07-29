import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <img
         className='postImage'
         src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" 
         alt="" 
         />
         <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">lorem ipsumn jbf jgjd</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
         </div>
         <p className="postDesc">
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Quas facere neque tempore in nulla 
            consequuntur repellendus ipsum ex corrupti
             rem laudantium doloremque non dolorem sapiente.
         </p>
    </div>
  )
}
