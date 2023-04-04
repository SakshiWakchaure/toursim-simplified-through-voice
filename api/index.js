import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "18.8894",
          tr_latitude: tr_lat ? tr_lat : "19.3274",
          bl_longitude: bl_lng ? bl_lng : "72.7692",
          tr_longitude: tr_lng ? tr_lng : "73.1165",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key": "f410d8d22bmsh143fb06809e8aa1p186f60jsnc8899cd3f1aa",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
