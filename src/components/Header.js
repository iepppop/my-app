import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [mobile, setMobile] = useState(false);

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
          <h1>해적왕</h1>
        </Logo>
        <NavLink>
              <NavUl mobile={mobile}>
              <li>home</li>
              <li>features</li>
              <li>portfolio</li>
              <li>blog</li>
              <li>contact</li>
              <li>
                <button>FOLLOW</button>
              </li>
            </NavUl>
            <Toggle onClick={() => setMobile(!mobile)}>
              {!mobile ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
            </Toggle>
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
  padding:0 20px;
  display: flex;
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 15px;
    margin: 0 0 0 30px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
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
  height: 100%;
  display:flex;
  align-items: center;
`;

const NavUl = styled.ul`
  font-weight:600;
  height:100%;
  display:flex; 
  transition:0.3s;
  
  @media screen and (max-width: 868px) {
    flex-direction: column;
    align-items:flex-end;
    position:fixed;
    top:100px;
    right:${(props)=> (props.mobile === true ? '40px' : '-200px')}

}

  li {
    display:inline-block;
    margin:0 0 0 20px;
  }

  
  button {
    padding: 18px 25px;
    border-radius: 6px;
    transition: 0.3s all ease;
    cursor: pointer;
    height: fit-content;
    color: #ff014f;
    background: linear-gradient(145edg, #e2e8ec, #ffffff);
    box-shadow: 2px 2px 8px #cbcbcb;
    width:130px;
    font-weight:800;
  }

  li:hover {
    color: #ff014f;
  }
`

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
    display:inline-block;
  }
`;
