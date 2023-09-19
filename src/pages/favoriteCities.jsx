import React, { Component } from "react";
import { getCities } from "../Service/favoriteCities";
import { NavLink } from "react-router-dom";

class FavoriteCities extends Component {
  cities = getCities();

  handleSelectCity = () => {};

  render() {
    return (
      <div className="FC-box">
        <h1>Favorite Cities</h1>
        <table className="FC-table">
          <tbody>
            {this.cities.map((item) => (
              <NavLink
                to="/"
                onClick={() => this.props.onFavoriteSelect(item)}
                key={item}
              >
                <tr>
                  <td className="FC-td">{item}</td>
                </tr>
              </NavLink>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FavoriteCities;
