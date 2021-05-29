import axios from "axios";
export const fetchGet = async () => {
  try {
    const { data } = await axios("https://api.covid19api.com/summary");
    var dataItem = {
      date: data.Date,
      global: data.Global,
    };
    return dataItem;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGetDaily = async () => {
  try {
    const { data } = await axios("https://api.covid19api.com/summary");
    var dataItem = {
      country: data.Countries,
    };
    return dataItem.country;
  } catch (error) {}
};

export const fetchGetCountry = async () => {
  try {
    const { data } = await axios("https://api.covid19api.com/countries");
    return data;
  } catch (error) {}
};

export const fetchGetCountryOption = async (url) => {
  try {
    const { data } = await axios(
      "https://api.covid19api.com/live/country/" + url
    );
    return data;
  } catch (error) {}
};
