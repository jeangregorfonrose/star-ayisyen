import { useState } from "react";
import styles from "../styles/starList.module.css";
import router from "next/router";

type star = {
  id: string;
  name: string;
  titles: string[];
  image: string;
};

type categorySection = {
  categoryName: string;
  peopleCount: number;
  stars: star[];
};

const results: categorySection = {
  categoryName: "Atis",
  peopleCount: 1,
  stars: [
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
    {
      id: "123456",
      name: "John Doe",
      titles: ["Actor", "Artist", "Entrepreneur"],
      image: "../../public/mikaben.jpg",
    },
  ],
};

export default function StarList() {
  const [section, setSection] = useState(results);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h1>{section.categoryName}</h1>
        <a href="#">montre plis</a>
      </div>
      <div className={styles.sectionBody}>
        <div className={styles.peopleContainer}>
          {section.stars.map((star: star) => {
            return (
              <div
                key={star.id}
                className={styles.person}
                onClick={() => router.push(`/star/${star.id}`)}
              >
                <div className={styles.name}>
                  <h4>{star.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
