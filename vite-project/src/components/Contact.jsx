import React from "react";
import "./Contact.css";
import sampleimg from "../assets/1f.png";

const Contact = () => {
  return (
    <div>
      <h1 id="contact">CONTACT US</h1>
      <div className="contact">
        <div className="contact_left">
          <form action="https://formspree.io/f/mrgnvjrk" method="post">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group-inline">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact_right">
          <div class="card1">
            <div class="boxshadow"></div>
            <div class="main">
              <div class="top"></div>
              <div class="left side"></div>
              <div class="right side"></div>
              <div class="title">Robovitics</div>
              <div class="button-container">
                <button class="button">
                  <svg
                    class="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="white"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </button>
                <button class="button">
                  <svg
                    class="svg twitter"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    fill="white"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </button>
                <button class="button">
                  <svg
                    class="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_down">
        <div className="head">
          <div className="image">
            <img src={sampleimg} alt=""></img>
          </div>
          <div className="position">
            <p>Position XYZ</p>
          </div>
          <div className="id">
            <p>Tanay</p>
          </div>
          <div className="con_details">
            <p>72230-xxxxx</p>
          </div>
        </div>
        <div className="contact_right">
          <div class="card1">
            <div class="boxshadow"></div>
            <div class="main">
              <div class="top"></div>
              <div class="left side"></div>
              <div class="right side"></div>
              <div class="title">Robovitics</div>
              <div class="button-container">
                <button class="button">
                  <svg
                    class="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="white"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </button>
                <button class="button">
                  <svg
                    class="svg twitter"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    fill="white"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </button>
                <button class="button">
                  <svg
                    class="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_down">
        <div className="head">
          <div className="image">
            <img src={sampleimg} alt=""></img>
          </div>
          <div className="position">
            <p>Position XYZ</p>
          </div>
          <div className="id">
            <p>Tanay</p>
          </div>
          <div className="con_details">
            <p>72230-xxxxx</p>
          </div>
        </div>

        <div className="head">
          <div className="image">
            <img src={sampleimg} alt=""></img>
          </div>
          <div className="position">
            <p>Position XYZ</p>
          </div>
          <div className="id">
            <p>Tanay</p>
          </div>
          <div className="con_details">
            <p>72230-xxxxx</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
