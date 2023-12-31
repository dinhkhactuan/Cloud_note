import React from "react";
import axios from "axios";
import classes from "./styles.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Profile(data) {
  const [userName, setUserName] = useState("");
  const [GmailUser, setGmailUser] = useState("");
  const [Note, setNode] = useState([]);
  const [startIndex, setStartIndex] = useState(5);
  useEffect(() => {
    const api_profile = async () => {
      const reslut = await axios({
        method: "GET",
        url: `http://14.225.7.221:18011/profile/10`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return reslut.data;
    };
    api_profile().then((data) => {
      setUserName(data.user.name);
      setGmailUser(data.user.gmail);
      setNode(data.notePublic);
    });
    console.log(userName, GmailUser, Note);
  }, []);
  const handle_viewMore = () => {
    setStartIndex((startIndex) => startIndex + 5);
  };
  return (
    <div className={`${classes.wapper_profile}`}>
      <div className='wapper_profile_box'>
        <div className={`${classes.wapper_profile_contain}`}>
          <img
            className={`${classes.wapper_profile_img}`}
            src={`${process.env.PUBLIC_URL + "/assets/profile.png"}`}
          ></img>
        </div>
        <ul className={`${classes.wapper_profile_box_header}`}>
          <Link to={"/home"}>
            <li style={{ fontSize: 24 + "px" }} className={`${classes.wapper_profile_li}`}>
              SAMNOTES
            </li>
          </Link>
          <li className={`${classes.wapper_profile_li}`}>Helps</li>
          <li className={`${classes.wapper_profile_li}`}>Home</li>
          <li className={`${classes.wapper_profile_li}`}>Contact Us</li>
          <li className={`${classes.wapper_profile_li}`}>Blog</li>
          <li className={`${classes.wapper_profile_li}`}>Support Forum</li>
        </ul>
      </div>
      <div
        style={{
          width: 80 + "%",
          margin: "auto",
          transform: "translateY(-12px)",
        }}
      >
        <div
          style={{
            gap: 98 + "px",
          }}
          className={`${classes.wapper_content}`}
        >
          <div
            style={{
              gap: 36 + "px",
            }}
            className={`${classes.wapper_content}`}
          >
            <div style={{ cursor: "pointer" }}>
              <img
                style={{ width: 80 + "px", height: 80 + "px" }}
                src={`${process.env.PUBLIC_URL + "/assets/user.png"}`}
              ></img>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 600,
                }}
              >
                {" "}
                {userName}
              </p>
              <p
                style={{
                  fontWeight: 600,
                }}
              >
                {" "}
                join at 26st , jul 2023
              </p>
            </div>
          </div>
          <div
            style={{
              gap: 24 + "px",
            }}
            className={`${classes.wapper_content}`}
          >
            <div
              style={{
                backgroundColor: "#3644C7",
                borderRadius: 12 + "px",
                cursor: "pointer",
              }}
              className={`${classes.wapper_content}`}
            >
              <img
                style={{
                  width: 26 + "px",
                  height: 26 + "px",
                  marginLeft: 5 + "px",
                }}
                src={`${process.env.PUBLIC_URL + "/assets/Group 48096879.png"}`}
                alt=''
              />
              <button
                style={{
                  backgroundColor: "#3644C7",
                  border: "none",
                  borderRadius: 12 + "px",
                  paddingTop: 8 + "px",
                  paddingBottom: 8 + "px",
                  paddingLeft: 12 + "px",
                  paddingRight: 12 + "px",
                  color: "#FFFFFF",
                  fontSize: 16 + "px",
                  cursor: "pointer",
                }}
              >
                add to your group{" "}
              </button>
            </div>
            <div
              className={`${classes.wapper_content}`}
              style={{
                backgroundColor: "#3644C7",
                borderRadius: 12 + "px",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  width: 26 + "px",
                  height: 26 + "px",
                  marginLeft: 5 + "px",
                }}
                src={`${process.env.PUBLIC_URL + "/assets/Vector.png"}`}
                alt=''
              />
              <button
                style={{
                  backgroundColor: "#3644C7",
                  border: "none",
                  borderRadius: 12 + "px",
                  paddingTop: 8 + "px",
                  paddingBottom: 8 + "px",
                  paddingLeft: 12 + "px",
                  paddingRight: 12 + "px",
                  color: "#FFFFFF",
                  fontSize: 16 + "px",
                  cursor: "pointer",
                }}
              >
                Messenger
              </button>
            </div>
            <div
              style={{
                borderRadius: 12 + "px",
                backgroundColor: "#3644C7",
                cursor: "pointer",
              }}
              className={`${classes.wapper_content}`}
            >
              <img
                style={{
                  width: 26 + "px",
                  height: 26 + "px",
                  marginLeft: 5 + "px",
                }}
                src={`${process.env.PUBLIC_URL + "/assets/Vector (1).png"}`}
                alt=''
              />
              <button
                style={{
                  backgroundColor: "#3644C7",
                  border: "none",
                  borderRadius: 12 + "px",
                  paddingTop: 8 + "px",
                  paddingBottom: 8 + "px",
                  paddingLeft: 12 + "px",
                  paddingRight: 12 + "px",
                  color: "#FFFFFF",
                  fontSize: 16 + "px",
                  cursor: "pointer",
                }}
              >
                {" "}
                Create group
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 20 + "px",
            minHeight: 200 + "px",
          }}
        >
          <div className={`${classes.wapper_body}`}>
            <h2
              style={{
                marginBottom: 20 + "px",
              }}
            >
              Latest PublicNote
            </h2>
            <div>
              {Note.slice(0, startIndex).map((val, index) => {
                const lastindex = Note.slice(0, startIndex).length - 1;
                return (
                  <div
                    key={index}
                    style={{
                      justifyContent: "start",
                      gap: 10 + "px",
                      backgroundColor: "#FFFFFF",
                      paddingTop: 12 + "px",
                      paddingBottom: 12 + "px",
                      paddingLeft: 24 + "px",
                      paddingRight: 24 + "px",
                      borderBottom: 1 + "px solid",
                      borderBottomColor: "#818181",
                    }}
                    className={
                      index == 0
                        ? classes.styleFist
                        : index == lastindex
                        ? classes.styleLast
                        : "" + `${classes.wapper_content}`
                    }
                  >
                    <h2>{index + 1}</h2>
                    <p
                      style={{
                        margin: 5 + "px",
                      }}
                    >
                      {userName}
                    </p>
                    <p className={`${classes.profile_text}`}>{"" + val.data}</p>
                    <div
                      style={{
                        position: "absolute",
                        right: 170 + "px",
                        cursor: "pointer",
                      }}
                    >
                      <p>{val.createAt}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p
              style={{
                marginTop: 20 + "px",
                cursor: "pointer",
                textAlign: "center",
                color: "#FFF",
              }}
              onClick={handle_viewMore}
            >
              View More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
