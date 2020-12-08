import React from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = ({ person, people, addLikedUser, removeUser }) => {
  // const {name, image} = person;

  const swiped = (direction, person) => {
    if (direction === "right") {
      console.log(`You liked ${person.name}`);
      // console.log(person);
      addLikedUser(person);
      removeUser(person);
    }
    if (direction === "left") {
      console.log(`You disliked ${person.name}`);
      removeUser(person);
    }
  };

  return (
    <div>
      <div className='tinderCards__cardContainer'>
        {/* {people.map((person) => (
          <TinderCard
            className='swipe'
            onSwipe={(direction) => {
              swiped(direction, person);
            }}
            key={person.id}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.image})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))} */}
        <TinderCard
          className='swipe'
          onSwipe={(direction) => {
            swiped(direction, person);
          }}
          key={person.id}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.image})` }}
            className='card'
          >
            <div className='card__text'>
              <div className='card__info'>
                <h3>{person.name}</h3>
                <h4>{person.age}</h4>
              </div>
              <p className='card__name'>{person.bio}</p>
            </div>
          </div>
        </TinderCard>
      </div>
    </div>
  );
};

export default TinderCards;
