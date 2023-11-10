import Layout from "./Layout";

import VedioCart from "../components/VedioCart";
import { useEffect, useState } from "react";
import { search } from "../searchEngine/search";
import SideMenu from "../components/SideMenu";

const MainPage = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    search("home")
      .then((data) => {
        console.log(data?.contents);
        setdata(data?.contents);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <div className=" flex w-full h-[calc(100vh-65px)]">
        {/* sideMenu */}
        <SideMenu />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 w-full md:w-[95%] h-full overflow-y-auto p-4">
          {/* vedioes */}
          {data?.map((vedio) => (
            <VedioCart key={vedio.video.videoId} video={vedio} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
