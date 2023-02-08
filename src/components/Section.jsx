import PropTypes from 'prop-types';

export const Section = ({title, children}) => {
    return (
        <div style={{
            height: '100vh',
            fontSize: 40,
            color: '#010101'
          }}
          >
            
            <h2>{title}</h2>
            {children}
        </div>
    )
}


Section.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
  };