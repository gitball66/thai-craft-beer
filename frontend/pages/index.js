import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const Home = ({ token }) => {
  const router = useRouter();
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");

  return (
    <Layout token={token}>
      <div className="mt-40 flex flex-col justify-center text-center">
        <p className="text-5xl font-bold">
          WELCOME TO
        </p>
        <p
          className="mt-5 text-7xl font-bold"
        >
          THAI CRAFT BEER
        </p>
      </div>
    </Layout>
  );
};

export default Home;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
