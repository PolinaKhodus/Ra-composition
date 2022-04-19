// Показывает список избранных новостей

import { nanoid } from 'nanoid';

export default function NewsList({ news }) {  

  return (
    <div className="news-list">
      {news.map((item) => (
        <div key={nanoid()} className="news-list_new">
          <a href="#" className="new-link">
            <span className="new_img"></span>
            <span className="new_title">{item}</span>            
          </a>         
        </div>
      ))}
    </div>
  );
}
