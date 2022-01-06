import React from 'react';

const PageController = ({ page, onShow = '1', handleChangePage }) => {
  const pages = [];

  const handleOnClickNav = e => {
    handleChangePage(e.target.innerHTML);
  };

  const handleNext = () => {
    handleChangePage(`${+onShow + 1}`);
  };
  const handlePrev = () => {
    handleChangePage(`${+onShow - 1}`);
  };

  if (page <= 5) {
    for (let i = 1; i <= page; i++) {
      pages.push(
        <button
          onClick={handleOnClickNav}
          className={`btn ${onShow === `${i}` ? 'active' : ''} ${
            i === 1 && !onShow ? 'active' : ''
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="page-controller__wrapper">
        <div className="page-controller">
          <button
            onClick={handlePrev}
            className="btn prev-btn"
            disabled={onShow === '1'}
          >
            {'<'}
          </button>
          {pages}
          <button
            onClick={handleNext}
            className="btn next-btn"
            disabled={+onShow === page || page === 1}
          >
            {'>'}
          </button>
        </div>
      </div>
    );
  } else {
    if (onShow <= 5) {
      return (
        <div className="page-controller__wrapper">
          <div className="page-controller">
            <button
              onClick={handlePrev}
              className="btn prev-btn"
              disabled={onShow === '1'}
            >
              {'<'}
            </button>
            <button
              onClick={handleOnClickNav}
              className={`btn ${onShow === '1' ? 'active' : ''}`}
            >
              1
            </button>
            <button
              onClick={handleOnClickNav}
              className={`btn ${onShow === '2' ? 'active' : ''}`}
            >
              2
            </button>
            <button
              onClick={handleOnClickNav}
              className={`btn ${onShow === '3' ? 'active' : ''}`}
            >
              3
            </button>
            <button
              onClick={handleOnClickNav}
              className={`btn ${onShow === '4' ? 'active' : ''}`}
            >
              4
            </button>
            <button
              onClick={handleOnClickNav}
              className={`btn ${onShow === '5' ? 'active' : ''}`}
            >
              5
            </button>
            <button>...</button>
            <button
              onClick={handleNext}
              className="btn next-btn"
              disabled={+onShow === page}
            >
              {'>'}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="page-controller__wrapper">
          <div className="page-controller">
            <button
              onClick={handlePrev}
              className="btn prev-btn"
              disabled={onShow === '1'}
            >
              {'<'}
            </button>
            <button
              onClick={handleOnClickNav}
              className={`btn ${onShow === '1' ? 'active' : ''}`}
            >
              1
            </button>
            <button
              onClick={handleOnClickNav}
              className={`btn ${onShow === '2' ? 'active' : ''}`}
            >
              2
            </button>
            <button
              onClick={handleOnClickNav}
              className={`btn ${onShow === '3' ? 'active' : ''}`}
            >
              ...
            </button>
            <button
              onClick={handleOnClickNav}
              className={`btn ${onShow === '4' ? 'active' : ''}`}
            >
              4
            </button>
            <button
              onClick={handleOnClickNav}
              className={`btn ${onShow === '5' ? 'active' : ''}`}
            >
              5
            </button>
            <button>{onShow}</button>
            {pages >= +onShow + 1 ? (
              <button
                onClick={handleOnClickNav}
                className={`btn ${onShow === `${+onShow + 1}` ? 'active' : ''}`}
              >
                {onShow + 1}
              </button>
            ) : null}
            {pages >= +onShow + 2 ? (
              <button
                onClick={handleOnClickNav}
                className={`btn ${onShow === `${+onShow + 2}` ? 'active' : ''}`}
              >
                {onShow + 2}
              </button>
            ) : null}
            {pages > +onShow + 2 ? <button className="btn">...</button> : null}
            <button
              onClick={handleNext}
              className="btn next-btn"
              disabled={+onShow === page}
            >
              {'>'}
            </button>
          </div>
        </div>
      );
    }
  }
};

export default PageController;
