import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import ProductCtx from '../context/ProductProvider/ProductCtx';
import ImageCarousel from '../components/Product/ProductDetail/ProductModal/ImageCarousel';
import ProductRight from '../components/Product/ProductDetail/ProductRight';

const Details = () => {
  const { id } = useParams();
  const { products, loaded } = useContext(ProductCtx);
  const [product, setProduct] = useState(undefined);
  const [imgSrc, setImgSrc] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (loaded) {
      const selectProduct = products.find(item => item._id === id);
      if (selectProduct) {
        setProduct(selectProduct);
      } else navigate('/404notfound');
    }
  }, [products, id, loaded, navigate]);

  const handleImage = src => {
    setImgSrc(src);
  };

  useEffect(() => {
    if (product) setImgSrc(product.img.imgList[0].imgItem);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
