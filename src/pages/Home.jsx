// import { useSelector } from "react-redux";
// import BannerHome from "../componenets/BannerHome";
// import HorizontalScrollCard from "../componenets/HorizontalScrollCard";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import useFetch from "../hooks/useFetsch";

// const Home = () => {
//   const trendingData = useSelector((state) => state.movieo.bannerData);
//   // const {data:nowPlayingData} = useFetch('/movie/now_playing')
//   const [nowPlayingData, setNowPlayingData] = useState([])



//   const fetchNowPlayingData = async()=>{
//     try{
//       const response = await axios.get("/movie/now_playing", {
//         params: {
//           api_key: "d15eeb12eda8bb49e575e458d6307748", 
//         },
//       })
//       setNowPlayingData(response.data.results)
//       console.log(response.data)
//     }catch(error){
//       console.log(error)
//     }
//   }
//   useEffect(()=>{
//     fetchNowPlayingData()
//   },[])

//   return (
//     <div>
//       <BannerHome />
//       <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true}/>
//       <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"}/>
     
//     </div>
//   );
// };

// export default Home;







import { useSelector } from "react-redux";
import BannerHome from "../componenets/BannerHome";
import HorizontalScrollCard from "../componenets/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieo.bannerData);
  const { data: nowPlayingData} = useFetch("/movie/now_playing");
  const {data:topRatedData} = useFetch('/movie/top_rated')
    const {data:popularTvShowData} = useFetch('/tv/popular')
    const {data:onAirShowData} = useFetch('/tv/on_the_air')

  return (
    <div>
     
      <BannerHome />
      <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true} />

      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"Movie"}/>
      <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"Movie"}/>
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Show"} media_type={"TV"}/>
      <HorizontalScrollCard data={onAirShowData} heading={"TV"}/>
    </div>
  );
};

export default Home;
