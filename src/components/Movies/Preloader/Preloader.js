import React from "react";
import './Preloader.css'

export default function Preloader({isLoading}) {
  return (
    <div className={`preloader__container ${isLoading ? 'preloader_open' : ''}`}>
      <div className={`preloader ${isLoading ? 'preloader_open' : ''}`}>
      </div>
    </div>
  )
}
