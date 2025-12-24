// components
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data/SiteData";


import "./Page.css";


function BlogPage() {
    return (
        <div className="Page">
            {/* <h1 className="text-center">Blog</h1> */}

            {  blogPosts.map( (post, index) => (
                <BlogCard 
                    key={index}
                    mdPath={post.mdPath}
                    slug={post.slug}
                />
            ))}
        </div>
    );
}

export default BlogPage;

