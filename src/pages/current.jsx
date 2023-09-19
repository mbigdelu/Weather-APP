import React, { Component } from "react";
import CloudIcon from "../component/UI/cloudIconRender";
import { Link } from "react-router-dom";
import { WiDegrees } from "react-icons/wi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsList } from "react-icons/bs";

class CurrentApp extends Component {
  state = {
    city: "",
    data: {},
    favoriteCities: [],
  };

  FavoriteButton(liked) {
    return (
      <button className="btn btn-round" onClick={this.props.onLike}>
        {liked ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
      </button>
    );
  }

  ListButton() {
    return (
      <button className="btn btn-round">
        <BsList size={30} />
      </button>
    );
  }

  ForecastButton() {
    return <button className="btn btn-wide">Next 10 days forecast</button>;
  }

  render() {
    const data = this.props.data;
    const isLiked = this.props.isLiked;
    return (
      <div>
        <div className="header">
          <div className="favorite-btn">{this.FavoriteButton(isLiked)}</div>
          <div className="title">
            <h1>Weather</h1>
          </div>
          <Link to="favorite-cities" className="list-btn">
            {this.ListButton()}
          </Link>
        </div>
        <input
          className="input"
          onChange={this.props.onChange}
          value={this.props.city}
        />
        {data && data.current && (
          <div className="box">
            <div className="current-box">
              <span className="temp">
                {Math.floor(data.current.feelslike_c)}
                <span className="degree-io">
                  <WiDegrees size={50} />
                </span>
                <span className="degree-c">C</span>
              </span>
              <span className="cloud">
                <CloudIcon data={data} />
              </span>
              <span className="current-text">
                {data.current.condition.text}
              </span>
              {/* <div>
                <div class="toggle-button">
                  <input
                    type="checkbox"
                    name="toggle-button"
                    class="toggle-in"
                    id="degree-toggle"
                    tabindex="0"
                    checked
                  />
                  <label class="toggle-label" for="degree-toggle"></label>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CurrentApp;
