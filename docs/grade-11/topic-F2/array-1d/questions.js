// Creating questionss and answers
var part1 = [{
  question: "Số lượng phần tử của mảng có thể được gọi là gì?",
  answers: ["Kích thước của phần tử", "Chỉ số của phần tử", "Giá trị của phần tử"],
  correct: 0
},
{
  question: "Các phần tử trong mảng có kiểu dữ liệu như thế nào?",
  answers: ["Cùng kiểu dữ liệu", "Có thể khác nhau", "Đều là kiểu số nguyên"],
  correct: 0
},
{
  question: "Mảng có thể có bao nhiêu chiều?",
  answers: ["Một hoặc nhiều chiều", "Tối đa hai chiều", "Chỉ có một chiều"],
  correct: 0
}];

var part2 = [{
  question: "Trong Python, ta có thể sử dụng cấu trúc dữ liệu nào để biểu diễn mảng?",
  answers: ["Tất cả hai phương án kia", "Kiểu list", "Cấu trúc array của thư viện numpy"],
  correct: 0
}];

var part3 = [{
  question: "Dòng lệnh nào sau đây khởi tạo mảng ones gồm 10 phần tử đều có giá trị 1?",
  answers: ["ones = np.full(10, 1)", "ones = np.array(10, 1)", "ones = [1 1 1 1 1 1 1 1 1 1]"],
  correct: 0
}];

var part4 = [{
  question: "Dòng lệnh nào sau đây in ra phần tử áp cuối của mảng A?",
  answers: ["print(A[len(A) - 2]", "print(A[len(A) - 1]", "print(A[-1]"],
  correct: 0
}];

var part5 = [{
  question: "Cho mảng scores lưu điểm số của 30 học sinh. Mã lệnh nào sau đây giúp giáo viên cộng thêm 1 điểm cho mỗi bạn?",
  answers: ["for i in range(len(scores)): scores[i] += 1", "for i in range(30): scores[i] = scores[i] + 1", "for i in range(1, len(scores)): scores[i] = scores[i] + 1"],
  correct: 0
},
{
  question: "for i in range(len(A) - 3, 0, -1): print(A[i], end=' '). Với mảng A trong bài, sau khi thực hiện đoạn mã này, kết quả in ra màn hình là gì?",
  answers: ["4 2 8 8 4 9 0 4 7", "4 2 8 8 4 9 0 4 7 1", "2 8 8 4 9 0 4 7"],
  correct: 0
}];
