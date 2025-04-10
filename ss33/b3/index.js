let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
  { name: 'Thịt lợn', category: 'Đồ ăn' },
  { name: 'Pepsi không calo', category: 'Nước' },
  { name: 'Cocacola', category: 'Nước' },
  { name: 'Cờ lê', category: 'Dụng cụ' },
  { name: 'Tuy vít', category: 'Dụng cụ' },
]
function check(){
    let printfList=document.getElementById("printfList")
    let data=``;
    let valueJuan=document.getElementById("chose").value
    for(let i=0;i<dish.length;i++){
        if(dish[i].category.toLowerCase()===valueJuan.toLowerCase()){
            data+=`<li>Tên đồ ăn: ${dish[i].name} - Danh mục: ${dish[i].category}</li>`
        }
    }
    printfList.innerHTML=data
    check()
}