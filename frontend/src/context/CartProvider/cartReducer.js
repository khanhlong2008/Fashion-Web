const cartReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CART':
      const cart = action.payload || [];
      return {
        ...state,
        isLoading: false,
        items: cart,
        totalPrice: cart.reduce((total, item) => total + item.totalPrice, 0),
        totalQuantity: cart.length,
      };
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
              totalPrice: newItem.price * newItem.quantity,
              front: newItem.front,
              title: newItem.title,
              stock: newItem.stock,
              size: newItem.size,
              color: newItem.color,
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
          message: `PRODUCT ADDED TO CART`,
          items: state.items.map(item => {
            if (item.id === newItem.id) {
              return {
                ...item,
                quantity: item.quantity + newItem.quantity,
                totalPrice: item.totalPrice + newItem.price * newItem.quantity,
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
        changed: true,
        items: state.items.filter(item => item.id !== id),
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - item.totalPrice,
      };

    case 'CHANGE_QUANTITY':
      const changedItem = action.payload;
      const selectItem = state.items.find(item => item.id === changedItem.id);
      return {
        ...state,
        changed: true,
        totalPrice:
          state.totalPrice - selectItem.totalPrice + changedItem.totalPrice,
        items: state.items.map(item => {
          if (item.id === changedItem.id) {
            return {
              ...item,
              quantity: changedItem.quantity,
              totalPrice: changedItem.totalPrice,
            };
          }

          return item;
        }),
      };
    case 'REMOVE_ONE':
      const itemDelete = state.items.find(item => item.id === action.payload);
      if (itemDelete.quantity > 1) {
        return {
          ...state,
          changed: true,
          items: [
            ...state.items.map(item =>
              item.id === action.payload
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    totalPrice: item.totalPrice - item.price,
                  }
                : item
            ),
          ],
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPrice - itemDelete.price,
        };
      } else {
        return {
          ...state,
          changed: true,
          items: state.items.filter(item => item.id !== id),
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - itemDelete.totalPrice,
        };
      }
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
