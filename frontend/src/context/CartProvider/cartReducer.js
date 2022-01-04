const cartReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CART':
      const cart = action.payload || [];
      return {
        ...state,
        isLoading: true,
        items: cart,
        totalPrice: cart.reduce((total, item) => total + item.totalPrice, 0),
        totalQuantity: cart.length,
      };
    case 'ADD_ITEM':
      const newItem = action.payload;
      const existingItem = state.items.find(
        item =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color
      );
      if (!existingItem) {
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
            if (item === existingItem) {
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
      const removedItem = action.payload;
      const _removedItem = state.items.find(
        item =>
          item.id === removedItem.id &&
          item.size === removedItem.size &&
          item.color === removedItem.color
      );

      return {
        ...state,
        changed: true,
        items: state.items.filter(item => item !== _removedItem),
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - _removedItem.totalPrice,
      };

    case 'CHANGE_QUANTITY':
      const changedItem = action.payload;
      const selectItem = state.items.find(
        item =>
          item.id === changedItem.id &&
          item.size === changedItem.size &&
          item.color === changedItem.color
      );
      return {
        ...state,
        changed: true,
        totalPrice:
          state.totalPrice - selectItem.totalPrice + changedItem.totalPrice,
        items: state.items.map(item => {
          if (item === selectItem) {
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
      const removeOne = action.payload;
      const removeItem = state.items.find(
        item =>
          item.id === removeOne.id &&
          item.size === removeOne.size &&
          item.color === removeOne.color
      );
      if (removeItem.quantity > 1) {
        return {
          ...state,
          changed: true,
          items: [
            ...state.items.map(item =>
              item === removeItem
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    totalPrice: item.totalPrice - removeItem.price,
                  }
                : item
            ),
          ],
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPrice - removeItem.price,
        };
      } else {
        return {
          ...state,
          changed: true,
          items: state.items.filter(item => item === removeItem),
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - removeItem.totalPrice,
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
    case 'SEND_MESSAGE':
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
