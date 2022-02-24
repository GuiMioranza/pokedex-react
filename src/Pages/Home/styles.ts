import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 87px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 24px;
  width: 1180px;
  background: #fff;
  top: 0px;
  position: fixed;

  > input {
    width: 45%;
    padding: 10px 8px;
    margin-right: 10px;
  }
  > button {
    padding: 10px;
    margin-right: 10px;
  }
`;

export const ListFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 27px 0px;
`;

export const LoadMoreButton = styled.button`
  padding: 11px 19px;
  cursor: grab;
`;