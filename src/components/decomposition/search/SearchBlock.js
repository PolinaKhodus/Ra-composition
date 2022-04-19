// Показывает поисковый блок

import SearchCategories from './SearchCategories';
import SearchInput  from './SearchInput ';
import SearchExample from './SearchExample';
import { categories } from '../../../data/db';

export default function SearchBlock() {

  return (
    <div className="search-block">
      <SearchCategories categories={categories} />
      <SearchInput />
      <SearchExample />
    </div>
  );
}
