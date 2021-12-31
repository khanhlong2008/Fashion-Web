const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = action.payload;
      const existingItem = state.items.findIndex(
        item => item.id === newItem.id
      );
      if (existingItem === -1) {
        return {
          ...state,
          changed: true,
          message: `PRODUCT ADDED TO CART`,
          items: [
            ...state.items,
            {
              id: newItem.id,
              price: newItem.price,
              quantity: newItem.quantity,
              totalPrice: newItem.price,
              front: newItem.front,
              name: newItem.name,
            },
          ],
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + newItem.price,
        };
      } else {
        return {
          ...state,
          changed: true,
          totalPrice: state.totalPrice + newItem.price,
          items: state.items.map(item => {
            if (item.id === newItem.id) {
              return {
                ...item,
                quantity: item.quantity + newItem.quantity,
                totalPrice: item.totalPrice + newItem.price,
              };
            }

            return item;
          }),
        };
      }

    case 'REMOVE_ITEM':
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      return {
        ...state,
        items: state.items.filter(item => item.id !== id),
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - item.totalPrice,
      };
    case 'CLEAR_MESSAGE':
      return {
        ...state,
        message: '',
      };
    case 'SHOW_MODAL':
      return {
        ...state,
        showModal: true,
        modal: action.payload,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
