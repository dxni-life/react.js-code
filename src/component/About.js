import { Link } from 'react-router-dom';
import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <div className="about-container">
        <h1>About Us</h1>
        <p>Hey there, welcome to LeafyLux! Imagine us as your friendly neighborhood spot where all plant lovers, from the seasoned green thumbs to those just peeking into the plant world, come together. Picture this: in the midst of our busy lives, we discovered a simple truth: plants are more than just decor. They're like quiet friends, offering a slice of peace and a sprinkle of happiness. That little spark ignited a journey of exploration and bonding with nature, and voila, LeafyLux sprang to life! Now, we're a buzzing online community where unraveling the secrets of plant care is all about fun and simplicity.</p>

<p>Here's what we believe: caring for plants is a chat with nature, a step toward personal well-being, and a stride towards living more sustainably. We've poured our hearts into creating a space that's your go-to guide for everything indoor gardening. Whether it's the soft rustle of the timidest ferns or the proud stance of the sturdiest succulents, we're here to guide you through the whole gamut of plant parenthood. Every plant story we share is packed with tips, tricks, and heartfelt advice to help you and your leafy friends thrive.</p>

<p>So, are you ready to turn your space into a vibrant green haven, one plant at a time? Join us in this green adventure and rediscover the simple joy of connecting with nature. Your leafy sanctuary awaits!</p>


      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} LeafyLux - All rights reserved.</p>
      </footer>
    </>
  );
}

export default About;
