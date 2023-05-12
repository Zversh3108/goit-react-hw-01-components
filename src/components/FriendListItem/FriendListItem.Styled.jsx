import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  margin: 0 auto;
  gap: 10px;
  outline: 1px solid grey;
  background-color: rgb(230, 230, 230);
  max-width: 320px;
  padding: 10px 0px;
  list-style: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  width: 97%;

  /* Стилі для псевдоелемента залежно від isOnline */
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
    position: absolute;

  }
`;