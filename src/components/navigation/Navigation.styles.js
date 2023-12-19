import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  margin-bottom: 60px;
`;

export const NavigationLink = styled.div`
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
    .icon{
        height: 15px;
        width: auto;
        color: #ffffff;
    }
    p{
        font-family: "Nunito Sans", sans-serif;
        font-size:0.75rem;
        color: rgba(#ffffff, .7);
        font-weight: 500;
    }

`;
