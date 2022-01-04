import BlogItem from './BlogItemHomePage';
import './Blog.css';
const blogList = [
  {
    id: 'b1',
    title: 'Proin faucibus tristique',
    cover: '../image/blog1.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
  {
    id: 'b2',
    title: 'Viderer voluptatum te eum',
    cover: '../image/blog2.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
  {
    id: 'b3',
    title: 'Nec intellegat deseruisse',
    cover: '../image/blog3.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
  {
    id: 'b4',
    title: 'Upon of seasons earth',
    cover: '../image/blog4.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
  {
    id: 'b5',
    title: 'Lorem ipsum dolor sit amet',
    cover: '../image/blog5.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
  {
    id: 'b6',
    title: 'Scelerisque vestibulum urna',
    cover: '../image/blog6.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
];

const Blog = () => {
  return (
    <div className="container">
      <div className="container-blog">
        <div>
          <h2 className="container-blog-title">Fashion</h2>
        </div>
        <section className="blog__wrapper blog__wrapper-2 py-5">
          {blogList.map(blog => (
            <BlogItem key={blog.id} {...blog} />
          ))}
        </section>
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
