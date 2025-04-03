import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import BlogCard from './BlogCard'
import BlogIntro from './BlogIntro'

const Blog = () => {
    return (
        <div>
            <Navbar />
            <BlogIntro />
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 p-6 sm:grid-cols-2 lg:grid-cols-3">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
            <Footer />
        </div>
    )
}

export default Blog