import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileNavigation from "./MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "../store/movioSlice";

const Layout = () => {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("trending/all/week", {
        params: {
          api_key: "d15eeb12eda8bb49e575e458d6307748",
        },
      });
      dispatch(setBannerData(response.data.results));
    } catch (error) {
      return error;
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration", {
        params: {
          api_key: "d15eeb12eda8bb49e575e458d6307748",
        },
      });
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);

  return (
    <div className="pb-14 lg:pb-0">
      <Header />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </div>
  );
};

export default Layout;
