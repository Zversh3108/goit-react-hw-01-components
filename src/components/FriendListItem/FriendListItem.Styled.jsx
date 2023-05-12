import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  margin: 0 auto;
  gap: 10px;
  outline: 1px solid grey;
  max-width: 320px;
  padding: 10px 0px;
  list-style: none;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  width: 97%;
  border-radius: 2px;
  font-weight: bold;

  &::before {
    margin-top: 15px;
    margin-left: 5px;
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
  }
`;
