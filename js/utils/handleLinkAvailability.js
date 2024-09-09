export default function handleLinkAvailability() {
    const projectLinks = document.querySelectorAll('.project-links a');
    
    if (projectLinks.length === 0) return;

    projectLinks.forEach((projectLink) => {
        const hrefValue = projectLink.getAttribute('href');

        if (hrefValue === null || hrefValue.length === 0 || hrefValue === '#') {
            projectLink.classList.add('disable');
        }
    });
}
