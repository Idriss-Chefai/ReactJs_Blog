import { useState } from 'react';

const Home = () => {
  const [blogs , setBlogs] = useState([
    {title : "My new website" , body : "lorem Ipsum is Lorem Ipsum", author : "Draysis", id : 1},
    {title : "Welcome party" , body : "lorem Ipsum is Lorem Ipsum", author : "Draysis", id : 2},
    {title : "Web dev top tips" , body : "lorem Ipsum is Lorem Ipsum", author : "Draysis", id : 3},
  ]);


    return ( 
       <div className="home">
        <h2>Homepage</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
       </div> 
     );
}
 
export default Home;
