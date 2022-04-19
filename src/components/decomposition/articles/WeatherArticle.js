export default function WeatherArticle({ article }) {
  
    return (
      <div className="article-content weather">
        <span className="weather-preview"></span>
        <span className="weather-temp">{`${article.temperature}C`}</span>
        <span className="weather-period">
          <span className="start-temp">{`Утром ${article.periodTemerature['Утром']},`}</span>
          <span className="end-temp">{`Днём ${article.periodTemerature['Днём']}`}</span>
        </span>
      </div>
    );
  }
  