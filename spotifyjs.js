
console.log("welcome to Spotify") ;
let songIndex = 0 ;
let audio = new Audio('songs/1.mp3') ;
let playBtn = document.getElementById('playBtn') ;
let songbar = document.getElementById('songbar') ;
let gif = document.getElementById('gif') ;
let songlist = Array.from(document.getElementsByClassName('songlist')) ;
let currentSong = document.getElementById("currentSong") ;



let songs =[
    {songName: "Levels - Sidhu Moosewala" , filePath:"songs/1.mp3" , coverPath:"covers/logio.jpg"},
    {songName: "Never Fold - Sidhu Moosewala" , filePath:"songs/2.mp3" , coverPath:"covers/Never-Fold-Mp3-Song-Download-.jpg"},
    {songName: "Game Over - Karan Aujla" , filePath:"songs/3.mp3" , coverPath:"covers/hqdefault.jpg"},
    {songName: "The Last Ride - Sidhu Moosewala" , filePath:"songs/4.mp3" , coverPath:"covers/logio.jpg"},
    {songName: "Chauffeur - Diljit Dosanjh" , filePath:"songs/5.mp3" , coverPath:"covers/Diljit-Dosanjh-Tory-Lanez-Ikky-–-Chauffeur-art.jpg"},
    {songName: "Black Life - Naavan Sandhu" , filePath:"songs/6.mp3" , coverPath:"covers/Black-Life-Navaan-Sandhu-500-500.jpg"},
    {songName: "24/7 - Naavan Sandhu " , filePath:"songs/7.mp3" , coverPath:"covers/24x7-navaan-sandhu-e1620656164916.jpg"},
    {songName: "Chal Jindiye - Amrinder Gill" , filePath:"songs/8.mp3" , coverPath:"covers/OIP.jpg"},
    {songName: "No Love - Shubh" , filePath:"songs/9.mp3" , coverPath:"covers/nolove.jpg"},

] ;

songlist.forEach(function(element , i){
    element.getElementsByTagName("img")[0].src = songs[i].coverPath ;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName ;
});


playBtn.addEventListener("click" , function(){
    if(audio.paused || audio.currentTime<=0){
        audio.play() ;
        playBtn.classList.remove('fa-play') ;
        playBtn.classList.add('fa-pause') ;

        gif.style.opacity = 1 ;

    }
    else{
        audio.pause() ;
        playBtn.classList.remove('fa-pause') ;
        playBtn.classList.add('fa-play') ;
        gif.style.opacity = 0 ;
    }
}) ;

audio.addEventListener("timeupdate",function(){
    let time = parseInt((audio.currentTime/audio.duration) * 100) ;
    songbar.value = time ;
}) ;

songbar.addEventListener("change" , function(){
    audio.currentTime = ( songbar.value * audio.duration / 100) ;
}) ;

const makeAllPlays = function(){
    Array.from(document.getElementsByClassName("songplay")).forEach(function(element){
        element.classList.remove("fa-pause") ;
        element.classList.add("fa-play") ;
    }) ;
}

Array.from(document.getElementsByClassName("songplay")).forEach(function(element){
    element.addEventListener("click" , function(e){
        makeAllPlays() ;
        songIndex = parseInt(e.target.id) ;
        e.target.classList.remove("fa-play") ;
        e.target.classList.add("fa-pause") ;
        audio.src = `songs/${songIndex+1}.mp3` ;
        audio.currentTime = 0 ;
        audio.play() ;
        gif.style.opacity = 1 ;
        currentSong.innerText = songs[songIndex].songName ;
        playBtn.classList.add("fa-pause") ;
        playBtn.classList.remove("fa-play") ;
    }) ;
}) ;


document.getElementById("next").addEventListener("click" , function(){
    if(songIndex >= 0 && songIndex<=7){
        songIndex += 1 ;
    }else if(songIndex == 8){
        songIndex=0 ;
    }
    
    audio.src = `songs/${songIndex+1}.mp3` ;
        audio.currentTime = 0 ;
        audio.play() ;
        gif.style.opacity = 1 ;
        currentSong.innerText = songs[songIndex].songName ;
        playBtn.classList.add("fa-pause") ;
        playBtn.classList.remove("fa-play") ;

}) ;

document.getElementById("previous").addEventListener("click" , function(){
    if(songIndex > 0 && songIndex<=8){
        songIndex -= 1 ;
    }else if(songIndex == 0){
        songIndex=0 ;
    }
    
    audio.src = `songs/${songIndex+1}.mp3` ;
        audio.currentTime = 0 ;
        audio.play() ;
        gif.style.opacity = 1 ;
        currentSong.innerText = songs[songIndex].songName ;
        playBtn.classList.add("fa-pause") ;
        playBtn.classList.remove("fa-play") ;

}) ;
