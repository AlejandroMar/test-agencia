const slideContainer = document.querySelector(".recent-projects--container");
const paginationContainer = document.querySelector(".pagination-container");

const nextSlide = document.querySelector(".next-slide");
const prevSlide = document.querySelector(".prev-slide");

let recentProjects = Array.from(slideContainer.querySelectorAll('.recent-project'));


let currentSlideIndex = 0;

function showSlide(index) {
    // Hide all slides
    recentProjects.forEach((project, i) => {
        project.classList.remove('opacity-100');
        project.classList.add('opacity-0');
        setTimeout(() => {
            project.classList.add('hidden');
        }, 200); // delay equal to transition duration
    });

    // Show the current slide
    setTimeout(() => {
        recentProjects[index].classList.remove('hidden', 'opacity-0');
        recentProjects[index].classList.add('opacity-100');
    }, 200);

    // Update pagination items
    // Update pagination items
    Array.from(paginationContainer.children).forEach((paginationItem, i) => {
        const div = paginationItem.querySelector('div');
        if (i === index) {
            div.classList.add('scale-125', 'bg-soft_orange-500'); // Make the active item larger and darker
            div.classList.remove('bg-soft_orange-300'); // Remove the lighter color
        } else {
            div.classList.remove( 'scale-125', 'bg-soft_orange-500'); // Make the non-active items their original size and color
            div.classList.add('bg-soft_orange-300'); // Add the lighter color
        }
    });
}


nextSlide.addEventListener("click", (e) => {
    e.preventDefault();
    currentSlideIndex++;
    if (currentSlideIndex >= recentProjects.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
});

prevSlide.addEventListener("click", (e) => {
    e.preventDefault();
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = recentProjects.length - 1;
    }
    showSlide(currentSlideIndex);
});


function pagination() {
    recentProjects.forEach((project, i) => {
        const paginationItem = document.createElement('a');
        paginationItem.href = '#';
        paginationItem.classList.add('pagination-item', 'block');

        const div = document.createElement('div');
        div.classList.add('bg-soft_orange-500', 'h-5', 'rounded-full', 'w-5');
        paginationItem.appendChild(div);

        paginationItem.addEventListener('click', (e) => {
            e.preventDefault();
            currentSlideIndex = i;
            showSlide(currentSlideIndex);
        });

        paginationContainer.appendChild(paginationItem);
    });
}


pagination();
showSlide(currentSlideIndex);