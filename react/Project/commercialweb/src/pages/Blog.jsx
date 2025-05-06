import React from 'react';
import './Blog.css'; // Optional: custom CSS for blog styling

const blogPosts = [
    {
        id: 1,
        title: '5 Summer Trends You Can’t Miss',
        date: 'May 1, 2025',
        excerpt: 'Stay on top of this season’s hottest styles with our curated summer guide.',
        image: '/assets/images/blog1.jpg',
    },
    {
        id: 2,
        title: 'Behind the Scenes: How We Choose Products',
        date: 'April 22, 2025',
        excerpt: 'Learn more about how we hand-pick premium items for our store.',
        image: '/assets/images/blog2.jpg',
    },
    {
        id: 3,
        title: 'Sustainable Fashion is the Future',
        date: 'April 10, 2025',
        excerpt: 'Explore how eco-friendly clothing is changing the game in modern fashion.',
        image: '/assets/images/blog3.jpg',
    },
];

const Blog = () => {
    return (
        <div className="blog-page" style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Latest Blog Posts</h2>
            <div className="blog-grid" style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-card" style={cardStyle}>
                        <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{post.title}</h3>
                            <p style={{ fontSize: '14px', color: '#777', marginBottom: '10px' }}>{post.date}</p>
                            <p style={{ fontSize: '15px', marginBottom: '15px' }}>{post.excerpt}</p>
                            <a href="#" className="btn" style={{ fontSize: '14px' }}>
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const cardStyle = {
    border: '1px solid #eee',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease',
};

export default Blog;
