import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai'

const items = [
  <div className="item" data-value="1"><img src="https://deltasport.ua/upload/iblock/879/BV0050_400_a.jpg" /></div>,
  <div className="item" data-value="2"><img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM0863-001/aa7594ee-a488-4a37-9831-25e85510df5f_primary.jpg?zoom" /></div>,
  <div className="item" data-value="3"><img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM9652-100/7515fc4b-c3fe-453b-a9e7-de31014ab48c_primary.jpg?gallery" /></div>,
];

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <MiniThumb onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
      <Mini>
        {item}
      </Mini>
    </MiniThumb>
  ));
};

const Banner = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    if (e.type === 'action') {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <Contain>
      <TextWrap>
        <NikeLogo>
          <img width={60} src="https://blog.kakaocdn.net/dn/cqKaQf/btrGg2cZcli/MdzD53MsVVeyaRSslMyP60/img.png" />
        </NikeLogo>
        <h1>BOOST YOUR SPEED</h1>
        <h2>July,02</h2>
        <h3>velog.io</h3>
        <AliceCarousel
          activeIndex={thumbIndex}
          autoWidth
          disableDotsControls
          disableButtonsControls
          items={thumbs}
          mouseTracking={false}
          onSlideChanged={syncThumbs}
          touchTracking={!mainAnimation}
        />
      </TextWrap>
      <ImgWrap>
      <Menu>
       <AiOutlineSearch />
      </Menu>
        <ImgWrapper>
          <AliceCarousel
            activeIndex={mainIndex}
            animationType="fadeout"
            animationDuration={800}
            disableButtonsControls
            infinite
            items={items}
            mouseTracking={!thumbAnimation}
            onSlideChange={syncMainBeforeChange}
            onSlideChanged={syncMainAfterChange}
            touchTracking={!thumbAnimation}
          />
        </ImgWrapper>
      </ImgWrap>
    </Contain>
  )
}
export default Banner;

const Contain = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  align-items:center;
  margin:0 auto;
  overflow:hidden;
  position:relative;
  justify-content:end;
`

const TextWrap = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  z-index:10;
  padding:200px;

  .item{
    cursor:pointer;
  }

  h1{
    font-size:100px;
    line-height:100%;
    color:#181818;
    width:100px;
  }

  h2{
    margin:30px 0 0 0;
    font-size:20px;
  }
  
  h3{
    margin:0 0 50px 0;
  }
`

const NikeLogo = styled.div`
  position:absolute;
  top:35px;
  left:50px;
`

const ImgWrap = styled.div`
  width:50%;
  height:100%;
  background:#f6f6f6;
  display:flex;
  align-items:center;
  color:#2d2d2d!important;
  position:relative;
  z-index:-1;
`

const Menu = styled.div`
  position:absolute;
  top:35px;
  right:50px;
  background:#181818;
  width:60px;
  height:60px;
  z-index:99;
  color:#fff;
  display:flex;
  align-items: center;
  justify-content:center;
  font-size:20px;
  border-radius:50%;
`

const ImgWrapper = styled.div`
  width:100%;
  height:100%;
  margin-top:-100px;

  
  img{
    width:100%;
    object-fit:cover;
  }
`

const ItemsContain = styled.div`
  width:100%;
  height:100%;
  padding: 0 10px;
`

const ItemsWrap = styled.div`
  width:100%;
  height:100%;
  border-radius:20px;
  overflow:hidden;
  margin:0 20px;

  img{
    height:100%;
    object-fit:cover;
    border:3px solid red;
  }
`

const MiniThumb = styled.div`
  width:200px;
  height:250px;
  position:relative;
`

const Mini = styled.div`
  width:90%;
  height:50%;
  display:flex;
  align-items: center;
  position:absolute;    
  border-radius:15px;
  overflow:hidden;

  img{
    border-radius:15px;
    width:100%;

    transition:0.3s;
    object-fit:cover;
  }

  img:hover {
    transform:scale(1.2);
  }

`