import { nanoid } from 'nanoid';

export default function EtherArticle({ article }) {

  return (
    <div className="article-content ether">
      {article.content.map((item) => (
        <div className="ether-item" key={nanoid()}>
          <span></span>
          <span>{item.programm}</span>
          <span>{item.channel}</span>
        </div>
      ))}
    </div>
  );
}
