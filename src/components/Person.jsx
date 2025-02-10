function Person({ person, changePerson, arrayLength }) {
  const prevButtonHandler = () => {
    if (person.id === 1) {
      changePerson(1);
    } else {
      changePerson(person.id - 1);
    }
  };
  const nextButtonHandler = () => {
    if (person.id === arrayLength) {
      changePerson(person.id);
    } else {
      changePerson(person.id + 1);
    }
  };
  const generateRandomPerson = () => {
    const randomPersonId = Math.ceil(Math.random() * arrayLength);
    changePerson(randomPersonId);
  };
  return (
    <>
      <section className="review">
        <div className="img-container">
          <img
            className="person-img"
            src={person.image}
            alt={'img' + person.name}
          />
        </div>
        <h1>{person.name}</h1>
        <p className="job">{person.job}</p>
        <p className="info">{person.text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevButtonHandler}>
            Prev
          </button>
          <button className="next-btn" onClick={nextButtonHandler}>
            Next
          </button>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={generateRandomPerson}>
            Random
          </button>
        </div>
      </section>
    </>
  );
}
export default Person;
