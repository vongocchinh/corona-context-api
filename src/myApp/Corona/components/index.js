/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Header } from "./header/Header";
import { Cards } from "./card/Card";
import { Chart } from "./chart/Chart";
import * as types from "./../constant/corona";
import { CoronaContext } from "./../context/CoronaContext";
import {
  fetchGet,
  fetchGetCountryOption,
  fetchGetDaily,
} from "./../../Api/index";
import { fetchGetCountry } from "./../../Api/index";

export const IndexCorona = () => {
  // const [optionCounty, setOptionCounty] = useState([]);
  const [option, setOption] = useState("");
  const {
    state: {
      store: { item },
      stores: { dataOption },
      country,
      detail
    },
    dispatch,
  } = useContext(CoronaContext);  
  useEffect(async () => {
    const data = await fetchGet();

    dispatch({
      type: types.GET_CORONA_ALL,
      payload: data,
    });
  }, [1]);
  useEffect(async () => {
    const data = await fetchGetDaily();
    dispatch({
      type: types.GET_CORONA_DETAIL_ALL,
      payload: data,
    });
  }, [1]);
  useEffect(async () => {
    const data = await fetchGetCountry();

    dispatch({
      type: types.GET_CORONA_COUNTRY,
      payload: data,
    });
  }, [1]);
  useEffect(async () => {
    if (option) {
      const data = await fetchGetCountryOption(option);
      dispatch({
        type: types.GET_CORONA_ALL_OPTION,
        payload: data,
      });
    }
  }, [option]);

  const setOptions = (e) => {
    setOption(e);
  };

  const getAll=async()=>{
    const data = await fetchGetDaily();
    dispatch({
      type: types.GET_CORONA_DETAIL_ALL,
      payload: data,
    });
  }
  return (
    <>
      <Header />
      <Cards item={item} />
      <Chart
        optionCounty={dataOption}
        setOption={setOptions}
        country={country}
        dailyData={detail}
        getAll={getAll}
      />
    </>
  );
};

export default IndexCorona;
