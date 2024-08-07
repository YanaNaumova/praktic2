function MusicAlbum({ artist, title, tracks }) {
  return (
    <>
      <ul>
        <li>{artist}</li>
        <li>{title}</li>
        {tracks.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    </>
  );
}

export default MusicAlbum;
