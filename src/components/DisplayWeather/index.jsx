import { Component } from 'react';
import './DisplayWeather.css';
import Wind from './Wind';
import Temperature from './Temperature';
import Moment from 'react-moment';
import moment from 'moment';

class DisplayWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      windspeed: null,
      winddirection: null,
      temperature: null,
    };
  }

  intervalId = null;

  fetchWeather = async () => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=47.84&longitude=35.23&current_weather=true&timezone=Europe%2FBerlin'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          windspeed: data.current_weather.windspeed,
          winddirection: data.current_weather.winddirection,
          temperature: data.current_weather.temperature,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async componentDidMount() {
    await this.fetchWeather();
    this.intervalID = setInterval(() => {
      this.fetchWeather();
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { loading, winddirection, windspeed, temperature } = this.state;
    const start = moment().add(-1, 'm');
    return loading ? (
      <div className="loadingBox">Loading...</div>
    ) : (
      <section className="weatherBox">
        <p className="sectionTitle">Current Weather in Prague</p>
        <div className="weatherInfo">
          <span className="infoBox">
            <p className="charecteristics">Wind :</p> {windspeed} km/h
            <Wind windDirection={winddirection} />
          </span>
          <span className="infoBox">
            <p className="charecteristics">Temperature :</p>
            {temperature} °C
            <Temperature temperature={temperature} />
          </span>
        </div>
        <span className="updateInfo">
          <p className="charecteristics">Last Updated :</p>
          <Moment format="DD.MM.YYYY  HH:mm" date={start} interval={60000} />
        </span>
      </section>
    );
  }
}

export default DisplayWeather;
