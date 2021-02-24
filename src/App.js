import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import Header from "./assets/Header.png";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState("");
  //console.log(input);
  //console.log(messages);
  const sendMessage = (event) => {
    //all the logic to send a message goes}
    // setMessages([...messages, { username: username, message: input }]);

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    event.preventDefault();
    setInput("");
  };
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //const username=prompt("Please enter your name");
    setUsername(prompt("Please enter your name"));
    //if its blnk inside[], this code runs ONCE the app component loads
  }, []); //condition
  return (
    <div className="App">
      <img className="app__image" src={Header} alt="Header" />
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message...</InputLabel>
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            type="submit"
            onClick={sendMessage}
            variant="contained"
            color="primary"
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message message={message} username={username} key={id} />
        ))}
      </FlipMove>
      {/*inputfield*/}
      {/*button*/}
      {/*messagesthemselves*/}
    </div>
  );
}

export default App;
