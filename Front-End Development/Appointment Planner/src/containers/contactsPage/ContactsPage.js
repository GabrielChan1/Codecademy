import React, { useState, useEffect, useRef } from 'react';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
    /*
    Define state variables for 
    contact info and duplicate check
    */
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const isDuplicate = useRef(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        Add contact info and clear data
        if the contact name is not a duplicate
        */
        if (name !== '' && props.contacts.every(contact => contact.name !== name)) {
            props.addContact(name, phone, email);
            setName('');
            setPhone('');
            setEmail('');
        }
    };

    /*
    Using hooks, check for contact name in the 
    contacts array variable in props
    */
    useEffect(() => {
        if (name !== '' && props.contacts.some(contact => contact.name === name)) {
            // Indicate name is a duplicate here
            isDuplicate.current = true;
        }
        else {
            isDuplicate.current = false;
        }
    });

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                />
                {isDuplicate.current && <h3>The given name is a duplicate and cannot be submitted</h3>}
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList contacts={props.contacts} />
            </section>
        </div>
    );
};
