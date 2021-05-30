import axios from "axios";
export const fetchGet = async () => {
  try {
    const { data } = await axios("https://corona.lmao.ninja/v2/all");
    // console.log(data);
    var dataItem = {
      date: data.updated,
      cases: data.cases,
      recovered: data.recovered,
      deaths: data.deaths,
      affectedCountries: data.affectedCountries,
      population: data.population,
      casesPerOneMillion: data.casesPerOneMillion,
      deathsPerOneMillion: data.deathsPerOneMillion,
      oneCasePerPeople: data.oneCasePerPeople,
      oneDeathPerPeople: data.oneDeathPerPeople,
      oneTestPerPeople: data.oneTestPerPeople,
      recoveredPerOneMillion: data.recoveredPerOneMillion,
      tests: data.tests,
      testsPerOneMillion: data.testsPerOneMillion,
      todayCases: data.todayCases,
      todayDeaths: data.todayDeaths,
      todayRecovered: data.todayRecovered,
    };
    return data;
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

export const fetchAPiVN = async () => {
  try {
    const { data } = await axios("https://corona.lmao.ninja/v2/countries/vn");
    console.log(data);
    return data;
  } catch (error) {}
};


export const fetchArrVN = async () => {
  try {
    const { data } = await axios("https://api.covid19api.com/live/country/vietnam");
    console.log(data);
    return data;
  } catch (error) {}
};
