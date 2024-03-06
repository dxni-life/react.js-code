import React from 'react';
import { Link } from 'react-router-dom';
import PlantImage from './assets/home.jpg'; 
import './Home.css';
function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to LeafyLux</h1>
      <p>
        Discover the joy of nurturing houseplants with our comprehensive guide. <br></br>
        LeafyLux is dedicated to helping plant enthusiasts of all levels 
        explore the wonderful world of indoor gardening. <br></br>
        From succulents to ferns, 
        we cover a wide variety of plants and provide essential tips for their care.
      </p>
      <p>
        Whether you're a seasoned green thumb or a beginner eager to cultivate your 
        first plant, our platform offers a wealth of resources to support your journey.<br></br>
        Learn about proper watering techniques, optimal light conditions, pest control,
        and more.<br></br> Our goal is to empower you with the knowledge to create and maintain 
        a thriving indoor garden.
      </p>
      <p>
        Join our community of plant lovers and transform your living space into 
        a green sanctuary. Let's grow together!
      </p>
      <img src={PlantImage} alt="Houseplant" style={{ width: '672px', height: '437px' }} />
      <p>
        Looking for the right tools and supplies for your houseplants?<br></br>Visit our online store where you can find an array of high-quality plant care essentials, including various types of pots, specialized compost, and more. Our carefully curated selection ensures you have everything needed to nurture and enhance your indoor garden.
      </p>
      <p>
        And if you're unsure about the type of plant you have, our AI chatbot is here to assist! Just upload a picture of your plant, and our intelligent assistant will help identify it for you, offering tailored care advice to keep your green friend thriving.
      </p>

      <p>
        Embark on your plant care adventure with us. Dive into our extensive collection
        of articles, how-to guides, and expert tips. Join our community today to share
        your plant care experiences and learn from fellow enthusiasts. Together, let's
        make every home a greener, more life-filled space!
      </p>
    
      <footer className="footer">
        <p>© {new Date().getFullYear()} LeafyLux - All rights reserved.</p>
      </footer>
    
    </div>
  );
}

export default Home;
