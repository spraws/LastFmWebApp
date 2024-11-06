import React, { useRef, useState } from 'react';
import './App.css'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCircleInfo, faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // Import faCircleXmark

// Add the icons to the library
library.add(faCircleInfo, faCircleXmark);

function Info() {
    const dialogRef = useRef(null); 
    const [isDialogOpen, setIsDialogOpen] = useState(false); 

    const showDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.show();
            setIsDialogOpen(true); 
        }
    };

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
            setIsDialogOpen(false); 
        }
    };

    return (
        <div className="info">
            <FontAwesomeIcon 
                id='info-icon'
                icon={isDialogOpen ? faCircleXmark : faCircleInfo} 
                onClick={isDialogOpen ? closeDialog : showDialog} 
            />
            <dialog ref={dialogRef} id='dialog'>
                I am currently experimenting with a new UI, built with NextJS and Aceturnity, check it out <a href="https://next.jonty.info/">Here!</a>
            </dialog>
        </div>
    );
}

export default Info; 