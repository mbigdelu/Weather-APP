import React, { Component } from "react";
import { getCities } from "../Service/favoriteCities";
import { NavLink } from "react-router-dom";

class FavoriteCities extends Component {
  cities = getCities();

  handleSelectCity = () => {};

  render() {
    return (
      <div className="FC-box">
        <h1 className="FC-header">Favorite Cities</h1>
        <div className="FC-table-box">
          <table className="FC-table">
            <tbody>
              {this.cities.map((item) => (
                <tr className="FC-tr">
                  <td className="FC-td">
                    <NavLink
                      to="/"
                      onClick={() => this.props.onFavoriteSelect(item)}
                      key={item}
                      className="FC-link"
                    >
                      {item}
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FavoriteCities;
