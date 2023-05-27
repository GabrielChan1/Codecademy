import React, { useState } from 'react';

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {
    /*
    Define state variables for 
    appointment info
    */
    const [contact, setContact] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        Add contact info and clear data  
        */
        if (contact !== '') {
            props.addAppointment(contact, title, date, time);
            setContact('');
            setTitle('');
            setDate('');
            setTime('');
        }
    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                    contacts={props.contacts}
                    contact={contact}
                    setContact={setContact}
                    title={title}
                    setTitle={setTitle}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList appointments={props.appointments} />
            </section>
        </div>
    );
};