import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Blog() {
  const [blogData, setBlogData] = useState([])
  const getBlog = () => {
    axios.get(`https://mobiflix.in/wp-json/wp/v2/posts`).then(res => setBlogData(res.data))
  }
  useEffect((req, res) => {
    getBlog()
  }, []);
console.log(blogData)
  return (
    <div className='flex gap-2 flex-wrap px-12 py-12 justify-center'>
      {
        blogData.map((item, index) => {
          return (
            <div className="card card-compact w-96 bg-base-100 shadow-xl" key={index}>
              <figure><img src={'https://mobiflix.in/'+item.jetpack_featured_media_url} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{item.title.rendered}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read more</button>
                </div>
              </div>
            </div>

          )
        })
      }

    </div>
  )
}

export default Blog