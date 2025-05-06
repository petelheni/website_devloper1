import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Newsletter from '../components/Newsletter';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Banner />
            <section className="product-section">
                <h2 style={{ textAlign: 'center', margin: '40px 0' }}>Featured Products</h2>
                <ProductGrid />
            </section>
            <Newsletter />
        </div>
    );
};

export default Home;
