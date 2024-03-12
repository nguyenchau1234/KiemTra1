let rooms = [
    { type: "Phòng đơn", roomCode: "ABC1", image: "https://www.cet.edu.vn/wp-content/uploads/2018/01/phong-standard-loai-phong-tieu-chuan.jpg", price: 399.999 },
    { type: "Phòng đôi", roomCode: "ABC2", image: "https://noithattrevietnam.com/uploaded/2020/06/cac-loai-phong-khach-san%20%284%29.jpg", price: 699.999 }
  ];

  function displayRooms() {
    const tableBody = document.getElementById("roomData");
    tableBody.innerHTML = "";

    rooms.forEach((room, index) => {
      const row = `<tr>
              <td>${room.type}</td>
              <td>${room.roomCode}</td>
              <td><img src="${room.image}" alt="${room.type}" style="width: 100px; height: 100px;"></td>
              <td>${room.price.toLocaleString('vi-VN')} VND</td>
              <td><button class="btn-edit" onclick="editRoom(${index})">Sửa</button>
                  <button class="btn-delete"onclick="deleteRoom(${index})">Xóa</button></td>
            </tr>`;
      tableBody.innerHTML += row;
    });
  }
  
  const form = document.getElementById("roomForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const type = document.getElementById("type").value;
    const roomCode = document.getElementById("roomCode").value;
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;
    rooms.push({ type, roomCode, image, price });
    displayRooms();
    form.reset();
  });

  function editRoom(index) {
    const newType = prompt("Nhập loại phòng mới:", rooms[index].type);
    const newRoomCode = prompt("Nhập mã phòng mới:", rooms[index].roomCode);
    const newImage = prompt("Nhập URL hình ảnh mới:", rooms[index].image);
    const newPrice = prompt("Nhập mức giá mới:", rooms[index].price);
    if (newType && newRoomCode && newImage && newPrice) {
    rooms[index] = { type: newType, roomCode: newRoomCode, image: newImage, price: newPrice };
    displayRooms();
    }
    }
    
    function deleteRoom(index) {
    const confirmation = confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmation) {
    rooms.splice(index, 1);
    displayRooms();
    }
    }
    
    displayRooms();