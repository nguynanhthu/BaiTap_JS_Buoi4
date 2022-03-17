/**bài 1 */
document.getElementById("tinhSoNguyen").onclick = function(){
    // var ketQua = "";
    var so_1 = document.getElementById("txtso_1").value*1;
    var so_2 = document.getElementById("txtso_2").value*1;
    var so_3 = document.getElementById("txtso_3").value*1;

    var array1 = [so_1, so_2, so_3];
    // console.log(array1);
    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];
        if (array1[0] > array1[1]){
            var so = array1[1];
            array1[1] = array1[0]
            array1[0] = so
            
        }
        // console.log(array1);
        if (array1[1] > array1[2]) {
            var so = array1[2];
            array1[2] = array1[1]
            array1[1] = so
        }
        
    }
    document.getElementById("tinhTangDan").innerHTML = array1[0] + "," + array1[1] + "," + array1[2];
};

/**
 * bài 2
 */
document.getElementById("btnChaoHoi").onclick = function (){
    var ketQua = "";
    var nhapNguoiSuDung = document.getElementById("txtNguoiSuDung").value;
    
    if (nhapNguoiSuDung="b") {
        ketQua = "chào bố";
    } else if(nhapNguoiSuDung="m") {
        ketQua = "chào mẹ";
    } else if (nhapNguoiSuDung="a") {
        ketQua = "chào anh trai";
    } else if (nhapNguoiSuDung="e") {
        ketQua = "chào em gái";
    } else {
        ketQua = "không biết";
    }

    document.getElementById("footerChaoHoi").innerHTML = ketQua;
};


/**bài 4 */
document.getElementById("btntinhDienTich").onclick = function(){
     var ketQua = "";

    var canh_1 = document.getElementById("canh_1").value*1;
    var canh_2 = document.getElementById("canh_2").value*1;
    var canh_3 = document.getElementById("canh_3").value*1;

    console.log(canh_1);
    console.log(canh_2);
    console.log(canh_3);

    var tong_1 = canh_1 + canh_2;
    var tong_2 = canh_2 + canh_3;
    var tong_3 = canh_1 + canh_3;

    if (tong_1 > canh_3 && tong_2 > canh_1 && tong_3 > canh_2) {
        if (canh_1 == canh_2 || canh_2 == canh_3 || canh_1 == canh_3 ) {
            // console.log("tam giác cân");
            if (canh_1 == canh_2 && canh_1 == canh_3 && canh_2 == canh_3) {
                ketQua = "tam giác đều";
            } else {
                ketQua = "tam giác cân";
            }
        } else  {
            var pytago1 = Math.sqrt(canh_1*canh_1 + canh_2*canh_2) == canh_3;
            var pytago2 = Math.sqrt(canh_1*canh_1 + canh_3*canh_3) == canh_2;
            var pytago3 = Math.sqrt(canh_2*canh_2 + canh_3*canh_3) == canh_1;
            if (pytago1 || pytago2 || pytago3) {
                ketQua = "tam giác vuông";
            } else {
                ketQua = "tam giác thường";
            }

        }
    } else {
        ketQua = "đây không phải là tam giác";
    }

    document.getElementById("footertinh").innerHTML = ketQua;
};


/** bài 3 */
document.getElementById("tinhSoChanLe").onclick = function (){
    var demchan = 0;
    var demle = 0;
    var so_1 = document.getElementById("nhapSo_1").value*1;
    var so_2 = document.getElementById("nhapSo_2").value*1;
    var so_3 = document.getElementById("nhapSo_3").value*1;

    if (so_1 % 2 === 0) {
        demchan += 1;
    } else {
        demle +=1;
    }

    if (so_2 % 2 === 0) {
        demchan +=1;
    } else {
        demle +=1;
    }

    if (so_3 % 2 === 0) {
        demchan +=1;
    } else {
        demle +=1;
    }

    console.log(demchan);
    console.log(demle);

    document.getElementById("tongSoChanLe").innerHTML = "Có " + demchan + " số chẵn," + demle + " số lẻ";
};