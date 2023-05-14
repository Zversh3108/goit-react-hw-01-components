import { StatisticsSection, Title, StatList, Item } from './Statistics.Styled';
import generateRandomColor from 'utils/randomColor';
import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title !== '' && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} color={generateRandomColor()}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
  PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  })
  ).isRequired,
  };
