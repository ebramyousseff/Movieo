import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector((state) => state.movieo.imageURL);

  const mediaType = data.media_type ?? media_type
  return (
    <Link
      to={"/" + media_type + "/" + data.id}
      className="w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-110 transition-all"
    >
      {
        data?.poster_path ?
        (
          <img src={imageURL + data?.poster_path} alt="images" /> ):(<div className="bg rotate-45 text-center w-full mt-14 text-white bg-red-500 "> <h3>No Image Found</h3></div>)

        
      }
      
      <div className="absolute top-0">
        {trending && (
          <div className="py-1 px-4 backdrop-blur-3x1 rounded-r-full bg-black/60 overflow-hidden">
            #{index} Trending
          </div>
        )}
      </div>
      <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/10 p-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h2>
        <div className="text-sm text-neutral-400 flex justify-between items-center">
          <p>{moment(data.release_date).format("MMM Do YYYY")}</p>
          <p className="bg-black px-1 rounded-full text-xs text-white">
            Rating : {Number(data.vote_average)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
