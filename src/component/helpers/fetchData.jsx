import axios from "axios";

const fetchData = async (location, type) => {
  try {
    const URL = `http://api.weatherapi.com/v1/${type}.json?key=bee781d70f734c69bfa12520220902&q=${location}&aqi=no`;

    const response = await axios.get(URL);

    return response.data;
  } catch (e) {
    // console.log("there is no data for this name");
  }
};

export default fetchData;
