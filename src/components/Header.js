import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const ref = useRef();

  useEffect(()=>{
    if(mobile === true){
        ref.current.style.width = "200px";
        ref.current.style.opacity = "1";
    }else{
        ref.current.style.width = "0%";
        ref.current.style.opacity = "0";
    }
  })

  return (
    <Head>
      <Contain>
        <Logo>
          <LogoWrap>
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8cEWo%2FbtrpYlTsLjA%2F64qXOKLNlL5PAp6i9Ke8Z1%2Fimg.jpg"
              alt=""
            />
          </LogoWrap>
          <h1>카이조쿠</h1>
        </Logo>
        <NavLink>
          <ul ref={ref}>
            <li>home</li>
            <li>features</li>
            <li>portfolio</li>
            <li>resume</li>
            <li>clients</li>
            <li>blog</li>
            <li>contact</li>
            <li>
              <button>BUY NOW</button>
            </li>
          </ul>
          {mobile ? (
            <Toggle onClick={() => setMobile(false)}>
              <i className="fas fa-times"></i>
            </Toggle>
          ) : (
            <Toggle onClick={() => setMobile(true)}>
              <i className="fas fa-bars"></i>
            </Toggle>
          )}
        </NavLink>
      </Contain>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  height: 10vh;
  line-height: 10vh;
  width:100%;
`;

const Contain = styled.div`
  padding: 15px 0 0 0;
  display: flex;
  justify-content: space-between;
  max-width: 95%;
  margin: auto;
  height: 100%;
`;

const Logo = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 15px;
    margin: 0 0 0 30px;
  }
`;

const LogoWrap = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 140%;
  }
`;

const NavLink = styled.div`
  display: flex;
  max-idth: 80%;
  align-items:center;

  ul {
    width:100%;
    height:100%;
    display: flex;
    text-transform: uppercase;
    transition:0.3s;
    position:relative;
    z-index:-1;

    @media screen and (max-width: 868px) {
      flex-direction: column;
      width: 0%;
      opacity: 0;
    }
  }

  li {
    margin: 0 0 0 30px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: normal;

    button {
      padding: 18px 25px;
      border-radius: 6px;
      transition: 0.3s all ease;
      cursor: pointer;
      height: fit-content;
      color: #ff014f;
      background: linear-gradient(145edg, #e2e8ec, #ffffff);
      box-shadow: 4px 4px 8px #cbcbcb;
    }
  }

  li:hover {
    color: #ff014f;
  }
`;

const Toggle = styled.button`
  padding: 18px 25px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  height: fit-content;
  color: #ff014f;
  background: linear-gradient(145edg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb;
  display: none;
  position:relative;
  z-index:999;

  @media screen and (max-width: 868px) {
    display: block;
  }
`;
