import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  outline: 3px solid grey;
  background-color: white;
  max-width: 320px;
  border-radius: 5px;`;

export const Description = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
export const Avatar = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0;
`;
export const Name = styled.p`
  font-size: 24px;
  margin: 0;
  font-weight: bold;
`;
export const Tag = styled.p`
  font-size: 18px;
  color: grey;
  margin: 0;
`;
export const Location = styled.p`
  font-size: 18px;
  color: grey;
  margin: 0;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

`;
export const StatsItem = styled.li`
  display: flex;
  width: 33%;
  height: 90px;
  flex-grow: 1;
  outline: 1px solid grey;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-right: 20px;
  margin-right: 0;
  justify-content: center;
  background-color: #e1e3e2;
`;

export const Label = styled.span`
  font-size: 16px;
  margin-bottom: 4px;
  color: rgb(95, 94, 94);
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
