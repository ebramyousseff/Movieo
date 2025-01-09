import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../componenets/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const query = location?.search?.slice(3)

  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          api_key: "d15eeb12eda8bb49e575e458d6307748",
          query: location?.search?.slice(3),
          page: page,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    if(query){
      setPage(1);
    setData([]);
    fetchData();
    }
    
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if(query){
      fetchData();
    }
    
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  console.log("location", location.search.slice(5));
  return (
    <div className="pt-16">
      <div className="lg:hidden my-2  mx-1 sticky top-[72px] z-30">
        <input
          type="text"
          placeholder="search here..."
          value={query?.split("%20")?.join(" ")}
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          className="px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900"
        />
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl mt-1 font-semibold my-3">
          Search Results
        </h3>
        <div className="grid lg:grid-cols-5  md:grid-cols-3 sm:grid-cols-1[repeat(auto-fit, 230px)] gap-6 justify-center">
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "search"}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
