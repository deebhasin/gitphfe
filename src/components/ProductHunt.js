import React from "react";
import "../Ph.css";

export default function ProductHunt() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />

      <div>
        <div className="containers">
          <div className="product-image">
            <img src="img/bend.avif" alt="bend-logo" />
          </div>
          <div className="content">
            <p className="p-style heading">Bend</p>
            <p className="p-style lines">A modern corporate card built for climate-friendly business</p>
            <div className="tag">
              <ul>
                <li>Free</li>
                <li>Productivity</li>
              </ul>
            </div>
          </div>

          <div className="upvote">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-up-fill"
                viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            </div>
            <div>
              <p>207</p>
            </div>
          </div>
        </div>
        {/* <!-- 2 --> */}
        <div className="containers">
          <div className="product-image">
            <img src="img/workos.avif" alt="work-logo" />
          </div>
          <div className="content">
            <p className="p-style heading">WorkOS</p>
            <p className="p-style lines">APIs to make your app enterprise ready</p>
            <div className="tag">
              <ul>
                <li>Promoted</li>
              </ul>
            </div>
          </div>

          <div className="upvote">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-up-fill"
                viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            </div>
            <div>
              <p>1,774</p>
            </div>
          </div>
        </div>
        {/* <!-- 3 --> */}
        <div className="containers">
          <div className="product-image">
            <img src="img/notion 95.avif" alt="notion95-logo" />
          </div>
          <div className="content">
            <p className="p-style heading">Notion 95</p>
            <p className="p-style lines">Windows 95 inspired Notion template</p>
            <div className="tag">
              <ul>
                <li>Free</li>
                <li>Windows</li>
              </ul>
            </div>
          </div>

          <div className="upvote">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-up-fill"
                viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            </div>
            <div>
              <p>124</p>
            </div>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"></script>
    </>
  );
}
