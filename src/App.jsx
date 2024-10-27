import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData } from "./store/tmdbSlice";
import { setImageURL } from "./store/tmdbSlice";

function App() {
  const dispach = useDispatch();
  const fetchTrendindgData = async () => {
    try {
      const response = await axios.get("/trending/all/day");

      dispach(setBannerData());

      dispach(setBannerData(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };
  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispach(setImageURL(response.data.images.secure_base_url + "original"));
      // console.log("confing data");
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchTrendindgData();
    fetchConfiguration();
  }, []);
  return (
    <main className="pb-14 lg:pb-0 ">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
