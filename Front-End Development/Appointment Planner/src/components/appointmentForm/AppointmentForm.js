import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
    const [month, day, year] = new Date()
        .toLocaleDateString('en-US')
        .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const AppointmentForm = ({
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit
}) => {

    return (
        <form onSubmit={handleSubmit}>
            <ContactPicker
                contacts={contacts}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
            />
            <input
                type='text'
                id='title'
                name='title'
                value={title}
                placeholder='What are you scheduling an appointment for?'
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type='date'
                id='date'
                name='date'
                value={date}
                placeholder='Appointment Date'
                onChange={(e) => setDate(e.target.value)}
                min={getTodayString}
                required
            />
            <input
                type='time'
                id='time'
                name='time'
                value={time}
                placeholder='Appointment Time'
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <button type='submit'>Submit</button>
        </form>
    );
};
