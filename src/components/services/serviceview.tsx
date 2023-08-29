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

    const handleServiceViewScrolling = () => {
        const service = triggerRef.current as HTMLDivElement
        if(!imageRef.current || !dataRef || !service) return
        // const intersectionRatio = +(dataRef.intersectionRatio)?.toFixed(2) * 100
        const wrapper = document.getElementById("servicespage5_parentContainer")
        const contentArea = document.getElementById('servicespage5_content')
        const scrollerHeight = (document.getElementById('parallaxLayoutServices') as HTMLDivElement).offsetHeight
        const serviceTop = (triggerRef.current as HTMLDivElement).getBoundingClientRect().top
        const actialIntersectionRatio = ((scrollerHeight - serviceTop) / scrollerHeight)* 100
        const intersectionRatio = actialIntersectionRatio * 1.4
        
        if(!contentArea || !wrapper || actialIntersectionRatio > 200) return
        
        // logic to lock and unlock side menu
        if(width > 966){
            wrapper.style.overflow = "unset"
        }else{
            contentArea.style.paddingLeft = '0px'
        }
        
        if(!stopTransformation.current ){
            imageRef.current.style.opacity = 1
            imageRef.current.style.transform = `translateY(${(74 - (1.4 * (intersectionRatio / 2) + 8))}vh)`
        }
        if(intersectionRatio > 98){
            stopTransformation.current = true
        }
        
        if(actialIntersectionRatio > 51 || (actialIntersectionRatio > 100 && actialIntersectionRatio < 150)){
            setCurrentActiveSlide(index - 1)
        }
        // console.log();
        
        // if(currentActiveSlide+1 > index && scrollingUp.current && !dataRef.isIntersecting){
        //     console.log("hide", index)
        // }
    }

    useEffect(() => {
        handleServiceViewScrolling()
        const scroller = document.getElementById('parallaxLayoutServices')
        if(!scroller) return;
        scroller.addEventListener('scroll', handleServiceViewScrolling)

        return () => {
            scroller.removeEventListener('scroll', handleServiceViewScrolling)
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