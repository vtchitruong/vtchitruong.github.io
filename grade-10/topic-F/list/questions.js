// Creating questions and answers
var part1 = [{
  question: "Kiểu list của Python có cho phép lưu trữ 10 phần tử đầu kiểu số thực float và một phần tử cuối kiểu bool không?",
  answers: ["Hoàn toàn được", "Hoàn toàn không được", "Được nhưng phải khai báo thêm thư viện khác"],
  correct: 0
}];

var part2 = [{
  question: "Dòng lệnh nào sau đây đúng khi khai báo danh sách L?",
  answers: ["L = [1, 7, 4, 0, 9, 4, 8, 8]", "L = 1, 7, 4, 0, 9, 4, 8, 8", "L = [1 7 4 0 9 4 8 8]"],
  correct: 0
}];

var part3 = [{
  question: "L = []. print(len(L)). Sau khi thực hiện đoạn mã này, kết quả in ra trên màn hình là gì?",
  answers: ["0", "empty", "1"],
  correct: 0
}];

var part4 = [{
  question: "Giả sử học sinh áp cuối đã làm bài gỡ điểm, được nâng thành 6. Dòng lệnh nào sau đây dùng để thực hiện việc này?",
  answers: ["score_list[n - 2] = 6", "score_list[n - 1] = 6", "score_list[n - 2] += 6"],
  correct: 0
}];

var part5 = [{
  question: "for i in range(5, n - 1): print(score_list[i], end=' '). Với danh sách score_list trong bài, sau khi thực hiện đoạn mã này, kết quả in ra màn hình là gì?",
  answers: ["10 7.4 8.4 4.9", "10 7.4 8.4 4.9 6.8", "10 10 7.4 8.4 4.9"],
  correct: 0
},
{
  question: "for i in range(0, n, 4): print(score_list[i], end=' '). Với danh sách score_list trong bài, sau khi thực hiện đoạn mã này, kết quả in ra màn hình là gì?",
  answers: ["8.1 10 4.9", "8.1 10", "8.1 9.6 3.5 5.5"],
  correct: 0
}];