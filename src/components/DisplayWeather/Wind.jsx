// Біля швидкості вітру виводити стрілку замість напрямку вітру (315-45 - Пн, 45-135 - Сх, 135-225 - Пд, 225-315 - Зх). Стрілки можна знайти тут: https://react-icons.github.io/react-icons/search?q=arrow. Можна вказувати напрямок більш докладно, 8 напрямків.
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from 'react-icons/fa';

function Wind(props) {
  const { windDirection } = props;

  if (windDirection >= 45 && windDirection <= 135) {
    return <FaArrowRight className="weatherIcon" />;
  } else if (windDirection > 135 && windDirection <= 225) {
    return <FaArrowDown className="weatherIcon" />;
  } else if (windDirection > 225 && windDirection <= 315) {
    return <FaArrowLeft className="weatherIcon" />;
  } else {
    return <FaArrowUp className="weatherIcon" />;
  }
}

export default Wind;
