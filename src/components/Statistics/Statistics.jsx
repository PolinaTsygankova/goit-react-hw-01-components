import PropTypes from 'prop-types';
import { Title, List, Item, StatisticsSection } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </Item>
        ))}
      </List>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
