import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import fetchData from "./component/helpers/fetchData";
import CurrentApp from "./pages/current";
import Forecast from "./pages/forecast";
import FavoriteCities from "./pages/favoriteCities";
import {
  searchCity,
  getCities,
  removeCity,
  addCity,
} from "./Service/favoriteCities";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const type = "forecast"; // Assuming type is constant

  useEffect(() => {
    async function fetchDataAndCities() {
      const newData = await fetchData(city, type);
      setData(newData);
      const newFavoriteCities = getCities();
      setFavoriteCities(newFavoriteCities);
      setIsLiked(likeCheck(newData));
    }

    fetchDataAndCities();
  }, [city, type]);

  const likeCheck = (data) => {
    let isLiked = false;
    if (data && data.location && searchCity(data.location.name.toLowerCase())) {
      isLiked = true;
    }
    return isLiked;
  };

  const onLike = () => {
    if (isLiked) {
      removeCity(data.location.name.toLowerCase());
    } else {
      addCity(data.location.name.toLowerCase());
    }
  };

  const handleSearchChange = (e) => {
    const input = e.currentTarget.value;
    const newCity = input.toLowerCase();
    setCity(newCity);
  };

  const handleFavoriteSelect = (selectedCity) => {
    console.log("handle favorite select called.", selectedCity);
    setCity(selectedCity);
  };

  return (
    <div className="box-app">
      <Routes>
        <Route
          path="/"
          element={
            <CurrentApp
              city={city}
              type={type}
              data={data}
              isLiked={isLiked}
              onLike={onLike}
              onChange={handleSearchChange}
            />
          }
        />
        <Route path="/forecast" element={<Forecast />} />
        <Route
          path="/favorite-cities"
          element={<FavoriteCities onFavoriteSelect={handleFavoriteSelect} />}
        />
      </Routes>
    </div>
  );
}

export default App;
