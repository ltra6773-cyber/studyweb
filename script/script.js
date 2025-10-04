function addTask() {
        let kqinput = document.getElementById("taskInput");
        let task = kqinput.value;
        if (task === "") return;  // không cho thêm rỗng

        // Tạo phần tử <li>
        let li = document.createElement("li");
        li.innerText = task;

        // Tạo nút Xóa
        let btn = document.createElement("button");
        btn.innerText = "Xóa";
        btn.style.marginLeft = "10px";
        btn.onclick = function() {
        li.remove();
        };

        // Gắn nút vào li
        li.appendChild(btn);
        // Xóa input
        kqinput.value = "";
        // Tạo nút sua
        let dlt = document.createElement("button");
        dlt.innerText = "sửa";
        dlt.style.marginLeft = "10px";
        dlt.onclick = function() {
            let newText = prompt("Nhập nội dung mới:", li.firstChild.nodeValue);
            if (newText !== null && newText.trim() !== "") {
                li.firstChild.nodeValue = newText.trim();
            }
        };
        // Gắn nút vào li
        li.appendChild(dlt);
        // nút Detail
        let dl = document.createElement("button");
        dl.innerText = "Detail";
        dl.style.marginLeft = "10px";
        dl.onclick = function() {
        window.location.href = "task.html?name=" + encodeURIComponent(task);


        };
        li.appendChild(dl);
        document.getElementById("taskList").appendChild(li);
        
    }

