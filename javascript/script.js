function showIntroductionPopup() {
    alert("Do you know🧐"); // 弹窗提示
    alert("Oranges Are Not the Only Fruit😉");
    alert("But you are🥰"); 
}

function showIntroductionPopup1() {
    alert("Trick or Treat!🎃");
}

function showIntroductionPopup2() {
    alert("Trick or Treat!🎃");
}


/*message board*/
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止页面刷新

    const username = document.getElementById('username').value;
    const userMessage = document.getElementById('userMessage').value;

    // 创建留言项元素
    const messageItem = document.createElement('div');
    messageItem.classList.add('message-item');
    messageItem.innerHTML = `<strong>${username}</strong>: <p>${userMessage}</p>`;
    
    // 添加到留言列表
    document.getElementById('messageList').appendChild(messageItem);

    // 清空输入框
    document.getElementById('username').value = '';
    document.getElementById('userMessage').value = '';
});
