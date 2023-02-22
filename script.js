const cover = document.getElementById('cover');

const handleCoverSwipe = () => {
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

const handleAboutMe = () => {
    const aboutMeLink = document.getElementById('aboutme-link');
    const projectsLink = document.getElementById('projects-link');
    const aboutMe = document.getElementById('about-me');
    const project1 = document.getElementById('project1');

    aboutMeLink.style.textDecoration = `underline`;
    projectsLink.style.textDecoration = `none`;
    aboutMe.style.zIndex = `200`;
    project1.style.zIndex = `150`;
};

const handleProjects = () => {
    const aboutMeLink = document.getElementById('aboutme-link');
    const projectsLink = document.getElementById('projects-link');
    const aboutMe = document.getElementById('about-me');
    const project1 = document.getElementById('project1');

    aboutMeLink.style.textDecoration = `none`;
    projectsLink.style.textDecoration = `underline`;
    aboutMe.style.zIndex = `150`;
    project1.style.zIndex = `200`;
};