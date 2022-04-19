// Показывает заголовки новостей

import { nanoid } from 'nanoid';

export default function NewsTitles({ titles }) {
  
  return (
    <div className="news-box_titles">
      {titles.map((title) => 
        <span href="#" 
          key={nanoid()}
          title={title}
          className="news-box_title">
          {title}
        </span>
      )}
    </div>
  );
}
