import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click');
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onClick} text="Add" />
    </header>
  )
}

Header.defaultProps = {
  title: 'React TaskTrackr',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
export default Header;
