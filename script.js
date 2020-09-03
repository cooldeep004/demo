var modalBox1 = document.querySelector('.modal__Box1');
var closeBtn1 = document.querySelector('.close-modal1');
var modalBox = document.querySelector('.modal__Box');
var closeBtn = document.querySelector('.close-modal');
var modalBoxContent = document.querySelector('.modal__Box--content');
var modalBoxContentIMG = document.querySelector('.modal__Box--content-active-img');
var modalBoxContentIMG1 = document.querySelector('.modal__Box--content-active-img1');
var images = document.querySelectorAll('.image-slider');
var videos = document.querySelectorAll('.video-slider');
/*for closing th popup*/
closeBtn.addEventListener("click", () => {
    modalBox.style.display = "none";
})  
closeBtn1.addEventListener("click", () => {
    modalBox1.style.display = "none";
})  

/*function for next image*/
function nextImg(){
    var modalActiveImg = document.querySelector(".modal-active-image");
    var id = modalActiveImg.getAttribute('id');
    let currSlide = Number(id.substr(-1));
    if(currSlide < images.length-1){
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${currSlide+1}" src="${images[currSlide+1].src}">`;
    }else{
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${0}" src="${images[0].src}">`;
    }
}

/*function for previous image*/
function prevImg(){
    var modalActiveImg = document.querySelector(".modal-active-image");
    var id = modalActiveImg.getAttribute('id');
    let currSlide = Number(id.substr(-1));
    if(currSlide > 0){
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${currSlide-1}" src="${images[currSlide-1].src}">`;
    }else{
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${images.length-1}" src="${images[0].src}">`;
    }
}

/*function to open image*/
function openModal(name){
    modalBox.style.display = "flex";
    modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="${name.id}" src="${name.src}">`;
}


/*function to open videos*/
function openModal1(name){
    modalBox1.style.display = "flex";
  modalBoxContentIMG1.innerHTML = `<video class="modal-active-image" id="${name.id}"  width="320" height="240" controls>
  <source  src=${name.getAttribute('srcv')} type=video/mp4>
    Your browser does not support the video tag.
</video>`;
  
}

/*function for previous video*/
function prevVid(){
    var modalActiveImg = document.querySelector(".modal-active-image");
    var id = modalActiveImg.getAttribute('id');
    let currSlide = Number(id.substr(-1));
   
    if(currSlide > 0){
        modalBoxContentIMG1.innerHTML = `<video  id="video-${currSlide-1}" class="modal-active-image" width="320" height="240" controls>
        <source   src="${videos[currSlide-1].getAttribute('srcv')}" type=video/mp4>
          Your browser does not support the video tag.
      </video>`
        
    }
    else{
        modalBoxContentIMG1.innerHTML = `<video  id="video-${videos.length-1}" class="modal-active-image" width="320" height="240" controls>
        <source   src="${videos[0].getAttribute('srcv')}" type=video/mp4>
          Your browser does not support the video tag.
      </video>`
        
    }
}

/*function for next video*/
function nextVid(){
    var modalActiveImg= document.querySelector(".modal-active-image");
    var id = modalActiveImg.getAttribute('id');
  
    let currSlide = Number(id.substr(-1));
   
    if(currSlide < images.length-1){
        modalBoxContentIMG1.innerHTML = `<video id="video-${currSlide+1}" class="modal-active-image"  width="320" height="240" controls>
        <source src="${videos[currSlide+1].getAttribute('srcv')}" type=video/mp4>
          Your browser does not support the video tag.
      </video>`;
    }else{
        modalBoxContentIMG1.innerHTML = `<video id="video-${0}" class="modal-active-image"  width="320" height="240" controls>
        <source src="${videos[0].getAttribute('srcv')}" type=video/mp4>
          Your browser does not support the video tag.
      </video>`;
    }
}








function prev(e){
    var modalActiveImg = document.querySelector(".modal-active-image");
    var id = modalActiveImg.getAttribute('id');
    if(id.charAt(0) == 'p'){
        prevImg();
    }else{
        prevVid();
    }
}

function next(e){
    var modalActiveImg = document.querySelector(".modal-active-image");
    var id = modalActiveImg.getAttribute('id');
    if(id.charAt(0) == 'p'){
        nextImg();
    }else{
        nextVid();
    }
}