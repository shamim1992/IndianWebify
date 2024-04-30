import React from 'react'
import './FeaturedArticle.css'

function FeaturedArticles() {
  return (
    <div className=' '>
            <div className="w-full">
                <h1 className='text-2xl font-bold text-center'>Featured Posts</h1>
                <div className="featured-posts py-5">
                    <div className="featured-image">
                        <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Fetaured Posts" />
                    </div>
                    <div className="featured-text flex flex-col justify-center">
                        <h2>New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <button className='btn btn-warning btn-outline'>Click</button>
                    </div>
                </div>
            </div>
           
        </div>
  )
}

export default FeaturedArticles