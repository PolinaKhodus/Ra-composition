// Отображает верхний блок с новостями и рекламой

import NewsWidget from './NewsWidget';
import AdvWidget from './AdvWidget';
import * as DB from '../../../data/db';

export default function TopBlock() {
  
  return (
    <div className="top-block">
      <NewsWidget news={DB.news}/>
      <AdvWidget />
    </div>
  );
}
