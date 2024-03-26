
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message.jsx";
import MessageInput from "./MessageInput.jsx";

const ChatBox = () => {
    let csrfToken = document.querySelector('meta[name="csrf-token"]')
        .getAttribute('content');
    const userData = document.getElementById('main')
        .getAttribute('data-user');

    const user = JSON.parse(userData);
    // const webSocketChannel = `App.Models.User.${user.id}`;
    const webSocketChannel = `channel_for_everyone`;

    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    const scrollToBottom = () => {
        scroll.current.scrollIntoView({ behavior: "smooth" });
    };

    const connectWebSocket = () => {
        window.Echo.private(webSocketChannel)
            .listen('GotMessage', async (e) => {
                // e.message
                await getMessages();
                scrollToBottom();
            })
            .notification((n) => {
                console.log(n.content);
            });
    }

    const getMessages = () => {
        fetch('http://127.0.0.1:8000/messages', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": csrfToken
            },
        })
            .then(r => r.json())
            .then((m) => {
                setMessages(m);
                scrollToBottom();
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        getMessages();
        connectWebSocket();

        return () => {
            window.Echo.leave(webSocketChannel);
        }
    }, []);

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Chat Box</div>
                    <div className="card-body"
                         style={{height: "500px", overflowY: "auto"}}>
                        {
                            messages?.map((message) => (
                                <Message key={message.id}
                                         userId={user.id}
                                         message={message}
                                />
                            ))
                        }
                        <span ref={scroll}></span>
                    </div>
                    <div className="card-footer">
                        <MessageInput />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
