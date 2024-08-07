function MenuItem({ id, name, description, price }) {
  return (
    <>
      <p>{id}</p>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </>
  );
}

export default MenuItem;
