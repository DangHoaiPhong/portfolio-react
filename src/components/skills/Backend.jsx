import React from 'react'

const Backend = () => {
  return (
    <div className='skills__content'>
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">FireBase</h3>
                    <span className='skills__level'>Basic</span>
                </div>
            </div>
            
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">MySQL</h3>
                    <span className='skills__level'>Basic</span>
                </div>
            </div>
            
        </div>
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Microsoft SQL Server</h3>
                    <span className='skills__level'>Basic</span>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Backend
