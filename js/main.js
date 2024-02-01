function domID(id) {
    return document.getElementById(id);
}
// Mảng số dương
let listNumber = [];
let mangSoDuong = [];
let mangSoAm = []
domID("addNumber").onclick = function () {
    let getNumber = Number(domID("inputNumber").value);
    listNumber.push(getNumber);
    domID("inMang").innerHTML = listNumber;
    if (getNumber % 2 == 0) {
        mangSoDuong.push(getNumber);
    }
    else { mangSoAm.push(getNumber); }
}

// Tổng dương và Đếm số dương
domID("btnTongDuong").onclick = function () {
    xuLySoDuong()
};
domID("btnDemSoDuong").onclick = function () {
    xuLySoDuong();
}
function xuLySoDuong() {
    let tongDuong = 0;
    let demSoDuong = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 == 0) {
            tongDuong += listNumber[i];
            demSoDuong++;
        }
    }
    domID("tongDuong").innerHTML = tongDuong;
    domID("demSoDuong").innerHTML = demSoDuong;
}

// Tìm số nhỏ nhất trong mảng
domID("btnSoNhoNhat").onclick = function () {
    let soNhoNhat = listNumber[0];
    for (let i = 1; i < listNumber.length; i++) {
        if (soNhoNhat > listNumber[i]) {
            soNhoNhat = listNumber[i];
        }
    }
    domID("soNhoNhat").innerHTML = soNhoNhat;
}

// Tìm số dương nhỏ nhất
domID("btnDuongNhoNhat").onclick = function () {
    let soDuongNhoNhat = mangSoDuong[0];
    for (let j = 1; j < mangSoDuong.length; j++) {
        if (soDuongNhoNhat > mangSoDuong[j]) {
            soDuongNhoNhat = mangSoDuong[j];
        }
    }
    domID("soDuongNhoNhat").innerHTML = soDuongNhoNhat;
}

// Tìm số chẵn cuối cùng
domID("btnDuongCuoi").onclick = function () {
    let soDuongCuoi = 0;
    for (let j = 0; j < mangSoDuong.length; j++) {
        if (j == (mangSoDuong.length - 1)) {
            soDuongCuoi = mangSoDuong[j];
        }
    }
    domID("soDuongCuoi").innerHTML = soDuongCuoi;
}

// Đổi chỗ phần tử
domID("btnDoicho").onclick = function () {
    let phanTu1 = Number(domID('doiCho1').value);
    let phanTu2 = Number(domID('doiCho2').value);
    if (phanTu1 == phanTu2) {
        domID("doiCho").className = 'alert alert-danger'
        domID("doiCho").innerHTML = "Vị trí hai phần tử trùng nhau. Hãy nhập lại!"
    }
    else if (phanTu1 > listNumber.length || phanTu2 > listNumber.length) {
        domID("doiCho").className = 'alert alert-danger'
        domID("doiCho").innerHTML = "Vị trí phần tử vượt quá độ dài mảng. Hãy nhập lại!"
    }
    let bientam = listNumber[phanTu1];
    listNumber[phanTu1] = listNumber[phanTu2];
    listNumber[phanTu2] = bientam;
    domID("doiCho").innerHTML = listNumber;
}
// Sắp xếp mảng tăng dần
domID("btnSapXep").onclick = function () {
    for (let i = 0; i < (listNumber.length - 1); i++) {
        for (let j = i + 1; j < listNumber.length; j++) {
            if (listNumber[j] < listNumber[i]) {
                let bienTam = listNumber[j];
                listNumber[j] = listNumber[i];
                listNumber[i] = bienTam;
            }
        }
    }
    domID("sapXepMang").innerHTML = listNumber;
}
// Tìm số nguyên tố đầu trong mảng
let mangKiemTra = [];
function taoMangKiemTra() {
    for (let m = 1; m <= 10; m++) {
        mangKiemTra.push(m);
    }
}
taoMangKiemTra();
domID("btnNguyenToDau").onclick = function () {
    let n = 0;
    let soNguyenTodau = 0;
    for (let i = 0; i < listNumber.length; i++) {
        for (let j = 0; j < mangKiemTra.length; j++) {
            if (listNumber[i] % mangKiemTra[j] == 0) {
                n++;
            }
        }
        if (n == 2) {
            soNguyenTodau = listNumber[i];
            domID("soNTdau").innerHTML = soNguyenTodau;
            break;
        }
        else {
            domID("soNTdau").innerHTML = 'Không có số nguyên tố trong mảng';
        }
        n = 0;
    }
}

// So sánh lượng số dương và âm
domID("btnSoSanh").onclick = function () {
    let m = 0;
    let n = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            n++;
        }
        else {
            m++;
        }
    }
    if (m > n) {
        domID("inSoSoSanh").innerHTML = "Số dương: "+ n +" Số âm: " + m;
        domID("soSanh").innerHTML = 'Số âm trong mảng nhiều hơn'
    }
    else if (m == n) {
        domID("inSoSoSanh").innerHTML = "Số dương: "+ n +" Số âm: " + m;
        domID("soSanh").innerHTML = 'Lượng số âm dương bằng nhau'
    }
    else{
        domID("inSoSoSanh").innerHTML = "Số dương: "+ n +" Số âm: " + m;
        domID("soSanh").innerHTML = 'Số dương trong mảng nhiều hơn'
    }
}

// Tìm số nguyên trong mảng số thực
let listNumber_2 = [];
domID("addNumber_2").onclick = function () {
    let getNumber = Number(domID("inputNumber_2").value);
    listNumber_2.push(getNumber);
    domID("inMang_2").innerHTML = listNumber_2;
}
domID("btnSoNguyen").onclick= function(){
    let mangSoNguyen = [];
    for(let i = 0; i<listNumber_2.length; i++){
        if(Number.isInteger(listNumber_2[i]) == true){
            let soNguyen = listNumber_2[i];
            mangSoNguyen.push(soNguyen);
        }
    }
    domID("timSoNguyen").innerHTML = mangSoNguyen;
}
