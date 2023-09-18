const fetchData = async (location, type) => {
  try {
    const URL = `http://api.weatherapi.com/v1/${type}.json?key=bee781d70f734c69bfa12520220902&q=${location}&aqi=no`;

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};

export default fetchData;
