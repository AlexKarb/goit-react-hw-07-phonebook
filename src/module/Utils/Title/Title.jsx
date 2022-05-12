import PropTypes from 'prop-types';
import style from './Title.module.css';

const Title = ({ title }) => <h2 className={style.title}>{title}</h2>;

export default Title;

Title.propTypes = {
  title: PropTypes.string,
};
