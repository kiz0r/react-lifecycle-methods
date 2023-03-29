import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';

function Temperature(props) {
  const { temperature } = props;

  return temperature > 0 ? (
    <FaTemperatureHigh className="weatherIcon" />
  ) : (
    <FaTemperatureLow className="weatherIcon" />
  );
}

export default Temperature;
