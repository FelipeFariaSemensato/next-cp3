import Image from "next/image";
import CardFilm from "./components/CardFilm";

export default function Home() {
  const filmData = [
    {
      title: "Jurassic Park",
      image: "/JP.jpg",
      link: "https://www.youtube.com/watch?v=HWA3x3o0zJ0",
    },
    {
      title: "Jurassic Park 2",
      image: "/JP2.jpeg",
      link: "https://www.youtube.com/watch?v=W1SlB1kRLAI",
    },
    {
      title: "Jursassic Park 3",
      image: "/JP3.jpg",
      link: "https://www.youtube.com/watch?v=6M3QkLf5nk4",
    },
    {
      title: "Star Wars I",
      image: "/SW1.jpeg",
      link: "https://www.youtube.com/watch?v=229zEk3IvE0",
    },
    {
      title: "Star Wars II",
      image: "/SW2.jpg",
      link: "https://www.youtube.com/watch?v=EmW74ZpGGOI",
    },
    {
      title: "Star Wars III",
      image: "/SW3.jpg",
      link: "https://www.youtube.com/watch?v=RUq0sZx6ssE",
    },
    {
      title: "Homem Aranha 1",
      image: "/HA.jpeg",
      link: "https://www.youtube.com/watch?v=wFJ6UZ0SkYY",
    },
    {
      title: "Homem Aranha 2",
      image: "/HA2.jpeg",
      link: "https://www.youtube.com/watch?v=nL8hVXSDmNM",
    },
    {
      title: "Homem Aranha 3",
      image: "/HA3.jpg",
      link: "https://www.youtube.com/watch?v=d9BF1JvzE7I",
    },
  ];

  return (
    <main className="flex-auto">
      <div className="film-container">
        {filmData.map((film, index) => (
          <CardFilm key={index} {...film} />
        ))}
      </div>
    </main>
  );
}
