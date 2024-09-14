import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const widgets = useSelector(state =>
    state.widgets.categories ? state.widgets.categories.flatMap(category => category.widgets) : []
  );

  const filteredWidgets = widgets.filter(widget =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Widgets</h2>
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredWidgets.map(widget => (
          <li key={widget.id}>{widget.name}: {widget.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

