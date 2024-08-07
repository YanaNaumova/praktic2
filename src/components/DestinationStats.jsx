function DestinationStats({ stats }) {
  return (
    <>
      <p>{stats.popularity}</p>
      <p>{stats.accessibility}</p>
      <p>{stats.climate}</p>
      <p>{stats.timeofday}</p>
    </>
  );
}

export default DestinationStats;
