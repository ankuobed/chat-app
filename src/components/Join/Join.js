import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

function Join() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className='container center'>
            <div className='join'>
                <h1>Join a chat room</h1>
                <form>
                    <div className='inputCon'>
                        <input
                            placeholder='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <div className='inputCon'>
                        <input
                            placeholder='room'
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                        />
                        <small>the room you want to join</small>
                    </div>
                    <Link onClick={e => (!name || !room) && e.preventDefault()} to={`/chat?name=${name}&room=${room}`}>
                        <button>Join</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Join
