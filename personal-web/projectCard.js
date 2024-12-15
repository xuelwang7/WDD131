// cards
export class ProjectCard {
    constructor(project) {
        this.project = project;
    }

    createCardElement() {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-preview">
                <img src="${this.project.images[0]}" alt="${this.project.title}" class="project-image">
                <div class="project-icon"></div>
            </div>
            <div class="card-content">
                <h3 class="text-lg font-medium mb-4">${this.project.title}</h3>
                <button class="text-gray-600 hover:text-black">See More →</button>
            </div>
        `;
        return card;
    }

    static filterProjects(projects, tag) {
        return projects.filter(project => 
            project.active && project.tags.includes(tag)
        );
    }

    static getUniqueTags(projects) {
        return projects.reduce((tags, project) => {
            project.tags.forEach(tag => {
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            });
            return tags;
        }, []);
    }
}