import styled from '@emotion/styled';
import generateRandomColor from 'utils/randomColor';
const randomColor = generateRandomColor();
export const StatisticsSection = styled.section`
display: flex;
flex-direction: column;
margin:0 auto; 
outline: 3px solid grey;
background-color: rgb(230, 230, 230);
max-width:320px;
`;

export const Title = styled.h2`
text-align:center;
color:grey;

`;
export const StatList = styled.ul`
display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width:100%;
  background-color: rgb(180, 180, 228);
`;
export const Item = styled.li`
display: flex;
width:33%;
height: 60px;
flex-grow:1;
outline:1px solid grey;
flex-direction: column;
text-align: center;
align-items: center;
justify-content:center;
background-color: ${randomColor};
color: grey;
`;