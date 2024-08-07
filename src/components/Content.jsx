function Content({ header, paragraf, image }) {
  return (
    <>
      <h1>{header}</h1>
      <p>{paragraf}</p>
      <img src={image} alt="image" />
    </>
  );
}
export default Content;
