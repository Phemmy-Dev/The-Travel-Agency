import bgImg from '../../assets/images/7.jpg'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Hero.css'
const Hero = (props) => {
  return (
    <>
      <div className={props.contCname}>
        <div className="bg_img">
            <img src={bgImg} alt="Hero Image" style={{backgroundPosition: 'center', backgroundSize: 'cover'}} />
        </div>

        <div className={props.sectionCname}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Link to="/s">{props.herobtn}</Link>
        </div>
      </div>
    </>
  )
}


Hero.propTypes = {
    title: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired, 
    herobtn: PropTypes.string.isRequired, 
    contCname: PropTypes.string.isRequired, 
    sectionCname: PropTypes.string.isRequired, 
    otherProp: PropTypes.any,           
  };

export default Hero
