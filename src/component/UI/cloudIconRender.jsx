import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiCloudyGusts,
  WiRainMix,
  WiRain,
  WiShowers,
  WiSnow,
  WiDaySunny,
} from "react-icons/wi";

const size = 150;
let icon = null;

const handleIcon = (data) => {
  const cloud = data.cloud;
  const rain = data.precip_mm;

  if (cloud >= 75) icon = <WiCloudy size={size} />;
  else if (cloud >= 50) icon = <WiCloud size={size} />;
  else if (cloud >= 25) icon = <WiDayCloudy size={size} />;
  else if (cloud < 25) icon = <WiDaySunny size={size} />;
  else icon = null;
};

// const handleText = (data) => {};

function CloudIcon(props) {
  handleIcon(props.data.current);
  return icon;
}

export default CloudIcon;
