import axios from "axios";

export async function search(query, searchAbout = "") {
  document.getElementById("loadBar").style.width = "20%";
  let param = { hl: "en", gl: "US" };
  if (query === "video/details" || query === "video/related-contents") {
    param.id = searchAbout;
  } else if (searchAbout) {
    param.q = searchAbout;
  }

  console.log("quert is ", query);
  console.log("about to seravh is ", searchAbout);
  const options = {
    method: "GET",
    url: `https://youtube138.p.rapidapi.com/${query}/`,
    params: param,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_HOST,
    },
  };

  try {
    document.getElementById("loadBar").style.width = "80%";

    const response = await axios.request(options);
    document.getElementById("loadBar").style.width = "100%";
    setTimeout(() => {
      document.getElementById("loadBar").style.opacity = "0";
      document.getElementById("loadBar").style.width = "0%";
      document.getElementById("loadBar").style.opacity = "1";
    }, 0);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
