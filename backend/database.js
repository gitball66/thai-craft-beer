const bcrypt = require("bcrypt");

let users = {
  users: [
    {
      id: 1,
      username: "admin",
      password: "$2b$10$BIZtQuDc9lVzppq272tOEeKMtez4SYZrfozCfK0ZkvKFra5OodV4e",
      email: "admin@gmail.com",
    },
  ],
};

let knowledges = {
  knowledges: [
    {
      id: 1,
      topic: "8 ประเภทคราฟต์เบียร์ที่ติดท็อปฮิตในไทย",
      detail: [
        "Lager คราฟต์เบียร์ สายนุ่มลิ้นลาเกอร์ (Lager) คราฟต์เบียร์ Bottom Ferment ยีสต์ที่ทำงานด้านล่างของถังหมัก หมักด้วยอุณหภูมิที่เย็นกว่าปกติ สีใส สดชื่น ให้รสชาติขม แต่นุ่มลิ้น",
        "คราฟต์เบียร์ สายบอดี้บาง หอมหวาน ต้อง Pilsner Pilsner เป็นคราฟต์เบียร์ Bottom Ferment เช่นกัน ลักษณะของรสชาติเฉพาะที่มีบอดี้บาง ๆ รสหวานอ่อน ๆ และมีกลิ่มหอมจากฮ็อปส์และมอลต์",
        "คราฟต์เบียร์ Witbier สายกลิ่น Citrus ต้องจัด Witbier เบียร์สีขาว (Wit แปลว่า ขาว) คราฟต์เบียร์ ทำจากข้าวสาลี มักมีกลิ่นของเปลือกส้ม (Citrus) และเมล็ดผักชี เป็นสไตล์การทำเบียร์ของเบลเยียม ดื่มง่าย ลื่นคอ ใครที่กำลังเลี่ยงรสขม ต้องตัวนี้เลย",
        "Hefeweizen คราฟต์เบียร์ยอดฮิต ถูกปากคนไทย Hefeweizen คราฟต์เบียร์สไตล์เยอรมัน ดื่มง่าย แถมถูกปากคนไทย มีกลิ่นฮ็อปส์จาง ๆ และหมักด้วยยีสต์เข้ม อาจทำให้มีกลิ่นผลไม้อย่าง กล้วยหรือแอปเปิลโผล่มาได้",
        "Pale Ale คราฟต์เบียร์หอม หวาน ดื่มง่าย คราฟต์เบียร์สีเหลืองทอง ที่เด่นในรสชาติของฮ็อปส์ มีกลิ่น Citrus จาง ๆ รสชาติอ่อน ดื่มง่าย บอดี้บาง",
        "IPA คราฟต์เบียร์ยอดฮิต ขั้นกว่าของ Pale Ale Indian Pale Ale หรือ IPA คราฟต์เบียร์ มีสีส้มออกทองแดง โดดเด่นด้วยบอดี้ที่เข้มข้น มีปริมาณฮ็อปส์และยีสต์มากขึ้น ส่งผลให้เบียร์มีแอลกอฮอล์สูงขึ้นตามไปด้วย และมีกลิ่น รสของฮ็อปส์ที่ชัดเจน",
        "คราฟต์เบียร์ สายหนักแน่น ต้องตัวนี้ Double IPA คราฟต์เบียร์ Double IPA หรือบางที่เรียกว่า imperial IPA โดยต่อยอดมาจาก IPA แต่ใส่ฮ็อปส์เพิ่มขึ้นและหมักยีสต์นานขึ้น 2 เท่า ทำให้มีปริมาณแอลกอฮอล์ที่สูง ตามด้วยกลิ่นและบอดี้ของเบียร์ก็แน่นเพิ่มเป็น 2 เท่าเช่นกัน",
        "Stout Beer สายคราฟต์เบียร์ดำ ได้รสนุ่มลึก สเตาท์เบียร์ (Stout Beer) เป็นคราฟต์เบียร์ Ale มีสีดำ ได้จากการหมักข้าวบาร์เลย์ที่อบจนเกือบไหม้ ผสมกับมอลต์ ปริมาณแอลกอฮอล์มีไม่สูง เด่นเรื่องความครีมมี่ สัมผัสนุ่มลึก และมีรสชาติคล้ายโกโก้ กาแฟ วานิลลา",
      ],
      image: null
    },
    {
      id: 2,
      topic: "ยี่ห้อคราฟต์เบียร์ยอดนิยมในประเทศไทย",
      detail: ["Mahanakorn White | Ale – คราฟต์เบียร์มหานคร มีกลิ่นและรสส้มอ่อน ๆ มีกลิ่นฮ็อปส์และสัมผัสจากมอลต์",
        "Full Moon Brewworks (Chalawan | Pale Ale) – คราฟต์เบียร์ชาละวัน กลิ่นลิ้นจี่ ดอกไม้ และผิวมะนาว ผสมดอกฮ็อปส์ 6 ชนิด",
        "The Brewing Project (Whale | Pale Ale) – คราฟต์เบียร์ วาฬ สไตล์ American Pale Ale ให้กลิ่นและรสชาติของผลไม้เมืองร้อนอย่างเปลือกมะนาว",
        "Udomsuk Brewing – คราฟต์เบียร์รสชาติออกขม ดุดันตามสไตล์อเมริกัน (อาจหาดื่มยากหน่อยนะครับ)",
        "Golden Coins – นอกจากคราฟต์เบียร์แล้ว ยังมี Golden Coins Taproom คราฟต์เบียร์บาร์แห่งแรกของกรุงเทพฯ มีทั้ง IPA (5%) Pale Ale (5.5%) Wish Do! (6%) และ Happy Stout (5%)",
        "Stone Head – คราฟต์เบียร์สายจัดหนัก ใครเป็นมือใหม่แนะนำให้เริ่มจาก Seven Days Witbier แต่ถ้าอยากไปสุดเลยก็แนะนำ The Dark Side",
        "Triple Pearl – คราฟต์เบียร์สไตล์ Wheat Beer เพิ่มกลิ่นและสัมผัสให้ชัดและโดดเด่นขึ้น ให้รสชาตินุ่ม ๆ สบาย ๆ",
        "Sandport – คราฟต์เบียร์ที่โด่งดังเรื่องเบียร์ดำอย่าง Too Much Coffee Porter คราฟต์เบียร์หอมกลิ่นกาแฟ",
        "Devanom – คราฟต์เบียร์สุดเก๋า แนะนำเป็น Devanom Red is more รสชาติหวานจากการผสมของคาราเมลมอลต์ 4 ชนิด แถมเนื้อเบียร์ยังมีสีแดงสมชื่อ Red is more",
        "Chiang Mai Beer – คราฟต์เบียร์จากเชียงใหม่ แนะนำเป็นตัว Weizen ดื่มง่าย นุ่ม ลื่น เหมาะสำหรับคนที่ไม่ชอบขม",
      ],
      image: null
    }
  ]
}

const SECRET = "your_jwt_secret";
const NOT_FOUND = -1;

exports.users = users;
exports.SECRET = SECRET;
exports.NOT_FOUND = NOT_FOUND;
exports.knowledges = knowledges;

exports.setUsers = function (_users) {
  users = _users;
};

// === validate username/password ===
exports.isValidUser = async (username, password) => {
  const index = users.users.findIndex((item) => item.username === username);
  return await bcrypt.compare(password, users.users[index].password);
};

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
  return users.users.findIndex((item) => item.username === username);
};
