import { projects } from './data.js';
import { ProjectCard } from './projectCard.js';
import { ImageSlider } from './slider.js';
import { Modal } from './modal.js';

// DOM Elements
const projectsContainer = document.querySelector('.projects-grid');
const modalElement = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const imageSlider = new ImageSlider(document.getElementById('imageSlider'));
const modal = new Modal(modalElement, modalTitle, modalDescription);

// 初始化项目展示
function initializeProjects() {
    // 获取所有独特的标签
    const tags = ProjectCard.getUniqueTags(projects);
    console.log('Available project tags:', tags);

    // 创建并显示项目卡片
    const activeProjects = projects.filter(project => project.active);
    
    // 使用 map 创建所有卡片元素
    const cards = activeProjects.map(project => {
        const card = new ProjectCard(project);
        const cardElement = card.createCardElement();
        
        // 添加点击事件
        cardElement.addEventListener('click', () => {
            modal.open(project);
            imageSlider.reset();
            imageSlider.updateSlider(project.images);
        });
        
        return cardElement;
    });

    // 将所有卡片添加到容器中
    cards.forEach(card => projectsContainer.appendChild(card));
}

// 添加全局事件处理函数
window.closeModal = () => modal.close();
window.prevSlide = () => imageSlider.prevSlide();
window.nextSlide = () => {
    const currentProject = projects.find(p => 
        p.title === modalTitle.textContent
    );
    imageSlider.nextSlide(currentProject.images.length);
};

// 初始化应用
document.addEventListener('DOMContentLoaded', initializeProjects);

// 导出用于测试的函数
export { initializeProjects };