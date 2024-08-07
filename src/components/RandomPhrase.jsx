function RandomPhrase() {
  const frases = ["a", "sddd", "jhfhfhf", "jdjdujjfjf", "ururur"];
  return (
    <>
      <h1>{frases[Math.floor(Math.random() * 5)]}</h1>
    </>
  );
}

export default RandomPhrase;
