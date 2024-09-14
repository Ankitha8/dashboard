import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/widgetSlice';

const AddWidgetForm = ({ categoryId }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      content: widgetContent
    };
    dispatch(addWidget({ categoryId, widget: newWidget }));
    setWidgetName('');
    setWidgetContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={widgetName} 
        onChange={(e) => setWidgetName(e.target.value)} 
        placeholder="Widget Name" 
        required 
      />
      <input 
        type="text" 
        value={widgetContent} 
        onChange={(e) => setWidgetContent(e.target.value)} 
        placeholder="Widget Content" 
        required 
      />
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
