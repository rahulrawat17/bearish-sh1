import React from 'react'
import bearishIcon from '../assets/images/Bearish 150 x 150@2x.png'
import searchIcon from '../assets/images/Light 1px-search.svg'
import homeIcon from '../assets/images/Light 1px-home.svg'
import videoCallIcon from '../assets/images/Light 1px-video_recorder.svg'
import inboxIcon from '../assets/images/Light 1px-mail.svg'
import workspaceIcon from '../assets/images/Group 2306.svg'
import createIcon from '../assets/images/Light 1px-add_circled.svg'
import calendarIcon from '../assets/images/Light 1px-calendar.svg'
import messageIcon from '../assets/images/Light 1px-message.svg'
import contactIcon from '../assets/images/Light 1px-group.svg'
import contactOneIcon from '../assets/images/Light 1px-person.svg'
import double_backward from '../assets/images/Light 1px-chevron_double_backward.svg'
import chevron_right from '../assets/images/Light 1px-chevron_down-1.svg'
import chevron_up from '../assets/images/Light 1px-chevron_down.svg'
import setting_icon from '../assets/images/gear.png'

// function to toggle sideBar
const sideBarToggleFunc = () => {
  document.getElementsByTagName('body')[0].classList.toggle('sidebar-hide')
  document.getElementById('dashboard').classList.toggle('dashboard-normal')
}

// function to toggle sidebar dropdown
const sideBarToggleDropDownFunc = () => {
  var hamburger = document.getElementById('deviceOpenTag')
  var workspaceUpIcon = document.getElementById('workspaceUpIcon')
  hamburger.classList.toggle('open')
  workspaceUpIcon.classList.toggle('crossRotate')
}

// function for child elements to not toggle during parent onclick
const deviceOpenChildFunc = e => {
  // to ignore parent onclick event
  e.stopPropagation()
  var hamburger = document.getElementById('deviceOpenTag')
  hamburger.classList.add('open')
}

export const NavBar = () => {
  return (
    <div className='sidebar sidebar-hide-to-small sidebar-shrink'>
      <div className='nano'>
        <div className='nano-content'>
          <ul>
            <li
              id='dashbaordOpenTag'
              onClick={() => {
                sideBarToggleFunc()
              }}
            >
              <a className='sidebar-sub-toggle'>
                <img
                  className='small-icon'
                  src={bearishIcon}
                  alt='bearishIcon'
                />
                Bearish OS
                <img
                  className='small-icon sidebar-collapse-img'
                  src={double_backward}
                  alt='double_backward'
                />
              </a>
            </li>
            <li
              id='dashbaordOpenTag'
              onClick={() => {
                sideBarToggleFunc()
              }}
            >
              <a className='sidebar-sub-toggle'>
                <img className='small-icon' src={searchIcon} alt='searchIcon' />
                Search Bearish OS
              </a>
            </li>

            <li id='dashbaordOpenTag'>
              <a className='sidebar-sub-toggle'>
                <img className='small-icon' src={homeIcon} alt='homeIcon' />
                Dashboard
              </a>
            </li>

            <li id='dashbaordOpenTag'>
              <a className='sidebar-sub-toggle'>
                <img
                  className='small-icon'
                  src={videoCallIcon}
                  alt='videoCallIcon'
                />
                <img
                  className='small-icon sidebar-collapse-img'
                  src={chevron_right}
                  alt='chevron_right'
                />
                Video Calls
              </a>
            </li>
            <li id='dashbaordOpenTag'>
              <a className='sidebar-sub-toggle'>
                <img className='small-icon' src={inboxIcon} alt='inboxIcon' />
                <img
                  className='small-icon sidebar-collapse-img'
                  src={chevron_right}
                  alt='chevron_right'
                />
                Inbox
              </a>
            </li>
            <hr />
            <li className='label'></li>
            <li
              id='deviceOpenTag'
              onClick={() => {
                sideBarToggleDropDownFunc()
              }}
            >
              <a className='sidebar-sub-toggle'>
                <img
                  id="workspaceUpIcon"
                  className='small-icon'
                  src={workspaceIcon}
                  alt='workspaceIcon'
                />
                Workspaces
                <img
                  className='small-icon sidebar-collapse-img'
                  src={chevron_up}
                  alt='chevron_up'
                />
              </a>
              <ul>
                <li>
                  <a>
                    <img
                      className='small-icon'
                      src={searchIcon}
                      alt='searchIcon'
                    />
                    Search a Workspace
                  </a>
                </li>
                <li
                  style={{ position: 'relative' }}
                  onClick={e => {
                    deviceOpenChildFunc(e)
                  }}
                >
                  <a>
                    <img
                      className='small-icon'
                      src={createIcon}
                      alt='createIcon'
                    />
                    <img
                      className='small-icon sidebar-collapse-img'
                      src={chevron_up}
                      alt='chevron_up'
                    />
                    Workspace Name
                  </a>
                </li>
                <li
                  onClick={e => {
                    deviceOpenChildFunc(e)
                  }}
                >
                  <a>
                    <img
                      className='small-icon'
                      src={messageIcon}
                      alt='messageIcon'
                    />
                    <img
                      className='small-icon sidebar-collapse-img'
                      src={chevron_up}
                      alt='chevron_up'
                    />
                    Folders
                  </a>
                </li>
              </ul>
            </li>
            <li id='dashbaordOpenTag'>
              <a className='sidebar-sub-toggle'>
                <img className='small-icon' src={createIcon} alt='createIcon' />
                Create a Workspace
              </a>
            </li>
            <hr />
            <li id='dashbaordOpenTag'>
              <a className='sidebar-sub-toggle'>
                <img
                  className='small-icon'
                  src={calendarIcon}
                  alt='calendarIcon'
                />
                <img
                  className='small-icon sidebar-collapse-img'
                  src={chevron_right}
                  alt='chevron_right'
                />
                Calendars
              </a>
            </li>
            <li id='dashbaordOpenTag'>
              <a className='sidebar-sub-toggle'>
                <img
                  className='small-icon'
                  src={messageIcon}
                  alt='messageIcon'
                />
                <img
                  className='small-icon sidebar-collapse-img'
                  src={chevron_right}
                  alt='chevron_right'
                />
                Messages
              </a>
            </li>
            <li id='dashbaordOpenTag'>
              <a className='sidebar-sub-toggle'>
                <img
                  className='small-icon'
                  src={contactIcon}
                  alt='contactIcon'
                />
                <img
                  className='small-icon sidebar-collapse-img'
                  src={chevron_right}
                  alt='chevron_right'
                />
                Contacts
              </a>
            </li>
            <li id='dashbaordOpenTag'>
              <a className='sidebar-sub-toggle'>
                <img
                  className='small-icon'
                  src={contactOneIcon}
                  alt='contactOneIcon'
                />
                <img
                  className='small-icon sidebar-collapse-img'
                  src={chevron_right}
                  alt='chevron_right'
                />
                Shared with Me
              </a>
            </li>
            <hr />
            <li
              id='dashbaordOpenTag'
              onClick={() => {
                sideBarToggleFunc()
              }}
            >
              <a className='sidebar-sub-toggle'>
                <img
                  className='small-icon'
                  src={bearishIcon}
                  alt='bearishIcon'
                />
                Upgrade
                <img
                  className='small-icon sidebar-collapse-img'
                  src={setting_icon}
                  alt='setting_icon'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
