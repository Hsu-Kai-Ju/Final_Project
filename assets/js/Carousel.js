let slideIdx = 1;
let autoplay;

function showSlides(idx) {
    slideIdx = idx;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if(slideIdx > slides.length) {
        slideIdx = 1;
    }else if (slideIdx == 0) {
        slideIdx = slides.length;
    }

    for(let i=0; i<slides.length; i++) {
        slides[i].className = slides[i].className.replace(" show", "");
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIdx-1].className += " show"; 
    dots[slideIdx-1].className += " active";
    setAutoPlay();
}

function changeSlide(ctrl) {
    showSlides(slideIdx + ctrl);
}

function setAutoPlay() {
    if(autoplay != undefined) clearInterval(autoplay);
    autoplay = setInterval(function() {
        changeSlide(1);
    }, 3500);
}

window.onload = function() {
    showSlides(slideIdx);
}

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            resetStars();
            highlightStars(star.getAttribute('data-value'));
        });

        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value');
            highlightStars(selectedRating);
        });

        star.addEventListener('mouseout', () => {
            resetStars();
            if (selectedRating) {
                highlightStars(selectedRating);
            }
        });
    });

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    }

    function highlightStars(rating) {
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }
    }
});

function addcomment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText === "" || commentText === "留下評論吧...") {
        alert("請輸入有效的評論");
        return;
    }

    const selectedStars = document.querySelectorAll('.star.selected').length;
    if (selectedStars === 0) {
        alert("請選擇星級");
        return;
    }

    const commentsContainer = document.getElementById('commentsContainer');

    const newComment = document.createElement('div');
    newComment.classList.add('com-frame');

    const commenterName = '匿名';

    newComment.innerHTML = `
        <p><div style="color:black;">${commenterName}</div><span class="comment1"> ${'★'.repeat(selectedStars)}</span></p><br>
        <p><span class="comment2">${commentText}</span></p><br>
    `;

    commentsContainer.insertBefore(newComment, commentsContainer.firstChild);

    commentInput.value = "留下評論吧...";
    resetStars();
    selectedRating = 0;
}

function resetStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.classList.remove('selected');
    });
}
