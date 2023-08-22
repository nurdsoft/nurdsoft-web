import './serviceview.scss'

import React, { useEffect, useRef } from 'react'

import useIntersectionObserver from '../common/intersectionObserver';
import { useWindowSize } from '../common/screenSizeObserver';

interface IServiceView {
    heading: string;
    description: string;
    index: number;
    setCurrentActiveSlide: React.Dispatch<React.SetStateAction<number>>
    currentActiveSlide: number
}

const ServiceView = ({heading, description, index, setCurrentActiveSlide, currentActiveSlide}: IServiceView) => {
    const triggerRef = useRef<any>();
    const imageRef = useRef<any>();
    const stopTransformation = useRef<any>(false)
    const previousOffset = useRef<number>(0)
    const scrollingUp = useRef<boolean>(true)
    const [width, _] = useWindowSize()

    const dataRef = useIntersectionObserver(triggerRef, {
        threshold: Array.from({ length: 101 }, (_, index) => +(index * 0.01).toFixed(2)),
        freezeOnceVisible: false,
        root: !(typeof document === "undefined") ? document.getElementById('parallaxLayoutServices') : null
    });

    const getScrollDirection = () => {
        const scroller = document.getElementById('parallaxLayoutServices')
        if(!scroller) return;
        scroller.addEventListener('scroll', (e: Event) => {
            if(!e || !e.target) return
            const scrollTop = (e.target as HTMLElement).scrollTop
            if(scrollTop > previousOffset.current) {
                scrollingUp.current = true
            } else {
                scrollingUp.current = false
            }
            previousOffset.current = scrollTop
        })
    }

    useEffect(() => {
        if(!imageRef.current || !dataRef) return
        const intersectionRatio = +(dataRef.intersectionRatio)?.toFixed(2) * 100
        const menu = document.getElementsByClassName('servicespage5_menu')[0] as HTMLElement
        const contentArea = document.getElementById('servicespage5_content')
        if(!menu || !contentArea) return
        
        // logic to lock and unlock side menu
        if(width > 966){
            if(intersectionRatio === 100 || (currentActiveSlide >= 1 && currentActiveSlide < 8)){
                menu.classList.add('fixed')
                contentArea.style.paddingLeft = '282px'
            }
            if(
                (currentActiveSlide === (index - 1) && index === 9 && intersectionRatio === 100) ||
                (currentActiveSlide === 0 && intersectionRatio < 100 && !scrollingUp.current)
            ){
                menu.classList.remove('fixed')
                contentArea.style.paddingLeft = '0px'
                
                if(currentActiveSlide === 8){
                    menu.style.alignSelf = 'flex-end'
                }else{
                    menu.style.alignSelf = 'flex-start'
                }
            }
        }else{
            contentArea.style.paddingLeft = '0px'
        }
        
        if(!stopTransformation.current){
            imageRef.current.style.opacity = 1
            imageRef.current.style.transform = `translateY(${(74 - (1.4 * (intersectionRatio / 2) + 8))}vh)`
        }
        if(intersectionRatio > 98){
            stopTransformation.current = true
        }
        
        if(intersectionRatio > 50){
            setCurrentActiveSlide(index - 1)
        }
        if(
            (intersectionRatio < 2 && index > 1) ||
            (intersectionRatio <= 12 && index === 1 && !scrollingUp.current)
        ){
            imageRef.current.style.opacity = 0
            imageRef.current.style.transform = `translateY(74vh - 90px)`
            stopTransformation.current = false
        }
    }, [dataRef?.intersectionRatio])

    useEffect(() => {
        getScrollDirection()
    }, [])

    return (
        <div className='servicespage5_serviceWrapper' ref={triggerRef}>
            <div className='image_contianer' ref={imageRef}></div>
            <h2 className='service_heading'>{heading}</h2>
            <p className='service_description'>{description}</p>
        </div>
    )
}

export default ServiceView