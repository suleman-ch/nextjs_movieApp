import MovieCard from "@/components/MovieCard";
import React from "react";
import styles from '@/app/styles/common.module.css'

const Movie = async () => {

  await new Promise(resolve => setTimeout(resolve, 2000));


  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cd452295dfmsh9a076c1cbab8b5ep1822bejsn1eab1b184671",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);

  return (
    <>
      <section className={styles.moviesSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
          {main_data.map((curElem) => {
            return <MovieCard key={curElem.id} {...curElem} />;
          })}
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Movie;
