const handleCoverSwipe = () => {
    const cover = document.getElementById('cover');
    const dragDotCover = document.getElementById('dragdot-cover');
    const dragArrow = document.getElementById('dragarrow');

    dragDotCover.style.height = `0%`;
    if (matchMedia('only screen and (min-width: 768px').matches) {
        dragArrow.style.transform = `translateX(500%)`;
    } else {
        dragArrow.style.transform = `translateY(200%)`;
    }

}

cover.addEventListener('transitionend', () => {
    if (matchMedia('only screen and (min-width: 768px').matches) {
        cover.style.transform = `translateX(-100%)`;
    } else {
        cover.style.transform = `translateY(-100%)`;
    }
});