import './App.css';
import CardList from './components/cards/CardList';
import TopBlock from './components/decomposition/top/TopBlock';
import SearchBlock from './components/decomposition/search/SearchBlock';
import Banner from './components/decomposition/banner/Banner';
import ArticlesWidget from './components/decomposition/articles/ArticlesWidget';

import { list,  articles } from './data/db';

function App() {
  return (
    <>      
      <div className="task-title cards-title">Карточки</div>
        <CardList cards={list} />

      <div className="task-title decomposition-title">Декомпозиция</div>
      <div className="ya-wrapper">
        <TopBlock />
        <SearchBlock />  
        <Banner />
        <ArticlesWidget articles={articles} />
      </div>          
    </>    
  );
}

export default App;
