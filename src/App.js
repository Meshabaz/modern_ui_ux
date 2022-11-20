import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import {
  Footer,
  Blog,
  Feature,
  Header,
  Possibility,
  WhatGPT3,
} from "./container";
import { Article, Brand, Cta, ComFeature, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
