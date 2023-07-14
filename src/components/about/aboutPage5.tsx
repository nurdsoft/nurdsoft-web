import React, { useRef} from 'react'
import './aboutPage5.scss'
import Wrapper from '../wrapper';
import { animated, useSpring } from '@react-spring/web';
import useIntersectionObserver from '../common/intersectionObserver';
import Stage from '../../images/stage.png';
import Button from '../button';

const AboutPage5 = () => {
  const triggerRef = useRef<any>();

  const dataRef = useIntersectionObserver(triggerRef, {
    threshold: 0.8,
    freezeOnceVisible: false
  });

  const headerStyle = useSpring({
    config: { duration: 500 },
    from: { opacity: 0 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
  });

  return (
    <Wrapper>
      <div className='aboutPage5_parentContainer' ref={triggerRef} >
        <animated.div className="aboutPage5_animatedDiv" style={headerStyle}>
          <h1 className='aboutPage5_joinUs'>We’re Hiring<br/> Join Us</h1>
          <Button buttonText='OPEN POSITION' />
        </animated.div>
        <img className='aboutPage5_stage' src={Stage} alt='stage' />
      </div>
    </Wrapper>
  )
}

export default AboutPage5