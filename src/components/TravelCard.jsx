import DestinationImage from "./DestinationImage";
import DestinationInfo from "./DestinationInfo";
import DestinationStats from "./DestinationStats";

function TravelCard({ card }) {
  return (
    <>
      <DestinationImage image={card.imageUrl} />
      <DestinationInfo info={card.description} name={card.name} />
      <DestinationStats stats={card.stats} />
    </>
  );
}

export default TravelCard;
