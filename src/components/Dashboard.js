import React, { useState } from "react";
import './Dashboard.css'; // For custom styling

const Dashboard = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Dynamic Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", type: "text", content: "Random text for widget 1" },
      ],
    },
  ]);

  const [widgetName, setWidgetName] = useState("");
  const [widgetContent, setWidgetContent] = useState("");
  const [widgetType, setWidgetType] = useState("text"); // Default widget type is 'text'

  const addWidget = (categoryId) => {
    if (widgetName && widgetContent) {
      setCategories((prevState) =>
        prevState.map((category) =>
          category.id === categoryId
            ? {
                ...category,
                widgets: [
                  ...category.widgets,
                  {
                    id: Date.now(),
                    name: widgetName,
                    type: widgetType, // Store widget type
                    content: widgetContent,
                  },
                ],
              }
            : category
        )
      );
      setWidgetName("");
      setWidgetContent("");
    } else {
      alert("Please enter both widget name and content");
    }
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories((prevState) =>
      prevState.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter((widget) => widget.id !== widgetId),
            }
          : category
      )
    );
  };

  // Render the widget based on its type
  const renderWidget = (widget) => {
    switch (widget.type) {
      case "text":
        return (
          <div className="widget" key={widget.id}>
            <h3>{widget.name}</h3>
            <p>{widget.content}</p>
            <button
              className="remove-btn"
              onClick={() => removeWidget(1, widget.id)}
            >
              Remove
            </button>
          </div>
        );
      case "image":
        return (
          <div className="widget" key={widget.id}>
            <h3>{widget.name}</h3>
            <img src={widget.content} alt={widget.name} style={{ width: '100%', borderRadius: '10px' }} />
            <button
              className="remove-btn"
              onClick={() => removeWidget(1, widget.id)}
            >
              Remove
            </button>
          </div>
        );
      case "chart":
        return (
          <div className="widget" key={widget.id}>
            <h3>{widget.name}</h3>
            {/* Placeholder for chart */}
            <div style={{ backgroundColor: '#2a2a3d', padding: '20px', borderRadius: '10px' }}>
              <p>{widget.content} (This is a chart widget)</p>
            </div>
            <button
              className="remove-btn"
              onClick={() => removeWidget(1, widget.id)}
            >
              Remove
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      {categories.map((category) => (
        <div className="category" key={category.id}>
          <h2>{category.name}</h2>
          <div className="widget-form">
            <input
              type="text"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              placeholder="Enter Widget Name"
            />
            <input
              type="text"
              value={widgetContent}
              onChange={(e) => setWidgetContent(e.target.value)}
              placeholder={`Enter ${widgetType === 'image' ? 'Image URL' : 'Content'}`}
            />
            <select value={widgetType} onChange={(e) => setWidgetType(e.target.value)}>
              <option value="text">Text Widget</option>
              <option value="image">Image Widget</option>
              <option value="chart">Chart Widget</option>
            </select>
            <button onClick={() => addWidget(category.id)}>Add Widget</button>
          </div>

          <div className="widget-grid">
            {category.widgets.map((widget) => renderWidget(widget))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;












