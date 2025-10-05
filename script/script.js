// 🌸 Khi mở trang → lấy dữ liệu trong localStorage ra hiển thị
window.onload = function() {
    let saved = localStorage.getItem("tasks");
    if (saved) {
        JSON.parse(saved).forEach(task => {
            createTaskElement(task);
        });
    }
};

// 🌸 Hàm thêm task
function addTask() {
    let kqinput = document.getElementById("taskInput");
    let task = kqinput.value.trim();
    if (task === "") return;

    createTaskElement(task); // hiển thị ra giao diện

    // Lưu vào localStorage
    saveTasks();

    // Xóa ô nhập
    kqinput.value = "";
}

// 🌸 Hàm tạo phần tử <li> cho từng task
function createTaskElement(task) {
    let li = document.createElement("li");
    li.innerText = task;

    // 🔹 Nút Xóa
    let btnXoa = document.createElement("button");
    btnXoa.innerText = "Xóa";
    btnXoa.style.marginLeft = "10px";
    btnXoa.onclick = function() {
        li.remove();
        saveTasks(); // cập nhật lại localStorage
    };
    li.appendChild(btnXoa);

    // 🔹 Nút Sửa
    let btnSua = document.createElement("button");
    btnSua.innerText = "Sửa";
    btnSua.style.marginLeft = "10px";
    btnSua.onclick = function() {
        let newText = prompt("Nhập nội dung mới:", li.firstChild.nodeValue);
        if (newText !== null && newText.trim() !== "") {
            li.firstChild.nodeValue = newText.trim();
            saveTasks(); // cập nhật lại localStorage
        }
    };
    li.appendChild(btnSua);

    // 🔹 Nút Detail
    let btnDetail = document.createElement("button");
    btnDetail.innerText = "Detail";
    btnDetail.style.marginLeft = "10px";
    btnDetail.onclick = function() {
        window.location.href = "task.html?name=" + encodeURIComponent(task);
    };
    li.appendChild(btnDetail);

    // Gắn vào danh sách
    document.getElementById("taskList").appendChild(li);
}

// 🌸 Hàm lưu lại toàn bộ task hiện có vào localStorage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.firstChild.nodeValue);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
