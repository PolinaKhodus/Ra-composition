// Показывает виджет с новостями

import NewsTitles from './NewsTitles';
import NewsDate from './NewsDate';
import NewsList from './NewsList';
import FinancialNews from './FinancialNews';

import { financialNews } from '../../../data/db';

export default function NewsWidget(props) {
  const { news } = props;
  const titles = Object.keys(news);
  const newsList = news['Сейчас в СМИ'];

  return (
    <div className="news-box">
      <div className="news-box_header">
        <NewsTitles titles={titles} />
        <NewsDate />        
      </div>

      <NewsList news={newsList}/>     
      <FinancialNews stats={financialNews}/>   
    </div>
  );
}
