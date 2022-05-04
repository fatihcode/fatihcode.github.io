import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intro";
import Project from "./Project";
import { Container } from "react-bootstrap";

export default function App() {
  return (

    <div>

      <Header />

      <Container className="px-1 px-sm-3">

        <Intro />

        <Project />

      </Container>

      <Footer />

    </div>

  );
}