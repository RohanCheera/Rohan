import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './timeline.css'
import {FaUniversity} from 'react-icons/fa'
import {LiaSchoolSolid} from 'react-icons/lia'
import {GiAchievement} from 'react-icons/gi'

function Timeline() {
  return (
    <div className='main-timeline'>
      <h1 className='timeline-title'>Education & Certifications</h1>
    <div className='timeline'>
      <div className='timeline-content left-content'>
        {/* <img src='../../assets/scl.png' alt='school'/> */}
        <div className='img'><FaUniversity/></div>
        <div className='text-box'>
          <h2>Alphabet Inc.</h2>
          <small>2018-2020</small>
          <p >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          <span className='left-content-arrow'></span>
        </div>
      </div>
      <div className='timeline-content right-content'>
      {/* <img src='../../assets/scl.png' alt='school'/> */}
      <div className='img'><GiAchievement/></div>
        <div className='text-box'>
          <h2>Alphabet Inc.</h2>
          <small>2018-2020</small>
          <p >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          <span className='right-content-arrow'></span>
        </div>
      </div>
      <div className='timeline-content left-content'>
      {/* <img src='../../assets/scl.png' alt='school'/> */}
      <div className='img'><LiaSchoolSolid/></div>
        <div className='text-box'>
          <h2>Alphabet Inc.</h2>
          <small>2018-2020</small>
          <p >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          <span className='left-content-arrow'></span>
        </div>
      </div>
      <div className='timeline-content right-content'>
      {/* <img src='../../assets/scl.png' alt='school'/> */}
      <div className='img'><GiAchievement/></div>
        <div className='text-box'>
          <h2>Alphabet Inc.</h2>
          <small>2018-2020</small>
          <p >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          <span className='right-content-arrow'></span>
        </div>
      </div>
      <div className='timeline-content left-content'>
      {/* <img src='../../assets/scl.png' alt='school'/> */}
      <div className='img'><LiaSchoolSolid/></div>
        <div className='text-box'>
          <h2>Alphabet Inc.</h2>
          <small>2018-2020</small>
          <p >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          <span className='left-content-arrow'></span>
        </div>
      </div>
      <div className='timeline-content right-content'>
      {/* <img src='../../assets/scl.png' alt='school'/> */}
      <div className='img'><GiAchievement/></div>
        <div className='text-box'>
          <h2>Alphabet Inc.</h2>
          <small>2018-2020</small>
          <p >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          <span className='right-content-arrow'></span>
        </div>
      </div>
      <div className='timeline-content left-content'>
      {/* <img src='../../assets/scl.png' alt='school'/> */}
      <div className='img'><LiaSchoolSolid/></div>
        <div className='text-box'>
          <h2>Alphabet Inc.</h2>
          <small>2018-2020</small>
          <p >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          <span className='left-content-arrow'></span>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Timeline