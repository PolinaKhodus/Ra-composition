export default function ArticleItem(props) {
    const { article } = props;
    return (
      <div className="article-item">
        <h3 className="article-title">
          {article.title}
        </h3>
        {props.children}
      </div>    
    );
  }
  