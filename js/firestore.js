import { getFirestore,  collection, getDocs , addDoc, deleteDoc , doc} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBkV5fcG65d8QvTuZw_qTRxgVK-TH9-m-8",
    authDomain: "signin-firebase-f9f1e.firebaseapp.com",
    databaseURL: "https://signin-firebase-f9f1e-default-rtdb.firebaseio.com",
    projectId: "signin-firebase-f9f1e",
    storageBucket: "signin-firebase-f9f1e.appspot.com",
    messagingSenderId: "558489745179",
    appId: "1:558489745179:web:7a7c65a398cab6e686c5be",
    measurementId: "G-H98LWXDR04"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // khai báo datebase từ fisetore
  const db = getFirestore(app);
  // 
  // asnyc - await : giải quyết bất đồng bộ
  // asnyc function trả về promis -> promise.then(rs => rs)
  // lấy dữ liệu
  const getData = async (db) => {
    let code = ``;
    const querySnapshot = await getDocs(collection(db, "cart"));
    querySnapshot.forEach((doc) => {
        code += `<h1>${doc.data().product}</h1>`
             + `<p>${doc.data().quantity}</p>`
            //  + `<img src="${doc.data().avaturl}" alt="" style="max-height:100px"/>`
            //  + `<p>${doc.data().rating}</p>` 
    });
    return code;
  }
  //lấy dữ kiệu từ 1 id 
//   const getDataById = async (db, id) => {
//     let object = {};
//     const querySnapshot = await getDocs(collection(db, "cart"));
//     object = querySnapshot.forEach((doc) => {
//         doc.data().id == id ? doc.data() : null ;
        
//   })
//   return object;
// } 
  // tạo dữ liệu
   const createData = async (db, object) => {

  try {
  const docRef = await addDoc(collection(db, "products"), {
        name: object.name,
        price: object.price,
        rate: object.rate,
        image:object.image,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
   }
  // thêm dữ liệu vào cart
  const createitem = async (db, object) => {

    try {
    const docRef = await addDoc(collection(db, "cart"), {
      product:object.product,
      quantity:object.quantity,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
     }
     const obj = {quantity: 2,product: "a49Mvce7NkI9sOVd6REs"}
     document.getElementById("add").addEventListener("click",await createitem(db, obj))
  // xóa dữ liệu
   const deleteDataById = async (db, id) => {
    deleteDoc(doc(db, "cart", id));
   }
  //test
  const productslist = [
    {
        name: "Armchair Bridge Gỗ Tự nhiên Da đen",
        price: "66,200,000đ",
        rate: 4.5,
        image:"https://nhaxinh.com/wp-content/uploads/2021/10/armchair_bridge_black_1.jpg"
    },
    {
        name: "Tủ tivi Bridge Gỗ 1m8 Màu nâu",
        price: "56,000,000đ",
        rate: 4.5,
        image:"https://nhaxinh.com/wp-content/uploads/2021/10/1000-san-pham-nha-xinh48-600x400.jpg"
    },
    {
        name: "Ghế Bar Bridge màu nâu Da Cognac",
        price: "30,500,000đ",
        rate: 4.5,
        image:"https://nhaxinh.com/wp-content/uploads/2022/05/ghe-bar-bridge-mau-nau-cognac-go-soi.jpg"
    },
    {
        name: "Tủ ly Bridge gỗ màu Tự nhiên",
        price: "57,700,000đ",
        rate: 4.5,
        image:"https://nhaxinh.com/wp-content/uploads/2021/10/1000-tu-tivi-bridge-600x400.jpg"
    },
    {
        name: "Bàn nước Bridge mặt Marble đen 120cm",
        price: "37,506,000đ",
        rate: 4.5,
        image:"https://nhaxinh.com/wp-content/uploads/2021/10/84909-1000x666-1-600x400.jpg"
    },
    {
        name: "Console Bridge P4C Onyx",
        price: "39,990,000đ",
        rate: 4.5,
        image:"https://nhaxinh.com/wp-content/uploads/2021/10/82528-1000x666-1-600x400.jpg"
    },
    {
        name: "Sofa Bridge 3 chỗ hiện đại da đen",
        price: "112,000,000đ",
        rate: 4.5,
        image:"https://nhaxinh.com/wp-content/uploads/2021/10/sofa-bride-go-goi-da-bo-that-cao-cap-hien-dai-dang-cap-sang-trong-600x400.jpg"
    },
    {
        name: "Giường Hộc Kéo Iris 1M8 Vải Belfast 41",
        price: "15,900,000đ",
        rate: 4.5,
        image:"https://nhaxinh.com/wp-content/uploads/2021/10/giuong_iris_1m6_stone3.jpg"
    },
    {
        name: "Kệ sách Glamour màu trắng",
        price: "25,200,000đ",
        rate: 4.5,
        image:"https://nhaxinh.com/wp-content/uploads/2021/11/61148_ke_sach_glamour_mau_trang_l2.jpg"
    },
    ]
    // for (let index = 0; index < productslist.length; index++) {
    //   const element = array[index];
      
    // }
  await createData(db, "s").then(rs => rs).catch(e => console.log(e));
  // document.getElementById('app').innerHTML += await getData(db).then(rs => rs);
//   console.log(await getDataById(db , "O2NpHOLkEYItbB7oscNn").then(rs => rs));
  // await deleteDataById(db, "Gv0COHiYuxfOAUFXivaZ");