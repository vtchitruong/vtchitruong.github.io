// Creating questions and answers
var part1 = [{
  question: "Mã lệnh nào sau đây không dùng đề kiểm tra một phần tử là số lẻ?",
  answers: ["if L[i] % 2 != 1:", "if L[i] % 2 == 1:", "if L[i] % 2 != 0:"],
  correct: 0
}];

var part2 = [{
  question: "Mã lệnh nào sau đây dùng để đếm số phần tử âm trong danh sách?",
  answers: ["if L[i] < 0: c += 1", "if L[i] > 0: c = c + 1", "if L[i] < 0: c = + 1"],
  correct: 0
}];

var part3 = [{
  question: "Để tìm phần tử đầu tiên tính từ cuối mảng ngược về đầu thoả điều kiện, ta viết vòng lặp như thế nào? Biết rằng n là số lượng phần tử của danh sách.",
  answers: ["for i in range(n - 1, -1, -1):", "for i in range(n, -1, -1):", "for i in range(n - 1, 0, -1)"],
  correct: 0
}];

var part4 = [{
  question: "Mã lệnh if nào sau đây dùng để tìm giá trị nhỏ nhất trong danh sách?",
  answers: ["if L[i] < m: m = L[i]", "if L[i] > m: m = L[i]", "if m < L[i]: m = L[i]"],
  correct: 0
}];