import { useState } from 'react';
import Person from '../src/components/Person.jsx';
import reviews from './data';
console.log(reviews);

const App = () => {
  const [person, setPerson] = useState(reviews[0]);
  const changePerson = (id) => {
    console.log(id);
    setPerson(reviews[id - 1]);
  };
  console.log(person);
  return (
    <main>
      <h2>Reviews Starter</h2>
      <Person
        person={person}
        changePerson={changePerson}
        arrayLength={reviews.length}
      />
    </main>
  );
};
export default App;
