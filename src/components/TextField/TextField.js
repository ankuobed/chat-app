import React, { useState } from 'react'
import { SendRounded } from '@material-ui/icons'

import './TextField.css'

const TextField = ({ socket }) => {
    const [message, setMessage] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    return (
        <div className='textfield'>
            <form onSubmit={sendMessage}>
                <div className='inputCon'>
                    <div className='inputLeft'>
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Type a message...'
                        />
                    </div>
                </div>

                <button className='send'><SendRounded /></button>
            </form>
        </div>
    )
}

export default TextField
