import React from "react";

function TrainRoute({
  id,
  startStation,
  endStation,
  departureTime,
  arrivalTime,
  price,
}) {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Откуда: {startStation}</p>
      <p>Куда: {endStation}</p>
      <p>Время отправления: {departureTime}</p>
      <p>Время прибытия: {arrivalTime}</p>
      <p>Цена: {price}</p>
    </div>
  );
}

export default TrainRoute;
