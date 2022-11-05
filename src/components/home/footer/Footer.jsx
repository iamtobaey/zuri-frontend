import React from 'react'
import './footer.css'
import ZuriIntern from '../../../assets/images/zuri.png'
import IFG from '../../../assets/images/IFG.png'

const Footer = () => {
  return (
    <section id="footer" className='container'>
      <div className="footer">
        <img src={ZuriIntern} alt="" />
        <span>HNG Internship 9 Frontend Task</span>
        <img src={IFG} alt="" className='ifg'/>
      </div>
    </section>
  )
}

export default Footer