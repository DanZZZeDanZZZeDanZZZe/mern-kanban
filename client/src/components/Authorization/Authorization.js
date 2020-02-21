import React from 'react';
import './Authorization.css';

export const Authorization = () => {
    const submitHandler = event => {
        event.preventDefault()
    }
    return (
        <div className="authorization-card">
            <h1>Authorization</h1>
            <form onSubmit={submitHandler}>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <input 
                        placeholder="Enter email" 
                        id="email" 
                        type="email" 
                        name="email">
                    </input>
                </div>
                <div className="input-field">
                    <label htmlFor="password"></label>
                    <input 
                        placeholder="Enter password" 
                        id="password" 
                        type="password" 
                        name="password">
                    </input>
                </div>
                <div className="form-action">
                    <button>Entry</button>
                    <button>Registration</button>
                </div>
            </form> 
        </div>
    )
}