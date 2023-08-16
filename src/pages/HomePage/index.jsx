import About from "../../components/About";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/Product";

function HomePage() {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Navbar />
      <Carousel />
      <ProductList />
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;
