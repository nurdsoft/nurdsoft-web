import React, { useEffect } from 'react';
import Wrapper from '../wrapper';
import './careerPage3.scss';
import Button from '../button';
import { navigate } from 'gatsby';

const CareerPage3 = () => {
  const handleAboutUs = () => {
    navigate('/about/')
  }

  useEffect(() => {
    let elementsToStack = 0
    document.getElementById('career_scroller')?.addEventListener('scroll', () => {
      const el = document.getElementById('careerPage3_parentContainer');
      const scroller = document.getElementById('career_scroller');
      const careerPageCardView = document.getElementById('careerPage3_cardView')
      if(careerPageCardView){
        careerPageCardView.style.overflow = 'hidden'
      }
      
      if(el && el?.getBoundingClientRect().top < 93 && scroller?.style){
        console.log("setting hidden 1", el?.getBoundingClientRect().top);
        
        scroller.style.overflow = 'hidden'
        if(careerPageCardView){
          careerPageCardView.style.overflow = 'hidden scroll'
        }
        document.getElementById('careerPage3_cardView')?.addEventListener( 'scroll', () => {
          console.log(careerPageCardView?.scrollTop, 'scrolltop', elementsToStack);
          
          if(
            (careerPageCardView &&
            (careerPageCardView?.scrollHeight - careerPageCardView?.scrollTop) <= document.documentElement.clientHeight) ||
            (careerPageCardView?.scrollTop === 0 && elementsToStack <= 0)
          ){
            scroller.style.overflow = 'hidden scroll'
          }else{
            scroller.style.overflow = 'hidden'
          }
          const cardsArray = Array.from(document.getElementsByClassName('careerPage3_card'))
          if(careerPageCardView){
            console.log(Math.floor(careerPageCardView.scrollTop / 208), careerPageCardView.scrollTop, elementsToStack, 'lol' )
            if(careerPageCardView.scrollTop === 0 && elementsToStack >= 0) {
              console.log("entering here", elementsToStack);
              cardsArray[elementsToStack].classList.remove('fixed')
              elementsToStack = elementsToStack - 1
              if(elementsToStack >= 0){
                careerPageCardView.scrollTop = 200
              }
              if(elementsToStack === 0){
                careerPageCardView.style.paddingTop = `0px`
              }
            }
            if(Math.floor(careerPageCardView.scrollTop / 208) >= 1 && elementsToStack < (cardsArray.length - 2)){
              elementsToStack = elementsToStack + 1
            }
            for(let i = 0; i < cardsArray.length; i++){
              if(i <= elementsToStack && !cardsArray[i].classList.contains('fixed') && elementsToStack < (cardsArray.length - 1)){
                cardsArray[i].classList.add('fixed')
                careerPageCardView.style.paddingTop = `${250}px`
                console.log("setting scroll top 1", i, elementsToStack, cardsArray[i].classList.contains('fixed'), careerPageCardView.scrollTop);
                careerPageCardView.scrollTop = 1
              }
            }
          }
        })
      }
    })
  }, [])

  return (
    <Wrapper>
      <div className="careerPage3_parentContainer" id="careerPage3_parentContainer">
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