AOS.init();


function OnSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].className = "list-group-item list-group-item-action";
        } else {
            li[i].className = "d-none";
        }
    }
}

// นำ URL ของไฟล์ .txt มาใส่ที่นี่
const txtFileUrl = 'thetext.txt';
// ใช้ fetch เพื่อโหลดข้อมูลจากไฟล์ .txt
fetch(txtFileUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(textData => {
    // แสดงข้อมูลใน div ที่มี id เท่ากับ "content"
    document.getElementById('content').textContent = textData;
  })
  .catch(error => {
    console.error('Error fetching the text file:', error);
  });


document.addEventListener("DOMContentLoaded", function () {
    const messageElement = document.getElementById("message");
    const InSpan = document.getElementById("InSpan");

    function updateMessage() {
        const now = new Date();
        const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const hours = now.getHours();
        const minutes = now.getMinutes();

        const isWeekdayAndDayTime = dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 7 && minutes >= 0 && hours <= 20 && minutes <= 0;

        if (isWeekdayAndDayTime) {
            messageElement.textContent = "เปิดบริการ";
            InSpan.className = "text-success spinner-border spinner-border-sm";
            messageElement.className = "text-success"; // ใช้สีเขียว
        } else {
            messageElement.textContent = "ปิดบริการ";
            InSpan.className = "text-danger spinner-border spinner-border-sm";
            messageElement.className = "text-danger"; // ใช้สีแดง
        }
    }

    // ประมวลผลเพื่อให้แสดงข้อความและสีที่ถูกต้องทุกๆ 1 นาที
    updateMessage();
    setInterval(updateMessage, 60000);
});
  