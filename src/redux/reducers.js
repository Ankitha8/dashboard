import { ADD_WIDGET, REMOVE_WIDGET } from './actions';
import data from '../data.json'; // Import JSON data

const initialState = data;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget]
              }
            : category
        )
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  widget => widget.id !== action.payload.widgetId
                )
              }
            : category
        )
      };
    default:
      return state;
  }
};

export default rootReducer;




