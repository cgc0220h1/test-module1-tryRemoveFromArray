let demoArr = [];

function addNumberArray(array) {
    let index = 1;
    let input = 0;
    while (input !== null) {
        input = prompt("Nhập vào số thứ: " + index + " của mảng. Nhấn cancel để lưu lại mảng");
        if (isNaN(input)) {
            alert("Số không hợp lệ do dữ liệu nhập vào là ký tự. Vui lòng nhập lại.");
        } else if (input === "") {
            alert("Trường không được để trống, vui lòng nhập số vào");
        } else {
            array.push(+input);
            index++;
        }
    }
    array.pop();
    return array;
}

function findNum(array, number) {
    while (array.indexOf(number) !== -1) {
        array.splice(array.indexOf(number), 1)
    }
    return array;
}

function start() {
    let input;
    let result;
    addNumberArray(demoArr);
    alert("Các số vừa nhập vào lần lượt là: " + demoArr.join(", "));
    input = +prompt("Nhập vào số cần tìm: ");
    result = findNum(demoArr, input);
    alert("Mảng kết quả là: " + result.join(", "));
    demoArr = []
}

