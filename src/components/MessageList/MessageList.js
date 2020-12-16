import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/Message'

import './MessageList.css'

const MessageList = ({ messages, name }) => {
    return (
        <ScrollToBottom  className='container messages'>
            {
                messages.map((message, index) => <Message key={index} message={message} name={name} />)
            }
        </ScrollToBottom>
    )
}

export default MessageList
