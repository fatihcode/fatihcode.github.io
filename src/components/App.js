import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intro";
import Project from "./Project";

export default function App() {
  return (
    <>

      <Header />
      <main className="container px-1 px-sm-3">
        <Intro />
        <Project />
      </main>
      <Footer />

    </>
  );
}