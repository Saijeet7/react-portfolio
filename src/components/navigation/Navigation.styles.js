import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavigationWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  margin-bottom: 60px;
`;

export const NavigationLink = styled(NavLink)`
  border: 1px solid #ffffff;
  border-radius: 100%;
  width: 70px;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  text-decoration: none;
  transition: all 0.2s ease-in;
  .icon {
    height: 15px;
    width: auto;
    color: #ffffff;
    transition: all 0.4s ease;

  }
  p {
    font-family: "Nunito Sans", sans-serif;
    font-size: 0.75rem;
    color: #ffffff;
    font-weight: 500;
    text-decoration: none;
  }
  &.active {
    border: 1px solid #ff6f00;
    p {
      color: #ff6f00;
    }
    .icon {
      color: #ff6f00;
    }
  }
  &:hover{
    border: 1px solid #1983d4;
    p {
      color: #1983d4;
    }
    .icon {
      transform: rotate(360deg);
      color: #1983d4;
    }
  }
`;