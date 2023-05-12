import { StatisticsSection, Title, StatList, Item } from "./Statistics.Styled";
export const Statistics = ({title, stats}) =>{
    return(
    <StatisticsSection>
     {title !== '' &&  <Title>{title}</Title>}
           
      
  <StatList>
    {stats.map(({id, label, percentage}) =>(
    <Item key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </Item>
      ))}  
      </StatList>
</StatisticsSection>
    )
}