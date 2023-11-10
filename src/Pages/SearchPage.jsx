import { useParams } from "react-router-dom";
import SearchVedioCart from "../components/SearchVedioCart";
import SideMenu from "../components/SideMenu";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { search } from "../searchEngine/search";

const SearchPage = () => {
  const { query } = useParams();

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    search("search", query)
      .then((data) => {
        console.log(data.contents);
        setSearchData(data.contents);
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <Layout>
      <div className=" flex w-full h-[calc(100vh-65px)]">
        <SideMenu />
        <div className="w-full md:w-[95%] h-full overflow-y-auto p-4 pl-4">
          {searchData.map((data) => (
            <SearchVedioCart key={data?.video?.videoId} video={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
