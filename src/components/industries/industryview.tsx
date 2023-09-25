import './industryview.scss'

import React, { useEffect, useRef } from 'react'

import useIntersectionObserver from '../common/intersectionObserver';
import { useWindowSize } from '../common/screenSizeObserver';

interface IIndustryView {
    heading: string;
    description: string;
    index: number;
    setCurrentActiveSlide: React.Dispatch<React.SetStateAction<number>>
    currentActiveSlide: number
    id: string
}

const IndustryView = ({heading, description, index, setCurrentActiveSlide, currentActiveSlide, id}: IIndustryView) => {
    const triggerRef = useRef<any>();
    const imageRef = useRef<any>();
    const stopTransformation = useRef<any>(false)
    const previousOffset = useRef<number>(0)
    const scrollingUp = useRef<boolean>(true)
    const [width, _] = useWindowSize()

    const dataRef = useIntersectionObserver(triggerRef, {
        threshold: Array.from({ length: 101 }, (_, index) => +(index * 0.01).toFixed(2)),
        freezeOnceVisible: false,
        root: !(typeof document === "undefined") ? document.getElementById('parallaxLayoutIndustry') : null
    });

    const getScrollDirection = () => {
        const scroller = document.getElementById('parallaxLayoutIndustry')
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

    const handleIndustryViewScrolling = () => {
        const service = triggerRef.current as HTMLDivElement
        if(!imageRef.current || !dataRef || !service) return
        // const intersectionRatio = +(dataRef.intersectionRatio)?.toFixed(2) * 100
        const wrapper = document.getElementById("industriespage1_parentContainer")
        const contentArea = document.getElementById('industriespage1_content')
        const scrollerHeight = (document.getElementById('parallaxLayoutIndustry') as HTMLDivElement).offsetHeight
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
        if(
            (intersectionRatio < 2 && index > 1) ||
            (intersectionRatio <= 12 && index === 1 && !scrollingUp.current)
        ){
            imageRef.current.style.opacity = 0
            imageRef.current.style.transform = `translateY(74vh - 90px)`
            stopTransformation.current = false
        }
    }

    useEffect(() => {
        handleIndustryViewScrolling()
        const scroller = document.getElementById('parallaxLayoutIndustry')
        if(!scroller) return;
        scroller.addEventListener('scroll', handleIndustryViewScrolling)

        return () => {
            scroller.removeEventListener('scroll', handleIndustryViewScrolling)
        }
    }, [dataRef?.intersectionRatio])

    useEffect(() => {
        getScrollDirection()
    }, [])

    return (
        <div className='industriespage1_serviceWrapper' id={id} ref={triggerRef}>
            <div className='image_contianer' ref={imageRef}></div>
            <h2 className='service_heading'>{heading}</h2>
            <p className='service_description'>{description}</p>
        </div>
    )
}

export default IndustryView