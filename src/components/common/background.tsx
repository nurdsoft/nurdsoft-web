import './background.scss'

import React, { useLayoutEffect, useRef } from 'react'

import Hue from "../../images/hue.png"

const Background = () => {
  const gridRef = useRef<HTMLDivElement>(null)

  const isTouchDevice = () => {
    try{
      document.createEvent("TouchEvent")
      return true;
    }catch(err){
      return false
    }
  }

  const getMousePos = (evt: any) => {

    if(!gridRef.current) return

    const mosueX = isTouchDevice() ? evt.touches[0].pageX : evt.pageX
    const mosueY = isTouchDevice() ? evt.touches[0].pageY : evt.pageY

    gridRef.current.style.setProperty("--Xpos", mosueX + "px")
    gridRef.current.style.setProperty("--Ypos", mosueY + "px")

  }

  useLayoutEffect(() => {
    if(!gridRef.current) return
    
    const canvas = gridRef.current;
    const gridSize = 72;

    if(!canvas) return;

    for (let x = 0; x < canvas.clientWidth; x += gridSize) {
        for (let y = 0; y < canvas.clientHeight; y += gridSize) {
            const cell = document.createElement("div");
            cell.className = "grid-cell";
            cell.style.left = x + "px";
            cell.style.top = y + "px";
            canvas.appendChild(cell);
        }
    }

    document.addEventListener("mousemove", getMousePos)
    
    return () => {
      document.removeEventListener("mousemove", getMousePos)
    }

  }, [])

  return (
    <div className='universalBackgroundWrapper'>
      <img src={Hue} className='leftHue' alt='leftHue' />
      <div id='gridCanvas' ref={gridRef} className='gridCanvas'></div>
      <img src={Hue} className='rightHue' alt='rightHue' />
    </div>
  )
}

export default Background