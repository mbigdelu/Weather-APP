import React, { Component } from "react";
import { getCities } from "../Service/favoriteCities";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

class FavoriteCities extends Component {
  cities = getCities();

  handleSelectCity = () => {};

  render() {
    return (
      <div className="FC-box">
        <div className="FC-header-box">
          <Link to="/" className="btn btn-round FC-back-btn">
            <AiOutlineArrowLeft size={30} />
          </Link>
          <h1 className="FC-header">Favorite Cities</h1>
          <div> </div>
        </div>
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
