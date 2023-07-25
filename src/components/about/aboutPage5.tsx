import React, { useRef} from 'react'
import './aboutPage5.scss'
import Wrapper from '../wrapper';
import { animated, useSpring } from '@react-spring/web';
import useIntersectionObserver from '../common/intersectionObserver';
import Stage from '../../images/stage.png';
import Button from '../button';
import { navigate } from "gatsby";

const AboutPage5 = () => {
  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.8,
    freezeOnceVisible: false
  });

  const headerStyle = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, transform: 'translateY(200px)' },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: dataRef?.isIntersecting ? 'translateY(0px)' : 'translateY(200px)'
    },
  });

  const onHiringClick = () => {
    navigate("/career/");
  };

  return (
    <Wrapper id='aboutPage5_parentContainer' >
      <div className='aboutPage5_parentContainer' ref={triggerRef} >
        <animated.div className="aboutPage5_animatedDiv" style={headerStyle}>
          <h1 className='aboutPage5_joinUs'>We’re Hiring<br/> Join Us</h1>
          <Button buttonText='OPEN POSITION' onClick={onHiringClick} />
        </animated.div>
        <img className='aboutPage5_stage' src={Stage} alt='stage' />
      </div>
    </Wrapper>
  )
}

export default AboutPage5