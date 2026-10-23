/* Project information — displayed in this order */
const projects = [
    {
        order: 1,
        title: "Acoustic Tomography",
        tools: ["Python", "Image Reconstruction"],
        image: "/assets/images/acoustic-tomography.png",
        imageAlt: "Comparison of the original and reconstructed images",
        summary:
            `<em>How can we see beneath a plant without digging it up?</em> Our capstone team explored 
            acoustic tomography to image the soil surrounding plant roots using sound measurements.`,
        highlights:
            `Worked with a teammate to develop a Python simulation using SIRT and 
            explored improvements to ray calculations using Siddon's algorithm.`,
        detailsUrl: null
    },
    {
        order: 2,
        title: "WORK IN PROGRESS",
        tools: [],
        image: null,
        imageAlt: null,
        summary: null,
        highlights: null,
        detailsUrl: null
    }
];

const projectGrid = document.querySelector("#project-grid");
const projectTemplate = document.querySelector("#project-template");

const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

for (const project of sortedProjects) {
    const card = projectTemplate.content.firstElementChild.cloneNode(true);

    card.querySelector(".project-title").textContent = project.title;
    card.querySelector(".project-tools").innerHTML = project.tools.join(" · ");
    card.querySelector(".project-summary").innerHTML = project.summary;

    const image = card.querySelector(".project-thumbnail");

    if (project.image) {
        image.src = project.image;
        image.alt = project.imageAlt;
        image.loading = "lazy";
    } else {
        image.remove();
    }

    const highlights = card.querySelector(".highlights");

    if (project.highlights) {
        highlights.querySelector("span").textContent = project.highlights;
    } else {
        highlights.remove();
    }

    /* Only include a details link when a page exists */
    const detailsLink = card.querySelector(".project-details");

    if (project.detailsUrl) {
        detailsLink.href = project.detailsUrl;
    } else {
        detailsLink.remove();
    }

    projectGrid.append(card);
}