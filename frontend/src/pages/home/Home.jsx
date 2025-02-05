import Header from "../../components/Header"
import Footer from "../../components/Footer"

import Slider from "../../components/Slider";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <div className="base-300 px-6 py-3 vertical-scrollbar rounded-scrollbar ">
      <Header />
     
      <Slider />
      <Hero/>



      <div className="max-w-screen min-h-screen">ghelo</div>
      <Footer />
    </div>
  );
}

export default Home