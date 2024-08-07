import "./App.css";
import PokemonList from "./components/PokemonList";
import MoviesDisplay from "./components/MoviesDisplay";
import TravelCard from "./components/TravelCard";
import React from "react";
import TrainRoutesList from "./components/TrainRoutesList";
import Menu from "./components/Menu";
import ShowCalc from "./components/ShowCalc";
import CarList from "./components/CarList";
import RandomPhrase from "./components/RandomPhrase";
import Content from "./components/Content";
import Card from "./components/Card";
import TodoItem from "./components/TodoItem";
import AlbumList from "./components/AlbumList";
const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
  { id: 2, name: "Charmander", type: "Fire" },
  { id: 3, name: "Squirtle", type: "Water" },
  { id: 4, name: "Pikachu", type: "Electric" },
  { id: 5, name: "Jigglypuff", type: "Normal/Fairy" },
  { id: 6, name: "Gengar", type: "Ghost/Poison" },
  { id: 7, name: "Snorlax", type: "Normal" },
  { id: 8, name: "Mewtwo", type: "Psychic" },
  { id: 9, name: "Dragonite", type: "Dragon/Flying" },
  { id: 10, name: "Eevee", type: "Normal" },
];

const movies = [
  { id: 1, title: "Inception", year: "2010" },
  { id: 2, title: "The Matrix", year: "1999" },
  { id: 3, title: "Interstellar", year: "2014" },
  { id: 4, title: "Pulp Fiction", year: "1994" },
  { id: 5, title: "Forrest Gump", year: "1994" },
  {
    id: 6,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",
  },
  {
    id: 7,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: "1980",
  },
  { id: 8, title: "The Dark Knight", year: "2008" },
  { id: 9, title: "Fight Club", year: "1999" },
  { id: 10, title: "The Godfather", year: "1972" },
];

const travelCards = [
  {
    name: "Мальдивы",
    description:
      "Тропический рай идеален для любителей дайвинга и спокойного отдыха.",
    imageUrl: "https://example.com/images/maldives.jpg",
    stats: {
      popularity: 9.5,
      accessibility: "Круглый год",
      climate: "Тропический",
      timeofday: "night",
    },
  },
  {
    name: "Исландия",
    description: "Страна вулканов, гейзеров и невероятных ландшафтов.",
    imageUrl: "https://example.com/images/iceland.jpg",
    stats: {
      popularity: 8.0,
      accessibility: "Лучше летом",
      climate: "Субарктический",
      timeofday: "dawn",
    },
  },
  {
    name: "Япония",
    description:
      "Смесь древней культуры и современных технологий с удивительной природой.",
    imageUrl: "https://example.com/images/japan.jpg",
    stats: {
      popularity: 9.2,
      accessibility: "Круглый год",
      climate: "Умеренный",
      timeofday: "midday",
    },
  },
  {
    name: "Новая Зеландия",
    description: "Дом для приключений на природе, от треккинга до каякинга.",
    imageUrl: "https://example.com/images/newzealand.jpg",
    stats: {
      popularity: 8.8,
      accessibility: "Круглый год",
      climate: "Умеренно-морской",
      timeofday: "dusk",
    },
  },
  {
    name: "Патагония (Аргентина)",
    description:
      "Рай для любителей треккинга и уединения на фоне монументальных гор.",
    imageUrl: "https://example.com/images/patagonia.jpg",
    stats: {
      popularity: 7.5,
      accessibility: "Лучше весной и осенью",
      climate: "Холодный",
      timeofday: "dusk",
    },
  },
];

const routes = [
  {
    id: 1,
    trainName: "Capital Express",
    startStation: "Capital City",
    endStation: "River Town",
    departureTime: "08:30",
    arrivalTime: "10:45",
    price: 45,
  },
  {
    id: 2,
    trainName: "Metro Star",
    startStation: "Northville",
    endStation: "Southville",
    departureTime: "09:00",
    arrivalTime: "12:30",
    price: 60,
  },
  {
    id: 3,
    trainName: "Highland Flyer",
    startStation: "Highland",
    endStation: "Coastline",
    departureTime: "15:00",
    arrivalTime: "17:30",
    price: 50,
  },
  {
    id: 4,
    trainName: "City Sprinter",
    startStation: "Downtown",
    endStation: "Uptown",
    departureTime: "07:15",
    arrivalTime: "07:45",
    price: 25,
  },
  {
    id: 5,
    trainName: "Early Bird",
    startStation: "Quiet Woods",
    endStation: "Loud City",
    departureTime: "05:00",
    arrivalTime: "07:30",
    price: 35,
  },
  {
    id: 6,
    trainName: "Night Owl",
    startStation: "Moonlight Town",
    endStation: "Sunny City",
    departureTime: "22:00",
    arrivalTime: "23:59",
    price: 40,
  },
  {
    id: 7,
    trainName: "Valley Connector",
    startStation: "Green Valley",
    endStation: "Blue Lake",
    departureTime: "13:00",
    arrivalTime: "14:30",
    price: 30,
  },
  {
    id: 8,
    trainName: "Mountain Explorer",
    startStation: "Hill City",
    endStation: "Snow Peak",
    departureTime: "10:30",
    arrivalTime: "13:00",
    price: 55,
  },
  {
    id: 9,
    trainName: "Desert Runner",
    startStation: "Sandy Junction",
    endStation: "Cactus Central",
    departureTime: "16:45",
    arrivalTime: "19:00",
    price: 45,
  },
  {
    id: 10,
    trainName: "Rainforest Route",
    startStation: "Jungle Gate",
    endStation: "Tree Top Town",
    departureTime: "11:00",
    arrivalTime: "14:30",
    price: 65,
  },
];

const menus = [
  {
    id: 1,
    name: "Garlic Bread",
    description: "Classic garlic bread, with a hint of herbs.",
    price: 5,
  },
  {
    id: 2,
    name: "Soup of the Day",
    description: "A delicious way to start your meal.",
    price: 7,
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Fresh salmon that's grilled to perfection.",
    price: 15,
  },
  {
    id: 4,
    name: "Steak",
    description: "High-quality beef with our special sauce.",
    price: 18,
  },
  {
    id: 5,
    name: "Cheesecake",
    description: "Creamy cheesecake with a crispy base.",
    price: 6,
  },
  {
    id: 6,
    name: "Ice Cream",
    description: "Choose from our variety of flavors.",
    price: 4,
  },
];

const arr = {
  header: "heder",
  paragraf: "pargraf",
  image: "image",
};

// const cards = [
//   { name: "1", info: "yes", preice: "10" },
//   { name: "2", info: "no", preice: "20" },
//   { name: "3", info: "yes", preice: "30" },
// ];

const albums = [
  {
    id: 1,
    artist: "The Beatles",
    title: "Abbey Road",
    tracks: ["Come Together", "Something", "Maxwell's Silver Hammer"],
  },
  {
    id: 2,
    artist: "Pink Floyd",
    title: "The Dark Side of the Moon",
    tracks: ["Speak to Me", "Breathe", "On the Run"],
  },
  {
    id: 3,
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    tracks: ["Black Dog", "Rock and Roll", "The Battle of Evermore"],
  },
];
const cards = [
  {
    name: "Product 1",
    info: "In stock",
    price: 10,
  },
  {
    name: "Product 2",
    info: "Out of stock",
    price: 20,
  },
  {
    name: "Product 3",
    info: "In stock",
    price: 30,
  },
];

function App() {
  return (
    <div>
      {cards.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          info={card.info}
          price={card.price} // Используйте price вместо preice
        />
      ))}
    </div>
  );
}

export default App;
