import MusicAlbum from "./MusicAlbum";

function AlbumList({ albums }) {
  return (
    <>
      {albums.map((el) => {
        return (
          <MusicAlbum
            key={el.id}
            artist={el.artist}
            title={el.title}
            tracks={el.tracks}
          />
        );
      })}
    </>
  );
}
export default AlbumList;
