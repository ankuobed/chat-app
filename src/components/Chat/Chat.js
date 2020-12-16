import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.css'
import InfoBar from '../InfoBar/InfoBar'
import MessageList from '../MessageList/MessageList'
import TextField from '../TextField/TextField'

let socket;

function Chat({ location }) {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState([])
   
    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        setName(name)
        setRoom(room)

        socket = io(ENDPOINT)
        socket.emit('join', { name, room }, () => {})

        socket.on('roomData', ({room, users}) => {
            setUsers(users)
        })

        return () => {
            socket.disconnect({ name })
            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (m) => {
             setMessages([...messages, m])
        })
    }, [messages])

    return (
        <div className='chatCon'>
            <div className='chat'>
                <InfoBar
                    room={room} 
                    name={name} 
                    users={users} 
                />

                <MessageList 
                    messages={messages} 
                    name={name}
                />

                <TextField socket={socket} />
            </div>
        </div>
    )
}

export default Chat
