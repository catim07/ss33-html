const products = [
    {
      id: 1,
      name: 'Laptop Dell XPS 15',
      price: 35990000,
      image: 'https://th.bing.com/th/id/OIP.B6Wu18AL3BXCpZtB43gKZAHaEY?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      price: 32990000,
      image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
      description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: 28990000,
      image: 'https://th.bing.com/th/id/OIP.Dsbg_lJqUbThqEYepTq9rwHaFj?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
    },
    {
      id: 4,
      name: 'Tai nghe Sony WH-1000XM5',
      price: 7990000,
      image: 'https://th.bing.com/th/id/OIP.TcIvt84bLV8tCHrWFmjHrQHaHa?w=283&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
    },
    {
      id: 5,
      name: 'Apple Watch Series 9',
      price: 11990000,
      image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
      description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
    },
    {
      id: 6,
      name: 'Loa JBL Charge 5',
      price: 3990000,
      image: 'https://th.bing.com/th?q=JBL+Charge+5+Blue+PNG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247',
      description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
    }
];
function printf(e){
    e.preventDefault()
    let show=document.getElementById("show")
    let data=``;
    let input=document.getElementById("input").value
    for(let i=0;i<products.length;i++){
       if(products[i].name.toUpperCase().includes(input.toUpperCase())){
        data+=`<div class="card" style="width: 18rem;">
        <img src="${products[i].image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${products[i].name}</h5>
          <p class="card-text">${products[i].description}</p>
          <p>${products[i].price} VNĐ</p>
          <a href="#" class="btn btn-primary">Buy</a>
        </div>
      </div>`
       }
    }
    show.innerHTML=data
    printf()
}

  