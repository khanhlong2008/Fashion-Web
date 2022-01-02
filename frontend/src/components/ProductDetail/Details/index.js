import ProductRight from '../ProductRight';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import ProductCtx from '../../../context/ProductProvider/ProductCtx';
import ImageCarousel from '../../ProductModal/ImageCarousel';

const Details = () => {
  const { id } = useParams();
  const { products } = useContext(ProductCtx);
  const [product, setProduct] = useState(undefined);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const selectProduct = products.find(item => item._id === id);
    setProduct(selectProduct);
  }, [products, id]);
  const handleImage = src => {
    setImgSrc(src);
  };

  useEffect(() => {
    if (product) setImgSrc(product.img.imgList[0].imgItem);
  }, [product]);

  const imgList = product ? product.img.imgList : [];

  return (
    <div className="container product-detail__wrapper">
      {imgList.length > 0 && (
        <div className="product-image">
          <div>
            <img src={imgSrc} alt="" />
          </div>
          <ImageCarousel listImage={imgList} handleImage={handleImage} />
        </div>
      )}
      {product && <ProductRight {...product} />}
    </div>
  );
};
export default Details;
