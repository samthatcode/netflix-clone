import React, { useEffect, useState } from "react";
import Requests from "../Requests";
import TruncatedText from "./TruncatedText";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Requests.requestPopular);
        setMovies(response.data.results);

        const movie =
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ];
        setSelectedMovie(movie);
        // console.log(movie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-[650px] text-white ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[650px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${selectedMovie?.backdrop_path}`}
          alt={selectedMovie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            {selectedMovie?.title}
          </h1>
          <div className="my-4">
            <button className="rounded border bg-gray-300 text-black py-2 px-5">
              Play
            </button>
            <button className="rounded border text-white py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {selectedMovie?.release_date}
          </p>
          <div className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            <TruncatedText text={selectedMovie?.overview} maxLength={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
