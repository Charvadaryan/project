import React, { useEffect, useState } from 'react'
import BloggerCard from '../../components/BloggerCard/BloggerCard'
import BlogCard from '../../components/BlogCard/BlogCard'
import Api from '../../api/Api'

function Home() {
    const [bloggers, setBloggers] = useState([])
    const [posts, setPosts] = useState([])
    useEffect(() => {
        Api.people.get().then(res => res.json()).then(data => setBloggers(data))
        Api.posts.get().then(res => res.json()).then(data => setPosts(data))
    }, [])

    return (
        <div className="container row">
           <div className="col 3">
            <BloggerCard bloggers={bloggers}/>
           </div>
           <div className="col 9">
            <BlogCard posts={posts}/> 
           </div>
        </div>
    )
}

export default Home;
