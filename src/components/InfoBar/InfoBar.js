import React from 'react'
import { Close } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'

import './InfoBar.css'

function InfoBar({ room, name, users }) {
    return (
        <div className='infobarCon'>
            <div className='infobar'>
                <div>
                    <span className='online'></span>
                    <p className='room'>{ `#${room}` } <small>({ users.length&& users.length })</small></p>
                </div>

                <IconButton>
                    <Link to='/'>
                        <Close />
                    </Link>
                </IconButton>
            </div>
           
           <div className='users'>
               {
                   users.map((user, index) => {
                    let username = user.name
                    if(username === name.trim().toLowerCase()) username = 'you'
                    return <span className='onlineUser' key={index}>{ username }</span>
                })
               }
           </div>
        </div>
    )
}

export default InfoBar
