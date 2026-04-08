const chatForm = document.getElementById('chatForm');
const chatText = document.getElementById('chatText');
const chatWindow = document.getElementById('chatWindow');

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = chatText.value.trim();
  if (!value) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.textContent = value;
  chatWindow.appendChild(userMsg);

  const botMsg = document.createElement('div');
  botMsg.className = 'msg bot';
  botMsg.textContent =
    'Đã ghi nhận yêu cầu. Tôi sẽ gợi ý bố cục công văn và tạo dự thảo chi tiết để anh/chị chỉnh sửa.';
  chatWindow.appendChild(botMsg);

  chatWindow.scrollTop = chatWindow.scrollHeight;
  chatText.value = '';
});

document.getElementById('analyzeBtn').addEventListener('click', () => {
  const fileInput = document.getElementById('docFile');
  const analysisBox = document.getElementById('analysisBox');

  if (!fileInput.files.length) {
    analysisBox.innerHTML = '<p>Vui lòng chọn tài liệu trước khi phân tích.</p>';
    return;
  }

  analysisBox.innerHTML = `
    <p><strong>Tệp đã chọn:</strong> ${fileInput.files[0].name}</p>
    <p><strong>Gợi ý mẫu văn bản:</strong> Tờ trình</p>
    <p><strong>Gợi ý tham mưu:</strong> Nêu căn cứ pháp lý, đề xuất phương án thực hiện theo tiến độ và đầu mối phối hợp.</p>
  `;
});
