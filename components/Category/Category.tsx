import React from "react";
import "./Category.css";

export default function Category() {
  const flipkartLogo = "flipkart-logo.png";
  const amazonLogo = "amazon-logo.png";

  return (
    <div className="tab-container mb-4 mt-2 font-semibold">
      <section className="nav">
        <div className="img-container">
          <img src="./assets/1.png" />
        </div>
        <p>Grocery</p>
      </section>
      <section className="nav">
        <div className="img-container">
          <img src="./assets/2.png" />
        </div>
        <p>Mobile</p>
      </section>
      <section className="nav dropdown z-10">
        <div className="img-container">
          <img src="./assets/3.png" />
        </div>
        <p className="flex justify-center;">
          Fashion &nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
            style={{ marginTop: "5px" }}
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </p>
        <div className="menu">
          <ul className="main-menu">
            <li className="li">
              Men's Top Wear{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </span>
              <ul className="inner-menu">
                <li className="li">All</li>
                <li className="li">Shirt</li>
                <li className="li">T-Shirt</li>
              </ul>
            </li>
            <li className="li">
              Men's Bottom Wear{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </span>
              <ul className="inner-menu">
                <li className="li">Shoe</li>
                <li className="li">Slipper</li>
                <li className="li">Special</li>
                <li className="li">Crocs</li>
              </ul>
            </li>
            <li className="li">Women Ethinc </li>
            <li className="li">Women Western </li>
            <li className="li">Women Footwear</li>
            <li className="li">Men Footwear </li>
            <li className="li">Kid </li>
            <li className="li">Winter </li>
            <li className="li">Summer </li>
          </ul>
        </div>
      </section>

      <section className="nav dropdown z-10">
        <div className="img-container">
          <img src="./assets/4.png" />
        </div>
        <p className="flex justify-center;">
          Electronics &nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
            style={{ marginTop: "5px" }}
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </p>
        <div className="menu">
          <ul className="main-menu">
            <li className="li">
              Men's Top Wear{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </span>
              <ul className="inner-menu">
                <li className="li">All</li>
                <li className="li">Shirt</li>
                <li className="li">T-Shirt</li>
              </ul>
            </li>
            <li className="li">
              Men's Bottom Wear{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </span>
              <ul className="inner-menu">
                <li className="li">Shoe</li>
                <li className="li">Slipper</li>
                <li className="li">Special</li>
                <li className="li">Crocs</li>
              </ul>
            </li>
            <li className="li">Women Ethinc </li>
            <li className="li">Women Western </li>
            <li className="li">Women Footwear</li>
            <li className="li">Men Footwear </li>
            <li className="li">Kid </li>
            <li className="li">Winter </li>
            <li className="li">Summer </li>
          </ul>
        </div>
      </section>

      <section className="nav dropdown z-10">
        <div className="img-container">
          <img src="./assets/5.jpeg" />
        </div>
        <p className="flex justify-center;">
          Home &nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
            style={{ marginTop: "5px" }}
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </p>
        <div className="menu">
          <ul className="main-menu">
            <li className="li">
              Men's Top Wear{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </span>
              <ul className="inner-menu">
                <li className="li">All</li>
                <li className="li">Shirt</li>
                <li className="li">T-Shirt</li>
              </ul>
            </li>
            <li className="li">
              Men's Bottom Wear{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </span>
              <ul className="inner-menu">
                <li className="li">Shoe</li>
                <li className="li">Slipper</li>
                <li className="li">Special</li>
                <li className="li">Crocs</li>
              </ul>
            </li>
            <li className="li">Women Ethinc </li>
            <li className="li">Women Western </li>
            <li className="li">Women Footwear</li>
            <li className="li">Men Footwear </li>
            <li className="li">Kid </li>
            <li className="li">Winter </li>
            <li className="li">Summer </li>
          </ul>
        </div>
      </section>

      <section className="nav">
        <div className="img-container">
          <img src="./assets/6.png" />
        </div>
        <p>Appliances</p>
      </section>
      <section className="nav">
        <div className="img-container">
          <img src="./assets/7.png" />
        </div>
        <p>Travel</p>
      </section>

      <section className="nav">
        <div className="img-container">
          <img src="./assets/9.png" />
        </div>
        <p>Top Offers</p>
      </section>
      <section className="nav dropdown1 z-10">
        <div className="img-container">
          <img src={flipkartLogo} />
        </div>
        <p>
          Flipkart &nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
            style={{ marginTop: "5px" }}
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </p>
        <div className="menu1">
          <ul className="main-menu1">
            <li className="li">
              Men's Top Wear{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </span>
              <ul className="inner-menu1">
                <li className="li">All</li>
                <li className="li">Shirt</li>
                <li className="li">T-Shirt</li>
              </ul>
            </li>
            <li className="li">
              Men's Bottom Wear{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </span>
              <ul className="inner-menu1">
                <li className="li">Shoe</li>
                <li className="li">Slipper</li>
                <li className="li">Special</li>
                <li className="li">Crocs</li>
              </ul>
            </li>
            <li className="li">Women Ethinc </li>
            <li className="li">Women Western </li>
            <li className="li">Women Footwear</li>
            <li className="li">Men Footwear </li>
            <li className="li">Kid </li>
            <li className="li">Winter </li>
            <li className="li">Summer </li>
          </ul>
        </div>
      </section>
      <section className="nav dropdown2 z-10">
        <div className="img-container">
          <img src={amazonLogo} />
        </div>
        <p>
          Amazon &nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
            style={{ marginTop: "5px" }}
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </p>
        <div className="menu2">
          <ul className="main-menu2">
            <li className="li">
              Men's Top Wear{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </span>
              <ul className="inner-menu2">
                <li className="li">All</li>
                <li className="li">Shirt</li>
                <li className="li">T-Shirt</li>
              </ul>
            </li>
            <li className="li">
              Men's Bottom Wear{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </span>
              <ul className="inner-menu2">
                <li className="li">Shoe</li>
                <li className="li">Slipper</li>
                <li className="li">Special</li>
                <li className="li">Crocs</li>
              </ul>
            </li>
            <li className="li">Women Ethinc </li>
            <li className="li">Women Western </li>
            <li className="li">Women Footwear</li>
            <li className="li">Men Footwear </li>
            <li className="li">Kid </li>
            <li className="li">Winter </li>
            <li className="li">Summer </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
