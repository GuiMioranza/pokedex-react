import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;
  border: 3px #fff solid;
  cursor: pointer;
  text-decoration: none;
  color: #26580f;


  &:hover {
    border: 3px #26580f;
    background: #f3f3f3;;
  }

  > img {
    margin-bottom: 16px;
  }

  > span {
    font-size: 20px;
  }
`