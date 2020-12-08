import React, { useState, useCallback } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import NoCard from "./components/NoCard";
import Match from "./components/Match";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import data from "./30datasets.json";
const App = () => {
  const [people, setPeople] = useState(data);
  const [isMatched, setIsMatched] = useState(false);
  const [matchedPerson, setMatchedPerson] = useState(null);

  const [likedUsers, setLikedUsers] = useState([]);

  const addLikedUser = useCallback(
    (user) => {
      // add the user to likedUser array
      setMatchedPerson(user);
      setLikedUsers((likedUsers) => [...likedUsers, user]);
      setIsMatched(true);
    },
    [likedUsers]
  );
  // remove user from the dataset
  const removeUser = useCallback((user) => {
    const newPeople = people.filter((person) => person.id !== user.id);
    setPeople(newPeople);
  });

  return (
    <div className='app'>
      <About />
      <div className='tinder'>
        <Router>
          <Switch>
            <Route path='/chat/:person'>
              <Header backButton='/chat' />
              <ChatScreen />
            </Route>
            <Route path='/chat'>
              <Header backButton='/' />
              <Chats likedUsers={likedUsers} />
            </Route>
            <Route path='/'>
              <Header />
              {people[0] ? (
                <TinderCards
                  person={people[0]}
                  people={people}
                  addLikedUser={addLikedUser}
                  removeUser={removeUser}
                />
              ) : (
                <NoCard />
              )}
              {/* Only if we matched someone show matched page */}
              {matchedPerson !== null && (
                <Match
                  isMatched={isMatched}
                  setIsMatched={setIsMatched}
                  person={matchedPerson}
                />
              )}

              <SwipeButtons />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
