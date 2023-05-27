import React from 'react';

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                id='name'
                name='name'
                value={name}
                placeholder='Your Full Name'
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type='tel'
                id='phone'
                name='phone'
                value={phone}
                placeholder='Your Phone Number'
                onChange={(e) => setPhone(e.target.value)}
                pattern='(\d-)?(\d{3}-\d{3}-\d{4})|(\d{10})'
                required
            />
            <input 
                type='email' 
                id='email' 
                name='email' 
                value={email} 
                placeholder='Your Email' 
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

