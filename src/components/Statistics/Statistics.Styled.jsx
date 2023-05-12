import styled from '@emotion/styled';
export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  outline: 3px solid grey;
  max-width: 320px;
  margin-top: 3px;
  border-radius: 5px;
  margin-bottom: 3px;
`;

export const Title = styled.h2`
  text-align: center;
  color: grey;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: rgb(180, 180, 228);
`;

export const Item = styled.li`
  display: flex;
  width: 33%;
  height: 60px;
  flex-grow: 1;
  gap: 4px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  color: white;
`;
