//object

//nama
//jenis
//penambahan
//pengurangan

let kalkulator = {
    nama: "kalkulator A",
    jenis: "Jadul",
    penambahan: function(a,b) {return a+b},
    pengurangan: function(a,b) {return a-b},


}

// cara yang bisa dipakai
console.log(kalkulator["nama"])
console.log(kalkulator.nama)

let kulkas = {
    nama: "Kulkas A",
    pendingin: {
        nama : "pendingin A",
        dinginin : function() {console.log("dinginnnnn......")}
    }
}

console.log(kulkas.pendingin.nama)






//for (var i = 0; i < 10;i += 1){
   // console.log("Nama")
//}

//let mahasiswa = ["May", "Agus", "Doni"]

//for (nama of mahasiswa){
    //console.log(nama)
//}
//for (var i = 0; i < mahasiswa.length; i+=1){
    //console.log(mahasiswa[i])
//}

// let nilai = 10000
// let perilaku = "Kurang baik" === "Kurang Baik"

// let prestasiMurid = nilai > 70 ? "Berprestasi" : "Kurang Berprestasi"

// console.log (nilai < 70 ? "Kurang Prestasi" : "Berprestasi")
// console.log("kurang Prestasi")
// console.log(prestasiMurid)


// if (nilai < 60 || perilaku !== "Baik"){
//          console.log ("kurang prestasi")
//      } else if (nilai <= 70){
//         console.log("Biasa prestasi")
//     } else {
//        console.log("Prestasi")
//     }

// switch (perilaku) {
//     case "Kurang Baik" : 
//         console.log("Kurang Prestasi")
//         break
//     case "Baik" :
//         console.log ("Prestasi")
//         break
//     default :
//         console.log("Error Program")
// }

 // nested-if
    // if (perilaku === "Baik"){
        // console.log ("Biasa prestasi")
    // } else {
        // console.log("kurang prestasi")
    // }
        // console.log 
//     console.log("kurang prestasi")


//  var inputan = "arif";
//  var inputan = 4;
// let input;
// const PHI = 3.14;

// 2 * inputan * PHI
// inputan = "gary"