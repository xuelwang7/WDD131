// 模态框管理类
export class Modal {
    constructor(modalElement, titleElement, descriptionElement) {
        this.modal = modalElement;
        this.titleElement = titleElement;
        this.descriptionElement = descriptionElement;
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
    }

    open(project) {
        this.titleElement.textContent = project.title;
        this.descriptionElement.textContent = project.description;
        this.modal.style.display = 'block';
    }

    close() {
        this.modal.style.display = 'none';
    }
}