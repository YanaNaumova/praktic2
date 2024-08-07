import React from "react";
import TrainRoute from "./TrainRoute";

function TrainRoutesList({ routes }) {
  return (
    <div>
      {routes.map((el) => (
        <TrainRoute
          key={el.id}
          id={el.id}
          startStation={el.startStation}
          endStation={el.endStation}
          departureTime={el.departureTime}
          arrivalTime={el.arrivalTime}
          price={el.price}
        />
      ))}
    </div>
  );
}

export default TrainRoutesList;
