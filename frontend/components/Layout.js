import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
const api = axios.create({
  baseURL: "http://localhost/api",
});

const Layout = (props) => {
  const [loginName, setLoginName] = useState("");
  const router = useRouter();
  useEffect(() => {
    setLoginName(localStorage.getItem("user"));
  });
  const buttonMenu = () => {
    if (props.token != "") {
      return (
        <div>
          <button
            className="pl-5 pr-5 text-xl tracking-[1px] hover:text-orange-200"
            onClick={() => {
              router.push("/");
            }}
          >
            HOME
          </button>
          <button
            className="pl-5 pr-5 text-xl tracking-[1px] hover:text-orange-200"
            onClick={() => {
              router.push("/about");
            }}
          >
            ABOUT
          </button>
          <button
            className="pl-5 pr-5 text-xl tracking-[1px] hover:text-orange-200"
            onClick={() => {
              router.push("/knowledge");
            }}
          >
            KNOWLEDGES
          </button>
          <button
            className="pl-5 pr-5 text-xl tracking-[1px] hover:text-orange-200"
            onClick={() => {
              api
                .get("/logout", { withCredentials: true })
                .then((res) => {
                  console.log(res);
                  window.location.reload();
                  localStorage.removeItem("user");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            LOGOUT
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="pl-5 pr-5 text-xl tracking-[1px] hover:text-orange-200"
            onClick={() => {
              router.push("/");
            }}
          >
            HOME
          </button>
          <button
            className="pl-5 pr-5 text-xl tracking-[1px] hover:text-orange-200"
            onClick={() => {
              router.push("/about");
            }}
          >
            ABOUT
          </button>
          <button
            className="pl-5 pr-5 text-xl tracking-[1px] hover:text-orange-200"
            onClick={() => {
              router.push("/knowledge");
            }}
          >
            KNOWLEDGES
          </button>
          <button
            className="pl-5 pr-5 font-sans text-xl tracking-[1px] hover:text-orange-200"
            onClick={() => {
              router.push("/login");
            }}
          >
            LOGIN
          </button>
        </div>
      );
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>THAI CRAFT BEER</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,200;0,600;1,400&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          {buttonMenu()}
        </div>
        <div>{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
