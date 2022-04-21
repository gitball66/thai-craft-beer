import Layout from "../components/Layout";
import Authen from "../components/Authen";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL: "http://localhost/api",
});

const About = ({ token }) => {
  let loginName;
  useEffect(() => {
    loginName = localStorage.getItem("user");
    // console.log(loginName);
  });
  return (
    <Layout token={token}>
      <div className="font-promt mt-20 p-12 text-white rounded-md bg-black/70 w-[60vw] flex-col">
        <p className="text-3xl font-bold tracking-[6px] text-center">ABOUT</p>
        <p className="mt-8">คราฟต์เบียร์ (Craft Beer) คือ การทำเบียร์สไตล์อเมริกันที่เกิดจากผู้ผลิตรายเล็ก โดยประกอบด้วยคุณสมบัติทั้ง 3 อย่าง (กำหนดโดย Brewers Association) คือ</p>
        <li className="mt-3 pl-5">โรงเบียร์มีขนาดเล็กมีกำลังการผลิตไม่เกิน 6 ล้านบาร์เรล ต่อปี (ประมาณ 700 ล้านลิตร)</li>
        <li className="pl-5">เจ้าของเป็นผู้ถือหุ้นมากกว่า 75% (Independent)</li>
        <li className="pl-5">ใช้วัตถุดิบธรรมชาติทั้งหมด
          (ห้ามใส่วัตถุดิบสังเคราะห์กลิ่นหรือรส ถ้าจะใส่ต้องใส่เพื่อให้มีกลิ่นและรสชาติดีขึ้นเท่านั้น)</li>
        <p className="mt-3">
          เมื่อการผลิตคราฟต์เบียร์ถูกจำกัดจำนวน แต่กลับมีอิสระในการผลิตมากกว่า โดยเฉพาะกระบวนการกว่าจะออกมาเป็นคราฟต์เบียร์ จะต้องใช้ฝีมือและความพิถีพิถันในการทำเป็นพิเศษ จึงทำให้มีความโฮมเมดและรสชาติที่ได้มีความเรียลกว่าเบียร์ทั่วไป
        </p>
        <p className="mt-10 font-bold">แล้วคราฟต์เบียร์ (Craft Beer) ต่างจาก เบียร์สดหรือเบียร์ขวดยังไง ?</p>
        <p className="indent-8 mt-3">สิ่งที่คราฟต์เบียร์เป็น นั่นแหละคือความแตกต่าง ทั้งกระบวนการผลิตที่ผลิตโดยใช้ฝีมือ เป็นผู้ผลิตที่ไม่ใช่รูปแบบของอุตสาหกรรม และที่สัมผัสถึงความแตกต่างได้อย่างชัดเจนก็คือ คราฟต์เบียร์มีเอกลักษณ์เฉพาะตัวจากการผลิตด้วยความใส่ใจเพื่อให้ได้รสชาติและคุณภาพที่ดีสำหรับผู้ดื่ม
          หรือจริง ๆ แล้วจะเปรียบเทียบให้เข้าใจง่ายขึ้นก็คือ Craft Beer จากฝั่งคอเบียร์ กับ Specialty coffee จากฝั่งคอกาแฟ มีความคล้ายกันอยู่ตรงที่ใส่ใจในกระบวนการทำ และเน้นที่เรื่องรสชาติและคุณภาพให้ผู้ดื่มเป็นหลัก นั่นเองครับ </p>
      </div>
    </Layout>
  );
};

export default Authen(About);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
