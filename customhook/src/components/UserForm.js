import React, {useState} from 'react'
import useInput from '../Hook/useInput'

function UserForm() {

    const [FirstName, bindFirstName, resetFirstName] = useInput('')
    const [LastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${FirstName} ${LastName}`)
        resetLastName()
        resetFirstName()
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input {...bindFirstName} type='text' />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" {...bindLastName} />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm