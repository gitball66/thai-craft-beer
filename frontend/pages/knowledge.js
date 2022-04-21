import Layout from "../components/Layout";
import Authen from "../components/Authen";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL: "http://localhost/api",
});

const Knowledge = ({ token }) => {
  const [knowledges, setKnowledges] = useState([]);
  let loginName;
  useEffect(() => {
    loginName = localStorage.getItem("user");
    api.get("/knowledges").then(res => {
      setKnowledges(res.data.knowledges.knowledges);
    })
  });

  const listItem = knowledges.map((res) => (
    <div key={res.id}>
      <div className="font-promt text-white bg-black/80 rounded-md p-12 mb-4 w-[60vw]">
        <p className="text-2xl tracking-[3px]">{res.topic.toUpperCase()}</p>
        {res.detail.map((dt, index) => (<li key={index} className="mt-3 indent-8">{dt}</li>))}
        {res.image ? <img src={res.image} /> : <p></p>}
      </div>
    </div>
  ));

  return (
    <Layout token={token}>
      <div>
        <p className="mt-4 mb-8 text-center font-bold tracking-[6px] font-promt text-3xl text-white">Knowledges</p>
        {listItem}
      </div>
    </Layout>
  );
};

export default Authen(Knowledge);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
