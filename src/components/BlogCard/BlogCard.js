import React from 'react'

function BlogCard({ posts }) {
    
    return (
        <div>
            {posts.map(blog => {
                return (
                    <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.description}</p>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogCard
