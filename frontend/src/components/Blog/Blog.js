import BlogItem from './BlogItem/BlogItem';
import './Blog.css';

const Blog = () => {
  const blogdata = [
    {
      id: 1,
      title: 'Proin faucibus tristique',
      image:
        'https://cdn.shopify.com/s/files/1/0054/0567/1479/articles/1_720x.png?v=1604644403',
      content:
        'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat ',
      date: '06 Nov 2020',
      themes: 'Ishi Theme',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
      image:
        'https://cdn.shopify.com/s/files/1/0054/0567/1479/articles/2_720x.png?v=1604644069',
      content:
        'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat',
      date: '06 Nov 2020',
      themes: 'Ishi Theme',
    },
    {
      id: 3,
      title: 'Upon of seasons earth',
      image:
        'https://cdn.shopify.com/s/files/1/0054/0567/1479/articles/8_720x.png?v=1604644306',
      content:
        'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat',
      date: '06 Nov 2020',
      themes: 'Ishi Theme',
    },
    {
      id: 4,
      title: 'Nec intellegat deseruisse',
      image:
        'https://cdn.shopify.com/s/files/1/0054/0567/1479/articles/3_720x.png?v=1604644355',
      content:
        'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat',
      date: '06 Nov 2020',
      themes: 'Ishi Theme',
    },
    {
      id: 5,
      title: 'Viderer voluptatum te eum',
      image:
        'https://cdn.shopify.com/s/files/1/0054/0567/1479/articles/6_720x.png?v=1604644252',
      content:
        'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat',
      date: '06 Nov 2020',
      themes: 'Ishi Theme',
    },
    {
      id: 6,
      title: 'Scelerisque vestibulum urna',
      image:
        'https://cdn.shopify.com/s/files/1/0054/0567/1479/articles/5_720x.png?v=1604644015',
      content:
        'Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat',
      date: '06 Nov 2020',
      themes: 'Ishi Theme',
    },
  ];

  return (
    <div className="container">
      <div className="container-blog">
        <div>
          <h2 className="container-blog-title">Fashion</h2>
        </div>
        <BlogItem blogdata={blogdata} />
        <div className="page-container">
          <div className="pape">
            <div className="pape-rol pape-rol__color">1</div>
            <div className="pape-rol">2</div>
            <div className="pape-rol">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
