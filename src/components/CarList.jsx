function CarList() {
  const list = ["BMW", "Mersedes", "Porshe"];
  return (
    <>
      {list.map((el) => {
        return <li>{el}</li>;
      })}
    </>
  );
}

export default CarList;
