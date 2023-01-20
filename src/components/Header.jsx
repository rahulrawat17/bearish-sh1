import React from 'react'
import notificationIcon from '../assets/images/Light 1px-notification.svg'
import calendarIcon from '../assets/images/Light 1px-calendar.svg'

export const Header = () => {
  return (
    <div className='header'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12'>
            <a style={{ fontSize: '16px' }}>Dashbaord</a>
            <div className='float-right'>
              <img
                className='small-icon'
                src={calendarIcon}
                alt='calendarIcon'
              />
              <a style={{ fontSize: '16px' }}>Calendars</a>
              <div className='vl'></div>
              <img
                className='small-icon'
                src={notificationIcon}
                alt='notificationIcon'
              />
              <a style={{ fontSize: '16px' }}>notifications</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
