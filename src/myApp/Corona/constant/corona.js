export const GET_CORONA_ALL="GET_CORONA_ALL";
export const GET_CORONA_ALL_OPTION="GET_CORONA_ALL_OPTION";
export const GET_CORONA_COUNTRY="GET_CORONA_COUNTRY";
export const GET_CORONA_DETAIL_ALL="GET_CORONA_DETAIL_ALL";
export const GET_CORONA_VN="GET_CORONA_VN";
export const GET_CORONA_ARR_VN="GET_CORONA_ARR_VN";


export const FORMAT_CURRENT=(price)=>{
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}