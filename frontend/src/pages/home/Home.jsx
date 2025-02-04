import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <div className="base-300 px-6 py-3 ">
      <Header />
      <SearchBar/>
      <div className="max-w-screen min-h-screen">
        ghelo
      </div>
      <Footer />
    </div>
  );
}

export default Home