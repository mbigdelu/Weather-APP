import React, { Component } from "react";
import { getCities } from "../Service/favoriteCities";

class FavoriteCities extends Component {
  cities = getCities();

  render() {
    return (
      <div className="FC-box">
        <h1>Favorite Cities</h1>
        <table className="FC-table">
          <tbody>
            {this.cities.map((item) => (
              <tr key={item}>
                <td className="FC-td">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FavoriteCities;
