import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/actions';

const AddWidgetModal = ({ categoryId }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newWidget = {
      id: Date.now(), // Unique ID
      name: widgetName,
      text: widgetText
    };
    dispatch(addWidget(categoryId, newWidget));
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={e => setWidgetName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={widgetText}
        onChange={e => setWidgetText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Widget</button>
    </div>
  );
};

export default AddWidgetModal;

