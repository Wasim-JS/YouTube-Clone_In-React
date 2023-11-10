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

const SuggVedioCart = ({ video }) => {
  let views = formatNumber(video?.video?.stats?.views);
  return (
    <Link to={`/play/${video?.video?.videoId}`}>
      <div className="  py-3 flex  md:flex-row gap-1 md:gap-3 justify-between w-full md:w-[100%] h-auto md:h-[130px] rounded-lg overflow-hidden">
        <div className="w-[50%]">
          <img
            src={video?.video?.thumbnails[1]?.url}
            alt=""
            className="rounded-[20px] w-[100%] h-[100%] object-contain"
          />
        </div>

        <div className="w-[100%] md:w-[50%] flex flex-col gap-1 md:gap-0">
          <div className="w-full text-[12px] font-bold md:text-1xl capitalize line-clamp-2 text-ellipsis">
            {video?.video?.title}
          </div>
          <div className="text-[10px] text-gray-700 font-bold">
            {video?.video?.author?.title}
          </div>
          <div className="overflow-hidden text-ellipsis flex gap-1 font-normal text-[12px] text-gray-600 items-center">
            <span className="whitespace-nowrap">{views} views</span>
            <small>.</small>
            <span className="whitespace-nowrap text-ellipsis overflow-hidden">
              {video?.video?.publishedTimeText}
            </span>
          </div>
          <div className="flex gap-2 items-center"></div>
        </div>
      </div>
    </Link>
  );
};

export default SuggVedioCart;

SuggVedioCart.propTypes = {
  video: PropTypes.object,
};
