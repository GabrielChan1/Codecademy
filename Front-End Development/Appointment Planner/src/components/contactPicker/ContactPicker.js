import React from 'react';

export const ContactPicker = (props) => {
    return (
        <select value={props.value} onChange={props.onChange}>
            <option value=''>No Contact Selected</option>
            {props.contacts ?
                props.contacts.map(contact => <option value={contact.name}>
                    {contact.name}
                </option>) :
                null}
        </select>
    );
};
