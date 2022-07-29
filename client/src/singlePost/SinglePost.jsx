import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
       <div className="singlePostWrapper">
        <img 
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        alt="" 
        className="singlePostImage" 
        />
        <h1 className="singlePostTitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i> 
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author: <b>Debjyoti</b>
            </span>
            <span className="singlePostDate">
                1 hour ago
            </span>
        </div>
        <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Nulla quibusdam dolorum ratione
              repellat alias repudiandae corporis similique minus,
               praesentium consectetur repellendus nesciunt quia reprehenderit
             officia. Maiores possimus voluptate iste enim.
             Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Nulla quibusdam dolorum ratione
              repellat alias repudiandae corporis similique minus,
               praesentium consectetur repellendus nesciunt quia reprehenderit
             officia. Maiores possimus voluptate iste enim.
             Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Nulla quibusdam dolorum ratione
              repellat alias repudiandae corporis similique minus,
               praesentium consectetur repellendus nesciunt quia reprehenderit
             officia. Maiores possimus voluptate iste enim.
             Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Nulla quibusdam dolorum ratione
              repellat alias repudiandae corporis similique minus,
               praesentium consectetur repellendus nesciunt quia reprehenderit
             officia. Maiores possimus voluptate iste enim.
             Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Nulla quibusdam dolorum ratione
              repellat alias repudiandae corporis similique minus,
               praesentium consectetur repellendus nesciunt quia reprehenderit
             officia. Maiores possimus voluptate iste enim.
        </p>
       </div>
    </div>
  )
}
