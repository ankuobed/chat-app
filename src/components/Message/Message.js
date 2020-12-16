import React from 'react'

import './Message.css'

function Message({ message: { user, text }, name }) {
    let isSentByCurrentUser = false
    let isSentByAdmin = false

    name = name.trim().toLowerCase()

    if(user === name) isSentByCurrentUser = true

    if(user === 'admin') isSentByAdmin = true

    return (
        <div className={`message ${isSentByCurrentUser&& 'sent-by-user'} ${isSentByAdmin&& 'sent-by-admin'}`}>
            <p>
                <small>{ user }</small>
                { text }
            </p>
           
        </div>
    )
}

export default Message
