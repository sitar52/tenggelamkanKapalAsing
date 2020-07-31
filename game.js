function timeUp (){ 
    alert('waktu habis')
    
}
function salahKlik(){ 
    alert('anda salah klik')
    
}

//waktu dimulai setelah button di klik 
var seconds = 13
var timer

function startTime() {
    if(seconds < 13){
        document.getElementById('timer').innerHTML = seconds
    }
    if(seconds>0){
        seconds--
    }else{
        timeUp()
        window.location.href="kalahWaktuHabis.html"
    }
}

document.getElementById('playBtn').onclick = function () {
    
    if(!timer){
        timer = window.setInterval(function() {
            startTime()
        },1000)
    }
}

document.getElementById('timer').innerHTML="13 detik"

//menyembunyikan button setelah di klik play    
    // belum jalan??
    document.getElementById('playBtn').addEventListener('click',function(){
        var hidden =false
        hidden = !hidden
        if(hidden){
            document.getElementById('playBtn').style.visibility='hidden'
        }else{
            document.getElementById('playBtn').style.visibility='visible'
        }
    })
 

//setelah button di klik muncul image kapal bajak laut sebanyak 10 buah 
//dan kapal nelayan 15
document.getElementById('playBtn').addEventListener('click',function () {
    document.getElementById('sembunyi').style.display= 'block';
})


//setiap image kapal bajak laut di klik

//ganti image kapal bajak laut jadi kapal meledak
// sekaligus menghitung jumlah kapal laut yang ke klik (jika jumlah telah 0 maka diarahkan ke finish)


    // var countKapalAsing= 15
    

    
var count= 15

kapalBajakLaut1.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut1').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})

kapalBajakLaut2.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut2').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut3.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut3').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut4.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut4').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut5.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut5').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut6.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut6').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut7.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut7').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut8.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut8').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut9.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut9').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut10.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut10').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut11.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut11').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut12.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut12').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut13.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut13').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut14.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut14').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})
kapalBajakLaut15.addEventListener('click',function () {
    document.getElementById('kapalBajakLaut15').src ='ledak.png'
    count--
    if(count===0){
        window.location.href="finish.html"
    }
})

kapalNelayan1.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})

kapalNelayan2.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan3.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan4.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan5.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan6.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan7.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan8.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan9.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan10.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan11.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan12.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan13.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan14.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})
kapalNelayan15.addEventListener('click',function () {
    salahKlik()
    window.location.href="kalahSalahKlik.html"
})