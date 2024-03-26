
import React, { useState } from "react";

const MessageInput = () => {
    let csrfToken = document.querySelector('meta[name="csrf-token"]')
        .getAttribute('content');

    const [message, setMessage] = useState("");

    const messageRequest = (text) => {
        fetch('http://127.0.0.1:8000/message', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": csrfToken
            },
            body: JSON.stringify({ text })
        })
            .then(response => response.json())
            .catch((err) => {
                console.log(err);
            });
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim() === "") {
            alert("Please enter a message!");
            return;
        }

        messageRequest(message);
        setMessage("");
    };
    return (
        <div className="input-group">
            <input onChange={(e) => setMessage(e.target.value)}
                   autoComplete="off"
                   type="text"
                   className="form-control"
                   placeholder="Message..."
                   value={message}
            />
            <div className="input-group-append">
                <button onClick={(e) => sendMessage(e)}
                        className="btn btn-primary"
                        type="button">Send</button>
            </div>
        </div>
    );
};

export default MessageInput;
