import { useEffect, useState } from "react";
import SuggVedioCart from "../components/SuggVedioCart";
import Layout from "./Layout";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { search } from "../searchEngine/search";
import { HiOutlineHandThumbUp, HiOutlineHandThumbDown } from "react-icons/hi2";

const PlayPage = () => {
  const { id } = useParams();

  console.log("id is ", id);
  const [play, setPlay] = useState({});
  const [sugVedios, setSugVedios] = useState([]);

  useEffect(() => {
    search("video/details", id)
      .then((data) => {
        console.log("home data ", data);
        setPlay(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    search("video/related-contents", id)
      .then((data) => {
        console.log(data);
        setSugVedios(data?.contents);
        console.log("sugVedios are ", sugVedios);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log("play is ", play?.thumbnails?.[0]?.url);
  return (
    <Layout>
      <div className="w-full flex flex-col gap-3 md:flex-row lg:w-[80%]  mx-auto">
        <div className="w-[100%] md:w-[70%]">
          {/* play */}

          <div className=" mt-6 w-full h-[380px] border">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${play?.videoId}`}
              width={"100%"}
              height={"100%"}
              playing={true}
              controls={true}
            />
          </div>
          <div className="h-fit flex flex-col gap-4">
            <div className="p-2 max-h-[60px] overflow-hidden font-bold line-clamp-2 text-ellipsis">
              {play?.title}
            </div>

            <div>
              <div className="flex items-center">
                <img
                  src={play?.thumbnails?.[0]?.url}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-contain"
                />
                <div className="pl-3">
                  <p className="font-bold">{play?.author?.title}</p>
                  <p className="text-gray-700">
                    {play?.author?.stats?.subscribersText}
                  </p>
                </div>

                <div className="pl-11">
                  <button className="px-4 py-2 rounded-[20px] text-white bg-black ">
                    Subscribe
                  </button>
                  <button className="px-4 ml-6 py-3 rounded-[20px] text-black bg-slate-200 ">
                    {<HiOutlineHandThumbUp />}
                  </button>
                  <button className="px-4 ml-6 py-3 rounded-[20px] text-black bg-slate-200 ">
                    {<HiOutlineHandThumbDown />}
                  </button>
                </div>
              </div>

              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="mt-6 w-[100%] md:w-[35%] px-2 md:px-0 ">
          {/* suggetion */}
          {sugVedios.map((data) => (
            <SuggVedioCart key={data?.video?.videoId} video={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PlayPage;
