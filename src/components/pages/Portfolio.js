import React from "react";

export default function Portfolio() {
  return (
    <div className="port-container">
      <div className="row row-cols-2">
        <h1>My Projects</h1>
        <p></p>
        <div className="col">
          <a
            href="https://github.com/xuannga/Meal-Planner"
            className="portfolio-project imgcaption"
            id="project1"
          >
            <img
              src="https://naldzgraphics.net/wp-content/uploads/2013/04/cherry-blossom-wallpapers.jpg"
              className="imageimg rounded"
              alt="cherry blossoms"
            ></img>
          </a>
        </div>
        <div className="col">
          <a
            href="https://github.com/KaylaMorris11/Password-Generator"
            className="portfolio-project imagecaption"
            id="project2"
          >
            <img
              src="https://wallpaperaccess.com/full/327180.jpg"
              className="rounded"
              alt="cherry blossom"
            ></img>
          </a>
        </div>
        <div className="col">
          <a
            href="https://github.com/KaylaMorris11/Code-Quiz"
            className="portfolio-project imgcaption"
            id="project3"
          >
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/12/Anime-Cherry-Blossom-Desktop-Wallpaper.jpg"
              className="rounded"
              alt="cherry blossom"
            ></img>
          </a>
        </div>
        <div className="col">
          <a
            href="#project4"
            className="portfolio-project imgcaption"
            id="project4"
          >
            <img
              src="https://wallpapercave.com/wp/wp3439114.jpg"
              className="rounded"
              alt="cherry blossom"
            ></img>
          </a>
        </div>
        <div className="col">
          <a
            href="#project5"
            className="portfolio-project imgcaption"
            id="project5"
          >
            <img
              src="https://i0.wp.com/www.wallpapermaiden.com/image/2020/04/23/anime-landscape-spring-cherry-blossom-sakura-bloom-trees-path-anime-38975.jpeg"
              className="rounded"
              alt="cherry blossom"
            ></img>
          </a>
        </div>
        <div className="col">
          <a
            href="#project5"
            className="portfolio-project imgcaption"
            id="project5"
          >
            <img
              src="https://i0.wp.com/www.wallpapermaiden.com/image/2020/04/23/anime-landscape-spring-cherry-blossom-sakura-bloom-trees-path-anime-38975.jpeg"
              className="rounded"
              alt="cherry blossom"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
