import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intro";
import Project from "./Project";
import { Container } from "react-bootstrap";

export default function App() {
  return (

    <div className="px-1 px-sm-3 mb-2">

      <Header />

      <Container>

        <Intro />

        <Project />

      </Container>

      <Footer />

    </div>

  );
}