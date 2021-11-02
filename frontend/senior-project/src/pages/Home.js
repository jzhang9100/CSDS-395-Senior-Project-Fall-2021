import React from "react";
import { Card, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../styles/Home.css";
import Blurb1 from "../images/blurb-rocket.png";
import Blurb2 from "../images/blurb-connect.jpg";
import HomeGraph from "../images/home-graph.png";
import Testimonial1 from "../images/testimonial-1.png";
import Testimonial2 from "../images/testimonial-2.png";
import Testimonial3 from "../images/testimonial-3.png";

export default function Home() {
  return (
    <div className="home-body text-center col-md-12">
      {/* Section with blurbs */}
      <div className="d-flex mx-auto w-75">
        <Card className="blurb-card border-0 bg-transparent mx-auto">
          <Card.Body className="streads-blurb d-flex p-0 m-0">
            <img className="blurb-img w-50 h-100" src={Blurb1} alt="Blurb 1 Photograph" />
            <Card.Text className="h-100 my-auto mt-3 mx-3">
              <h5>STREADS TO THE MOON</h5>
              <p>Streads keeps you updated with the latest news on stocks as well as any change in the market</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="blurb-card border-0 bg-transparent mx-auto">
          <Card.Body className="streads-blurb d-flex p-0 m-0">
            <img className="blurb-img w-50 h-100" src={Blurb2} alt="Blurb 2 Photograph" />
            <Card.Text className="h-100 my-auto mt-4 mx-3">
              <h5>DON'T BE A DOWNER</h5>
              <p>Connect with friends and share news to stay invested across the market</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      {/* Section with Home Page Graph */}
      <div>
        <img className="w-50" src={HomeGraph} alt="Home Page Graph" />
      </div>
      <hr />

      {/* Section with the "Interested?" button */}
      <div className="d-flex mx-auto w-50">
        <div className="d-flex mx-auto">
          <h3 className="display-6">Interested?</h3>
          <LinkContainer to="/signup" className="my-2 ms-4 shadow">
            <Nav.Link className="get-started-button">
              <p className="get-started-text">Get Started</p>
            </Nav.Link>
          </LinkContainer>
        </div>
      </div>
      <hr />

      {/* Section with Testimonials */}
      <div className="home-testimonials d-flex mx-auto w-100">
        <Card className="testimonial-card my-auto mx-auto h-75 w-25 shadow-lg">
          <Card.Body>
            <img className="testimonial-img h-50 w-50" src={Testimonial1} alt="Testimonial 1 Photograph" />
            <Card.Text className="h-100 my-auto mt-3 mx-3">
              <p>"Streads is great, I use it every morning to stay up to date on my investments."</p>
              <h4>Jeff L</h4>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="testimonial-card my-auto mx-auto h-75 w-25 shadow-lg">
          <Card.Body>
            <img className="testimonial-img h-50 w-50" src={Testimonial2} alt="Testimonial 2 Photograph" />
            <Card.Text className="h-100 my-auto mt-3 mx-3">
              <p>"It's hard for my friends and I to learn more about our investments without Streads."</p>
              <h4>Marissa Q</h4>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="testimonial-card my-auto mx-auto h-75 w-25 shadow-lg">
          <Card.Body>
            <img className="testimonial-img h-50 w-50" src={Testimonial3} alt="Testimonial 3 Photograph" />
            <Card.Text className="h-100 my-auto mt-3 mx-3">
              <p>"With Streads, I can learn more about stocks I don't have."</p>
              <br />
              <h4>Kevin N</h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
