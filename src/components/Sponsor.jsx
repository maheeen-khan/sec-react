import React from 'react'
import img1 from '../assets/spon1.png'
import img2 from '../assets/spon2.png'
import img3 from '../assets/spon3.png'
import img4 from '../assets/spon4.png'
import img5 from '../assets/spon5.png'

const Sponsor = () => {
  return (
    <>
    <div className="container my-5 pt-5 spon-cont">
        <div className="row spon pt-3">
            <div className="col">
                <img src={img1} alt="" className='spon-img1'/>
            </div>
            <div className="col">
                <img src={img2} alt="" className='spon-img2'/>
            </div>
            <div className="col">
                <img src={img3} alt="" className='spon-img3 rounded'/>
            </div>
            <div className="col">
                <img src={img4} alt="" className='spon-img4'/>
            </div>
            <div className="col">
                <img src={img5} alt="" className='spon-img5'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sponsor