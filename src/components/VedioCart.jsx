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

function convertSecondsToTime(seconds) {
  // Calculate hours, minutes, and remaining seconds
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;

  // Add leading zeros if necessary
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  remainingSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  // Construct the HH:MM:SS format
  var timeFormat = hours + ":" + minutes + ":" + remainingSeconds;

  return timeFormat;
}

const VedioCart = ({ video }) => {
  return (
    <Link to={`/play/${video.video.videoId}`}>
      <div className="flex flex-col items-center gap-2 h-fit">
        <div className="relative">
          <img
            className=" rounded-[20px] h-[220px] object-cover"
            src={video?.video?.thumbnails?.[1]?.url}
            alt="photo"
          />

          <div className="p-1 text-[13px] bg-black absolute right-2 bottom-3 text-white rounded-lg">
            {convertSecondsToTime(video?.video?.lengthSeconds)}
          </div>
        </div>
        <div className="flex justify-center  gap-3 w-full">
          <div className="w-[10%]">
            <img
              className="h-[40px] w-[40px] object-cover rounded-full"
              src={video?.video?.thumbnails?.[0]?.url}
              alt=""
            />
          </div>

          <div className="w-[80%]">
            <p className=" min-h-[20px] max-h-[50px] flex line-clamp-2 overflow-hidden text-ellipsis font-bold text-1xl">
              {video?.video?.title}
            </p>
            <p className="text-gray-500">{video?.video?.author?.title}</p>
            <div className="flex gap-2 text-gray-500">
              <span>{formatNumber(video?.video?.stats?.views)} views</span>
              <span>.</span>
              <span>{video?.video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VedioCart;

VedioCart.propTypes = {
  video: PropTypes.object,
};
