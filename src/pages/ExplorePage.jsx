import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../componenets/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  console.log("params", params.explore);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          api_key: "d15eeb12eda8bb49e575e458d6307748",
          page: pageNo,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
      setTotalPageNo(response.data.total_pages);
      console.log("response", response.data || response.data.resuts);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(()=>{
    setPageNo(1)
    setData([])
    fetchData()
  },[ params.explore])


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (<div className="pt-16">
    <div className="container mx-auto">
      <h3 className="capitalize text-lg font-semibold"> popular {params.explore} Show</h3>
    
      <div className="grid lg:grid-cols-5  md:grid-cols-3 sm:grid-cols-1[repeat(auto-fit,230px)] justify-center gap-6">
        {
          data.map((exploreData,index)=>{
            return( <Card data={exploreData} key={exploreData.id} media_type={params.explore}/>)
          })
        }
      </div>
    </div>
  </div>)
};

export default ExplorePage;
