import { Brand, Cta, Navbar } from './components';
import {
  WhatGPT3,
  Possibility,
  Header,
  Features,
  Footer,
  Blog,
} from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className=" gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
