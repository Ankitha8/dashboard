import React from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

const Category = ({ category }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      {category.widgets.map(widget => (
        <Widget key={widget.id} widget={widget} categoryId={category.id} />
      ))}
      <AddWidgetForm categoryId={category.id} />
    </div>
  );
};

export default Category;
