import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import useFetch from '../hooks/useFetch'
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../componenets/Divider";
import HorizontalScrollCard from '../componenets/HorizontalScrollCard'

// const DetailsPage = () => {
//   const params = useParams();
//   const imageURL = useSelector((state) => state.movieo.imageURL);
//   const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
//   const { data: castData } = useFetchDetails(
//     `/${params?.explore}/${params?.id}/credits`
//   );

//   console.log("data", data); // لييه هنا مشجبش الصورة من ال castData مش من ال data??
//   console.log("castData", castData);

//   const duration = (data?.runtime / 60)?.toFixed(1).split(".");
//   const writer = castData?.crew?.filter(el => el?.job === "Writer")?.map(el => el?.name)?.join(", ")
//   return (
//     <div>
//       <div className="w-full h-[280px] relative hidden lg:block">
//         <div className="w-full h-full">
//           <img
//             src={imageURL + data?.backdrop_path}
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
//       </div>

//       <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 ">
//         <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
//           <img
//             src={imageURL + data?.poster_path || data?.profile_path}
//             className="h-80 w-60 object-cover rounded"
//           />
//         </div>
//         <div>
//           <h2 className="text-lg font-bold">{data?.title || data?.name}</h2>
//           <p className="text-neutral-400">{data?.tagline}</p>
//           <Divider />
//           <div className="flex items-center gap-3">
//             <p>Rating : {Number(data?.vote_average).toFixed(1)} +</p>
//             <span>|</span>
//             <p>View : {Number(data?.vote_count)}</p>
//             <span>|</span>
//             <p>
//               Duration : {duration[0]}h {duration[1]}m
//             </p>
//           </div>
//           <Divider />
//           <div>
//             <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
//             <p>{data?.overview}</p>
//             <Divider/>
//             <div className="flex items-center gap-3 my-3 text-center">
//               <p>Status : {data?.status}</p>
//               <span>|</span>
//               <p>
//                 Release Date :{" "}
//                 {moment(data?.release_date).format("MMMM Do YYYY")}
//               </p>
//               <span>|</span>
//               <p>Revenue : {Number(data?.revenue)}</p>
//             </div>
//             <Divider/>
//           </div>
//           <div>
//                     <p><span className='text-white'>Director</span> : {castData?.crew[0]?.name}</p>

//                     <Divider/>

//                     <p>
//                       <span className='text-white'>Writer : {writer}</span>
//                     </p>
//                 </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailsPage;

const DetailsPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieo.imageURL);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data:castData} = useFetchDetails(`/${params?.explore}/${params?.id}/credits`);
  const { data:similarData} = useFetch(`/${params?.explore}/${params?.id}/similar`);// اشمعني similar 
  const { data:recommendationData} = useFetch(`/${params?.explore}/${params?.id}/recommendations`);// اشمعني similar 

  console.log("data", data);
  console.log("castData", castData);

  const duration = data?.runtime
    ? (data.runtime / 60)?.toFixed(1).split(".")
    : [0, 0];

    const writer = castData?.crew?.filter(el => el?.department === "Writing" )?.map(el => el?.name)?.join(", ")



  const directorName =
    castData?.crew && castData.crew.length > 0 ? castData.crew[0]?.name : "N/A";
    console.log("directorName",directorName);
  return (
    <div>
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={data?.backdrop_path ? imageURL + data.backdrop_path : ""}
            alt="Backdrop"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 ">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img
            src={
              data?.poster_path || data?.profile_path
                ? imageURL + (data.poster_path || data.profile_path)
                : ""
            }
            alt="Poster"
            className="h-80 w-60 object-cover rounded"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">{data?.title || data?.name}</h2>
          <p className="text-neutral-400">{data?.tagline || "N/A"}</p>
          <Divider />
          <div className="flex items-center gap-3">
            <p>
              Rating :{" "}
              {data?.vote_average
                ? Number(data.vote_average).toFixed(1)
                : "N/A"}{" "}
              +
            </p>
            <span>|</span>
            <p>View : {data?.vote_count || "N/A"}</p>
            <span>|</span>
            <p>
              Duration : {duration[0]}h {duration[1]}m
            </p>
          </div>
          <Divider />
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
            <p>{data?.overview || "No overview available."}</p>
            <Divider />
            <div className="flex items-center gap-3 my-3 text-center">
              <p>Status : {data?.status || "N/A"}</p>
              <span>|</span>
              <p>
                Release Date :{" "}
                {data?.release_date
                  ? moment(data.release_date).format("MMMM Do YYYY")
                  : "N/A"}
              </p>
              <span>|</span>
              <p>Revenue : {data?.revenue ? Number(data.revenue) : "N/A"}</p>
            </div>
            <Divider />
          </div>
          <div>
            <p>
              <span className="text-white">Director</span> : {directorName}
            </p>

            <Divider />

            <p>
              <span className="text-white">Writers : {writer}</span>
            </p>
          </div>
          <Divider />
          <h2 className="font-bold text-lg">Cast :</h2>
          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4">
                      {/* grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4 */}
            {castData?.cast?.filter((el)=>el?.profile_path).map((starCast, index)=>{
              return (
                <div key={starCast?.id || index}>
                  <div>
                    <img src={imageURL + starCast?.profile_path} className="w-24 h-24 object-cover rounded-full" />
                  </div>
                  <p className="font-bold text-center text-sm text-neutral-400">{starCast?.name}</p>
                </div>
              )
            })}
          </div>
        </div> 
      </div>
      <div className="">
        <HorizontalScrollCard data={similarData} heading={"similar " + params?.explore} media_type={params?.explore}/>
        <HorizontalScrollCard data={recommendationData} heading={"Recommendation " + params?.explore} media_type={params?.explore}/>
      </div>

    </div>
  );
};

export default DetailsPage;




