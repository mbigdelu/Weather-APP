import React from "react";
import { Route, Routes, Link } from "react-router-dom";
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

class App extends React.Component {
  state = {
    data: {},
    city: "",
    favoriteCities: [],
    isLiked: false,
    type: "forecast",
  };

  async componentDidMount() {
    const { city, type } = this.state;
    const data = await fetchData(city, type);
    const favoriteCities = getCities();
    const isLiked = this.likeCheck();
    this.setState({ data, favoriteCities, isLiked });
    console.log(this.state.data);
  }

  likeCheck() {
    const data = this.state.data;
    let isLiked = false;
    if (data && data.location && searchCity(data.location.name.toLowerCase())) {
      isLiked = true;
    }
    return isLiked;
  }

  onLike() {
    if (this.state && this.state.isLiked) {
      removeCity(this.state.data.location.name.toLowerCase());
    } else {
      addCity(this.state.data.location.name.toLowerCase());
    }
    this.componentDidMount();
    console.log(getCities());
  }

  handleSearchChange = (e) => {
    const input = e.currentTarget.value;
    const city = input.toLowerCase();
    this.setState({ city });
    this.componentDidMount();
  };

  render() {
    const { city, type, data, isLiked } = this.state;
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
                onLike={() => this.onLike()}
                onChange={this.handleSearchChange}
              />
            }
          />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/favorite-cities" element={<FavoriteCities />} />
        </Routes>
      </div>
    );
  }
}

export default App;
