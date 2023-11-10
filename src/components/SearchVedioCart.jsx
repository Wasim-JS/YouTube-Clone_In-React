import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function formatNumber(num) {
  num = String(num);
  if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  } else {
    return num.toString();
  }
}
const SearchVedioCart = ({ video }) => {
  return (
    <Link to={`/play/${video?.video?.videoId}`}>
      <div className=" py-3 flex flex-col md:flex-row gap-1 md:gap-3 justify-between w-full md:w-[95%] h-auto md:h-[250px] rounded-lg overflow-hidden">
        <div className="w-[100%] md:w-[40%]">
          <img
            src={
              video?.video?.thumbnails?.[0]?.url ||
              video?.video?.thumbnails?.[1]?.url
            }
            alt=""
            className="rounded-[20px] w-[100%] h-[100%] object-cover"
          />
        </div>

        <div className="w-[100%] md:w-[60%] flex flex-col gap-1 md:gap-3">
          <div className="w-full text-[12px] font-bold md:text-1xl capitalize">
            {video?.video?.title}
            <div className="flex gap-1  text-gray-600 font-bold">
              <span>{formatNumber(video?.video?.stats?.views)}</span>
              <small>.</small>
              <span>{video?.video?.publishedTimeText}</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <img
              src={video?.video?.thumbnails?.[0]?.url}
              alt=""
              className="h-[20px] w-[20px] md:h-[30px] md:w-[30px] rounded-full object-cover"
            />
            <p>{video?.video?.author?.title}</p>
          </div>
          <div>
            <p className="-mt-3 hidden md:block w-[90%] overflow-hidden whitespace-nowrap text-ellipsis">
              {video?.video?.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchVedioCart;

SearchVedioCart.propTypes = {
  video: PropTypes.object,
};
