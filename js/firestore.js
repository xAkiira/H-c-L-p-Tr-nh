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
  const docRef = await addDoc(collection(db, "cart"), {
    product:"product/O2NpHOLkEYItbB7oscNn",
    quantity: 2
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
   }
  // xóa dữ liệu
   const deleteDataById = async (db, id) => {
    deleteDoc(doc(db, "cart", id));
   }
  //test
//   await createData(db, "s").then(rs => rs).catch(e => console.log(e));
  document.getElementById('app').innerHTML += await getData(db).then(rs => rs);
//   console.log(await getDataById(db , "O2NpHOLkEYItbB7oscNn").then(rs => rs));
  await deleteDataById(db, "Gv0COHiYuxfOAUFXivaZ");