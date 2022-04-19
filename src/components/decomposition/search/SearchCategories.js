// Поисковые категории

import { nanoid } from 'nanoid';

export default function SearchCategories({ categories }) {

  return (
    <div className="search_categories">
      {categories.map((category) => (
        <a href="#" className="search-category" key={nanoid()}>{category}</a>
      ))}
    </div>
  );
}
