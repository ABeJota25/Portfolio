const SCROLL_DOWN_ARROW = document.getElementById('scrollDownArrow');
const PROJECTS_SECTION = document.getElementById('projectsSection');

SCROLL_DOWN_ARROW.addEventListener('click', () => {
    PROJECTS_SECTION.scrollIntoView()
})