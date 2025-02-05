import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SearchBar from "../../components/SearchBar";
import Slider from "../../components/Slider";

const Home = () => {
  return (
    <div className="base-300 px-6 py-3 vertical-scrollbar rounded-scrollbar ">
      <Header />
      <div className="mx-auto max-w-full">
        <SearchBar />
      </div>
      <Slider />



      <div className="max-w-screen min-h-screen">ghelo</div>
      <Footer />
    </div>
  );
}

export default Home