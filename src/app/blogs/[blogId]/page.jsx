import React from 'react';

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development",
    author: "Azaan Sarkaar",
    date: "September 5, 2026",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "Web development is continuously evolving with new tools, frameworks, and technologies. Learn about the trends shaping the future of modern web applications."
  },
  {
    id: 2,
    title: "Getting Started with React",
    author: "John Doe",
    date: "September 3, 2026",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    description:
      "React makes it easier to build interactive user interfaces. Discover the basics of components, props, state, and hooks to start building modern applications."
  },
  {
    id: 3,
    title: "Why JavaScript Is Still Important",
    author: "Sarah Khan",
    date: "August 29, 2026",
    category: "JavaScript",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    description:
      "JavaScript remains one of the most popular programming languages. Explore why it continues to play an important role in frontend and backend development."
  },
  {
    id: 4,
    title: "Building Better User Experiences",
    author: "Michael Smith",
    date: "August 25, 2026",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    description:
      "A great user experience can make an application easier and more enjoyable to use. Learn some important principles for designing clean and user-friendly interfaces."
  }
];

const BlogDetails = async ({params}) => {
    const {blogId} = await params;
    const blog =  blogs.find(blog => blog.id === parseInt(blogId));
    console.log('Show Me params', blogId)
    return (
        <div>
            <h1 className='text-3xl text-green-600'>Blog Details Page For Tabu</h1>
            {
                blog && <div>
                    <h2 className='text-red-600 text-3xl'>{blog.title}</h2>
                        <p className='text-green-400 text-xl'>{blog.description}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetails;