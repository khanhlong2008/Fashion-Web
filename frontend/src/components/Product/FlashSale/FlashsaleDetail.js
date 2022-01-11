import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageController from '../MainProduct/PageController';
import ComingSoonItem from './ComingSoonItem';
import CountDown from './CountDown';
import FSItemSlider from './FSItemSlider';

const list = [
  {
    size: {
      s: true,
      m: true,
      l: true,
    },
    color: {
      red: false,
      black: true,
      white: false,
      yellow: false,
      pink: false,
      green: false,
    },
    img: {
      imgList: [
        {
          _id: '61cebfef74735bfe8501b1c6',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/11/17/1637114482b3eafd0b6177e28579cb2eba3e61010e_thumbnail_600x.webp',
        },
        {
          _id: '61cebfef74735bfe8501b1c7',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/11/17/16371144844a4196e2ebb191e378d3af2ef2f1d434_thumbnail_600x.webp',
        },
        {
          _id: '61cebfef74735bfe8501b1c8',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/11/17/16371144927da8516d4db9002c7f400c71c2d47011_thumbnail_600x.webp',
        },
      ],
    },
    status: {
      soldOut: false,
      stoking: true,
    },
    _id: '61cbd961b8b800e20b1eaa98',
    category: 'Shirt',
    title: ' Shirt For Women A01',
    quantity: 3,
    price: 800,
  },
  {
    size: {
      s: true,
      m: true,
      l: true,
    },
    color: {
      red: false,
      black: false,
      white: true,
      yellow: false,
      pink: false,
      green: false,
    },
    img: {
      imgList: [
        {
          _id: '61cebfef74735bfe8501b1c9',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/11/16/1637060262788079ddc4b224c8bafc07a0500d5e17_thumbnail_600x.webp',
        },
        {
          _id: '61cebfef74735bfe8501b1ca',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/11/16/16370602650238d602d769245009e90cee007c96ea_thumbnail_600x.webp',
        },
        {
          _id: '61cebfef74735bfe8501b1cb',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/11/16/1637060267fb3ae7c2acfa7b0481ce9a7f06ea40ef_thumbnail_600x.webp',
        },
      ],
    },
    status: {
      soldOut: false,
      stoking: true,
    },
    _id: '61cbd961b8b800e20b1eaa99',
    category: 'Shirt',
    title: ' Shirt For Women A02',
    quantity: 3,
    price: 800,
  },
  {
    size: {
      s: true,
      m: true,
      l: true,
    },
    color: {
      red: true,
      black: false,
      white: false,
      yellow: false,
      pink: false,
      green: false,
    },
    img: {
      imgList: [
        {
          _id: '61cebfef74735bfe8501b1cc',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/10/29/1635479746ecbe2ea6f4aa4df4d4b8d99381ef1ece_thumbnail_600x.webp',
        },
        {
          _id: '61cebfef74735bfe8501b1cd',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/10/29/1635479748a77ee997166b7f2221611e77c58788b9_thumbnail_600x.webp',
        },
        {
          _id: '61cebfef74735bfe8501b1ce',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/10/29/16354797569da8c6d50994bc919023d6ee4b4e6376_thumbnail_600x.webp',
        },
      ],
    },
    status: {
      soldOut: false,
      stoking: true,
    },
    _id: '61cbd961b8b800e20b1eaa9a',
    category: 'Shirt',
    title: ' Shirt For Women A03',
    quantity: 3,
    price: 800,
  },
  {
    size: {
      s: true,
      m: true,
      l: true,
    },
    color: {
      red: false,
      black: false,
      white: false,
      yellow: false,
      pink: true,
      green: false,
    },
    img: {
      imgList: [
        {
          _id: '61cebfef74735bfe8501b1cf',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/10/12/1634007288abf6e797f779682805a1c33cd68d12a7_thumbnail_600x.webp',
        },
        {
          _id: '61cebfef74735bfe8501b1d0',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/10/12/16340072904cf6712aa27558fb834937dbe28ba9b7_thumbnail_600x.webp',
        },
        {
          _id: '61cebfef74735bfe8501b1d1',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/10/12/163400729247053962b7ccdc506d8172aa67d74890_thumbnail_600x.webp',
        },
      ],
    },
    status: {
      soldOut: false,
      stoking: true,
    },
    _id: '61cbd961b8b800e20b1eaa9b',
    category: 'Shirt',
    title: ' Shirt For Women A04',
    quantity: 3,
    price: 800,
  },
  {
    size: {
      s: true,
      m: true,
      l: true,
    },
    color: {
      red: false,
      black: false,
      white: false,
      yellow: true,
      pink: false,
      green: false,
    },
    img: {
      imgList: [
        {
          _id: '61cebfef74735bfe8501b1d2',
          imgItem:
            'https://oldsailor.com.vn/vnt_upload/product/04_2021/_MG_9493_WED.jpg',
        },
        {
          _id: '61cebfef74735bfe8501b1d3',
          imgItem:
            'https://oldsailor.com.vn/vnt_upload/product/04_2021/_MG_9486_WED.jpg',
        },
        {
          _id: '61cebfef74735bfe8501b1d4',
          imgItem:
            'https://oldsailor.com.vn/vnt_upload/product/04_2021/z2435439870094_e548268352cc0705458a62df0af489ce.jpg',
        },
      ],
    },
    status: {
      soldOut: false,
      stoking: true,
    },
    _id: '61cbd961b8b800e20b1eaa9c',
    category: 'Shirt',
    title: ' Shirt For Women A05',
    quantity: 3,
    price: 800,
  },
  {
    size: {
      s: true,
      m: true,
      l: true,
    },
    color: {
      red: false,
      black: false,
      white: false,
      yellow: false,
      pink: false,
      green: true,
    },
    img: {
      imgList: [
        {
          _id: '61cebfef74735bfe8501b1d5',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/11/21/1637464484ccde8f4fd74b87e121611c2b89fb9ff7_thumbnail_600x.webp',
        },
        {
          _id: '61cebfef74735bfe8501b1d6',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/11/21/16374644864f6eb4dd7505472bc20e97e675a93a5b_thumbnail_600x.webp',
        },
        {
          _id: '61cebfef74735bfe8501b1d7',
          imgItem:
            'https://img.ltwebstatic.com/images3_pi/2021/11/21/16374644932ced7415947fba1659e16b99f711ef06.webp',
        },
      ],
    },
    status: {
      soldOut: false,
      stoking: true,
    },
    _id: '61cbd961b8b800e20b1eaa9d',
    category: 'Shirt',
    title: ' Shirt For Women A06',
    quantity: 3,
    price: 800,
  },
];

const FlashsaleDetail = () => {
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  const promotionId = queryparams.get('promotionid');
  const navigate = useNavigate();
  const timeNow = new Date().getHours();
  const [onGoing, setOnGoing] = useState(false);
  const [today, setToday] = useState(new Date().toLocaleString().split(',')[0]);
  const [target, setTarget] = useState(0);

  useEffect(() => {
    let newTarget;
    if (timeNow >= promotionId && timeNow < +promotionId + 2) {
      newTarget = +promotionId + 2;
    } else {
      newTarget = +promotionId;
    }
    if (newTarget > 24) newTarget = 1;
    setTarget(newTarget);
  }, [timeNow, promotionId]);

  useEffect(() => {
    if (target === 1 || target < timeNow) {
      const dateArr = today.split('/');
      dateArr[1] = +dateArr[1] + 1;
      setToday(dateArr.join('/'));
    }

    // eslint-disable-next-line
  }, [target, timeNow]);

  useEffect(() => {
    if (timeNow >= promotionId && timeNow < +promotionId + 2) {
      setOnGoing(true);
    } else setOnGoing(false);
  }, [promotionId, timeNow]);

  return (
    <div className="flash-sale__container">
      <div className="title__wrapper container my-0 d-block">
        <div className="title__container">
          <h1>Flash Sale</h1>
          <div>
            {onGoing ? 'Ends in:' : 'Starts in:'}
            <CountDown target={target} today={today} />
          </div>
        </div>
      </div>
      <div className="time-list__wrapper container">
        {[9, 12, 15, 18, 21].map((time, index) => (
          <div
            className={`time-section ${
              promotionId === time.toString()
                ? 'active'
                : !promotionId && index === 0
                ? 'active'
                : ''
            }`}
            onClick={() => navigate(`/flashsale?promotionid=${time}`)}
          >
            {time}:00{' '}
            <span>
              {timeNow >= time && timeNow < time + 2
                ? 'Ongoing'
                : 'Comming Soon'}
            </span>
          </div>
        ))}
      </div>
      <div className="sale-list__container container">
        {onGoing
          ? list.map(item => <FSItemSlider {...item} buyBtn={true} />)
          : list.map(item => <ComingSoonItem {...item} />)}
      </div>
    </div>
  );
};

export default FlashsaleDetail;
