import rootReducer from './reducer';
import { addWidget, removeWidget } from './actions';

describe('Widget Reducer', () => {
  const initialState = {
    categories: [
      {
        id: 1,
        name: 'CSPM Executive Dashboard',
        widgets: [
          { id: 1, name: 'Widget 1', text: 'Random text 1' },
          { id: 2, name: 'Widget 2', text: 'Random text 2' }
        ]
      }
    ]
  };

  it('should add a widget to the correct category', () => {
    const newWidget = { id: 3, name: 'Widget 3', text: 'Random text 3' };
    const action = addWidget(1, newWidget);
    const newState = rootReducer(initialState, action);

    expect(newState.categories[0].widgets).toHaveLength(3); // Check widget count
    expect(newState.categories[0].widgets[2]).toEqual(newWidget); // Check if the widget is added
  });

  it('should remove a widget from the correct category', () => {
    const action = removeWidget(1, 1);
    const newState = rootReducer(initialState, action);

    expect(newState.categories[0].widgets).toHaveLength(1); // Check widget count
    expect(newState.categories[0].widgets[0].id).toEqual(2); // Remaining widget should have id 2
  });
});
