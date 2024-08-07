import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);       
    };
  return (
    <section className='qualification section'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 
                    ? "qualification__button qualification__active  button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon">Education</i>
                </div>
                <div className={
                    toggleState === 2 
                    ? "qualification__button qualification__active  button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon">Experience</i>
                </div>
            </div>
            <div className="qualification__sections">
                <div className={
                    toggleState === 1 
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"
                    }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Information Technology</h3>
                            <span className="qualification__subtitle">Hutech University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2018 - 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Conversational English - CEFR B1</h3>
                            <span className="qualification__subtitle">Wall Street English</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2022 - 2024
                            </div>
                        </div>
                    </div>
                </div>

                <div className={
                    toggleState === 2
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"
                    }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Developer</h3>
                            <span className="qualification__subtitle">VNPT</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>March 2021 - September 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Software Developer</h3>
                            <span className="qualification__subtitle">VINA ASTEMS</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>November 2022 - June 2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
