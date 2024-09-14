// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // Categories data with initial widgets
  const categories = [
    {
      name: "Category 1",
      widgets: [
        {
          name: "Widget 1",
          content: "Random text for widget 1"
        },
        {
          name: "Widget 2",
          content: "Random text for widget 2"
        }
      ]
    },
    {
      name: "Category 2",
      widgets: []
    }
  ];

  // DOM elements
  const categoriesContainer = document.getElementById('categories');
  const widgetNameInput = document.getElementById('widgetName');
  const widgetContentInput = document.getElementById('widgetContent');
  const addWidgetBtn = document.getElementById('addWidgetBtn');

  // Function to render categories and widgets
  function renderCategories() {
    categoriesContainer.innerHTML = ''; // Clear the existing content

    categories.forEach((category, categoryIndex) => {
      const categoryElement = document.createElement('div');
      categoryElement.className = 'category';

      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = category.name;
      categoryElement.appendChild(categoryTitle);

      // Loop through widgets in the category
      category.widgets.forEach((widget, widgetIndex) => {
        const widgetElement = document.createElement('div');
        widgetElement.className = 'widget';

        const widgetTitle = document.createElement('h3');
        widgetTitle.textContent = widget.name;
        widgetElement.appendChild(widgetTitle);

        const widgetContent = document.createElement('p');
        widgetContent.textContent = widget.content;
        widgetElement.appendChild(widgetContent);

        // Remove button for each widget
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = function () {
          removeWidget(categoryIndex, widgetIndex);
        };
        widgetElement.appendChild(removeBtn);

        categoryElement.appendChild(widgetElement); // Add widget to category
      });

      categoriesContainer.appendChild(categoryElement); // Add category to container
    });
  }

  // Add new widget to the first category
  function addWidget() {
    const widgetName = widgetNameInput.value;
    const widgetContent = widgetContentInput.value;
    
    if (widgetName && widgetContent) {
      // Add the new widget to Category 1
      categories[0].widgets.push({ name: widgetName, content: widgetContent });
      renderCategories();
      
      // Clear input fields after adding the widget
      widgetNameInput.value = '';
      widgetContentInput.value = '';
    } else {
      alert('Please fill in both fields!');
    }
  }

  // Remove a widget from a category
  function removeWidget(categoryIndex, widgetIndex) {
    categories[categoryIndex].widgets.splice(widgetIndex, 1);
    renderCategories();
  }

  // Add event listener to Add Widget button
  addWidgetBtn.addEventListener('click', addWidget);

  // Initial rendering of categories and widgets
  renderCategories();
});
