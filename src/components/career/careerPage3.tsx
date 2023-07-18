import React, { useEffect, useRef, useState } from 'react';
import Wrapper from '../wrapper';
import './careerPage3.scss';
import Button from '../button';
import { navigate } from 'gatsby';
import useIntersectionObserver from '../common/intersectionObserver';

const CareerPage3 = () => {
  const elementsToStack = useRef(0)
  const activatingFromOutside = useRef(true)

  const triggerRef = useRef<any>()

  const cardRef = useIntersectionObserver(triggerRef, {
    threshold: 0.2,
    freezeOnceVisible: false,
    root: document.getElementById('career_scroller')
  })

  const handleAboutUs = () => {
    navigate('/about/')
  }

  useEffect(() => {
    const scroller = document.getElementById('career_scroller');
    const careerPageCardView = document.getElementById('careerPage3_cardView')
    
    if(cardRef && cardRef?.isIntersecting && scroller && careerPageCardView && activatingFromOutside.current){
      scroller.scrollTo({
        top: 2220,
        behavior: 'smooth'
      })
      scroller.style.overflow = 'hidden'
      careerPageCardView.style.overflow = 'hidden scroll'
      careerPageCardView.scrollTop = 1
      activatingFromOutside.current = false
    }

    scroller?.addEventListener('scroll', () => {
      activatingFromOutside.current = true
      if(elementsToStack.current < 0 ){
        elementsToStack.current = 0
      }
    })
    
    careerPageCardView?.addEventListener( 'scroll', () => {
      if(!scroller || !careerPageCardView){
        return
      }
      activatingFromOutside.current = false
      if(
        (careerPageCardView?.scrollHeight - careerPageCardView?.scrollTop) <= document.documentElement.clientHeight ||
        (careerPageCardView?.scrollTop === 0 && elementsToStack.current <= 0)
      ){
        if((careerPageCardView?.scrollHeight - careerPageCardView?.scrollTop) <= document.documentElement.clientHeight){
          scroller.scrollTo({
            top: 3336,
            behavior: 'smooth'
          })
          careerPageCardView.style.overflow = 'hidden'
        } else if(careerPageCardView?.scrollTop === 0 && elementsToStack.current <= 0){
          scroller.scrollTo({
            top: 1049,
            behavior: 'smooth'
          })
          careerPageCardView.style.overflow = 'hidden'
        }
        scroller.style.overflow = 'hidden scroll'
      }
      const cardsArray = Array.from(document.getElementsByClassName('careerPage3_card'))
      if(careerPageCardView){
        // logic to remove the fixed class
        if(careerPageCardView.scrollTop === 0 && elementsToStack.current >= 0) {
          cardsArray[elementsToStack.current].classList.remove('fixed')
          if(elementsToStack.current === 0){
            careerPageCardView.style.paddingTop = `0px`
          }
          if(elementsToStack.current >= 0){
            careerPageCardView.scrollTop = 200
          }
          elementsToStack.current = elementsToStack.current - 1
        }
        // logic to increment the fixed elements
        if(Math.floor(careerPageCardView.scrollTop / 208) >= 1 && elementsToStack.current < (cardsArray.length - 2)){
          elementsToStack.current = elementsToStack.current + 1
        }
        // logic to add the fixed class
        for(let i = 0; i < cardsArray.length; i++){
          if(i <= elementsToStack.current && !cardsArray[i].classList.contains('fixed') && elementsToStack.current < (cardsArray.length - 1)){
            cardsArray[i].classList.add('fixed')
            careerPageCardView.style.paddingTop = `${250}px`
            careerPageCardView.scrollTop = 1
          }
        }
      }
    })
  }, [cardRef?.intersectionRatio])

  return (
    <Wrapper>
      <div className="careerPage3_parentContainer" ref={triggerRef} id="careerPage3_parentContainer">
        <div className='careerPage3_headingWrapper'>
          <h1 className='careerPage3_heading'>
            Open <br/> Position
          </h1>
          <Button buttonText='ABOUT US' onClick={handleAboutUs} />  
        </div>
        <div className='careerPage3_cardView_wrapper'>
          <div className='careerPage3_cardView' id="careerPage3_cardView">
            <div className='careerPage3_card' >1</div>
            <div className='careerPage3_card' >2</div>
            <div className='careerPage3_card' >3</div>
            <div className='careerPage3_card' >4</div>
            <div className='careerPage3_card' >5</div>
            <div className='careerPage3_card' >6</div>
            <div className='careerPage3_card' >7</div>
            <div className='careerPage3_card' >8</div>
            <div className='careerPage3_card' >9</div>
            <div className='careerPage3_card' >10</div>
            <div className='careerPage3_card' >11</div>
            <div className='careerPage3_card' >12</div>
            <div className='careerPage3_card' >13</div>
            <div className='careerPage3_card' >14</div>
            <div className='careerPage3_card' >15</div>
            <div className='careerPage3_card' >16</div>
            <div className='careerPage3_card' >17</div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default CareerPage3