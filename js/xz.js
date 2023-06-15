var box = `<div class="box">
                <img src="https://nhaxinh.com/wp-content/uploads/2021/10/ban-nuoc-bridge-82524-600x400.jpg" alt="">
                <div class="content">
                    <h2>Bàn nước Bridge mặt Marble</h2>
    
                    <div class="stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star-half'></i>
                    </div>
    
                    <span>41,900,000đ</span>
                    <i class='bx bxs-cart'></i>
                </div>
            </div>`;

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
function showlist() {
    for (let index = 0; index < productslist.length; index++) {
        document.getElementById("product").innerHTML += `<div class="box">
        <img src="${productslist[index].image}" alt="">
        <div class="content">
            <h2>${productslist[index].name}</h2>

            <div class="stars">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
            </div>

            <span>${productslist[index].price}</span>
            <i class='bx bxs-cart'></i>
        </div>
    </div>`;
    }
}
showlist()