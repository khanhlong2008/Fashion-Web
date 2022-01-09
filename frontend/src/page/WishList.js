import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/layout/LoadingSpiner';
import ProductCtx from '../context/ProductProvider/ProductCtx';

const WishList = () => {
  const { wishList, getWishList, loading, removeItemFromWishList } =
    useContext(ProductCtx);
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(ProductCtx);
  useEffect(() => {
    getWishList();
  }, [isAuthenticated, getWishList]);

  return (
    <section className="wishlist__wrapper container d-block">
      <h1 className="text-center">Wishlist</h1>
      <div className="wishlist__container">
        {loading ? (
          <LoadingSpinner />
        ) : wishList.length === 0 && !loading ? (
          <p className="empy-wishlist">Your wishlist is currently empty!</p>
        ) : (
          <table className="text-center">
            <tr>
              <td colspan="2">
                <p>Delete</p>
              </td>
              <td colspan="1">
                <p>Image</p>
              </td>
              <td colspan="4">
                <p>Product Name</p>
              </td>
              <td colspan="2">
                <p>Unit Price</p>
              </td>
              <td colspan="4">
                <p>Action</p>
              </td>
            </tr>
            {wishList.map(item => (
              <tr>
                <td
                  colspan="2"
                  onClick={removeItemFromWishList.bind(null, item.id)}
                >
                  <i className="bi bi-trash"></i>
                </td>
                <td colspan="1">
                  <div className="image-container">
                    <img src={item.front} alt="" />
                  </div>
                </td>
                <td colspan="4">
                  <p>{item.title}</p>
                </td>
                <td colspan="2">
                  <p>${item.price}</p>
                </td>
                <td colspan="4">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/products/${item.id}`)}
                  >
                    View Product
                  </button>
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </section>
  );
};

export default WishList;
