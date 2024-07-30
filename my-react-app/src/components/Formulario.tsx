import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor.
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label><br />
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            /><br /><br />
            <label htmlFor="email">Email:</label><br />
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            /><br /><br />
            <label htmlFor="message">Mensaje:</label><br />
            <textarea 
                id="message" 
                name="message" 
                rows={4} 
                cols={50} 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
            /><br /><br />
            <input type="submit" value="Enviar" />
        </form>
    );
};

export default ContactForm;
