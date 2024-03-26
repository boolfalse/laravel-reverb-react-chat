
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../css/app.css';
import ChatBox from "./ChatBox.jsx";

if (document.getElementById('main')) {
    ReactDOM.createRoot(document.getElementById('main')).render(
        <React.StrictMode>
            <ChatBox />
        </React.StrictMode>
    );
}
