import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom'
import Root, { ROUTES } from './components/root/Root';
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
    /*
    Define state variables for 
    contacts and appointments 
    */
    const [contacts, setContacts] = useState([]);
    const [appointments, setAppointments] = useState([]);

    /*
    Implement functions to add data to
    contacts and appointments
    */

    const addContact = (name, phone, email) => {
        setContacts(contacts => [...contacts, {
            name: name,
            phone: phone,
            email: email
        }]);
    }

    const addAppointment = (contact, title, date, time) => {
        setAppointments(appointments => [...appointments, {
            contact: contact,
            title: title,
            date: date,
            time: time
        }]);
    }

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
            {/* Add props to ContactsPage */}
            <Route path={ROUTES.CONTACTS} element={<ContactsPage
                contacts={contacts}
                addContact={addContact}
            />} />
            {/* Add props to AppointmentsPage */}
            <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage 
                contacts={contacts}
                appointments={appointments}
                addAppointment={addAppointment}
            /> } />
        </Route>
    ));

    return (
        <RouterProvider router={router} />
    );
}

export default App;
