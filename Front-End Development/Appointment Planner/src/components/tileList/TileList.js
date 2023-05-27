import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
    return (
        <div>
            {props.contacts ?
                props.contacts.map(contact => <Tile
                    name={contact.name}
                    description={[contact.phone, contact.email]} />) :
                null}
            {props.appointments ?
                props.appointments.map(appointment => <Tile
                    name={appointment.name}
                    description={[
                        appointment.title, 
                        appointment.contact, 
                        appointment.date, 
                        appointment.time
                    ]} />) :
                null}
        </div>
    );
};
