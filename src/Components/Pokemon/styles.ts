import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;
  border: 3px #fff solid;

  &:hover {
    border: 3px#f3f3f3 solid;
    background: #f3f3f3;;
  }

  > img {
    margin-bottom: 16px;
  }

  > span {
    font-size: 20px;
  }
`