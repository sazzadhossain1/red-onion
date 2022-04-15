import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  
  return (
    <div className="main-container">
      <div className="home-container">
        <h1 className="banner-text">Best food waiting for your belly</h1>

        <div>
          <InputGroup className="input-filed mb-3">
            <FormControl
              placeholder="Search food itmes"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="" id="button-addon2">
              Button
            </Button>
          </InputGroup>

         
        </div>
      </div>
      
      <Link to="breakfast">Breakfast</Link>
      <Link to="lunch">Lunch</Link>
      <Link to="dinner">Dinner</Link>

      

    </div>
  );
};

export default Home;
