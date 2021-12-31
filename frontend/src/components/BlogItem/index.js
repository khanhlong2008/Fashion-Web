import React from 'react';

const BlogItem = ({ title, cover, date, comments, text }) => {
  const link = `/blogs/fashion/${title.toLowerCase().split(' ').join('-')}`;
  return (
    <div className="blog-item__container mx-3">
      <div className="blog-item__cover">
        <img src={cover} alt="" />
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </div>
      <div className="blog-info">
        <p className="mb-0">
          <i className="bi bi-calendar3 me-2"></i>
          {date}
        </p>
        <p className="mb-0">
          <i className="bi bi-chat-fill me-2"></i>
          {comments} comments
        </p>
      </div>
      <div className="blog-content">
        <p className="fw-bold title">{title}</p>
        <p>{text}</p>
        <button className="btn btn-primary">
          <a href={link} target="_blank" rel="noreferrer">
            READ MORE
          </a>
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
