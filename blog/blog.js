const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

document.addEventListener('DOMContentLoaded', function() {
    const bookInfoContainer = document.createElement('div');
    bookInfoContainer.className = 'book-info';

    const bookDetailsContainer = document.createElement('div');
    bookDetailsContainer.className = 'book-details';

    articles.forEach(article => {
        // 创建每本书的信息块
        const infoBlock = document.createElement('div');
        infoBlock.className = 'info-block';
        infoBlock.innerHTML = `
            <p>${article.date}</p>
            <p>Age: ${article.ages}</p>
            <p>Genre: ${article.genre}</p>
            <p>${article.stars}</p>
        `;
        bookInfoContainer.appendChild(infoBlock);

        // 创建每本书的详细信息块
        const bookBlock = document.createElement('div');
        bookBlock.className = 'book';
        bookBlock.innerHTML = `
            <h3 class="book-title">${article.title}</h3>
            <img class="book-cover" src="${article.imgSrc}" alt="${article.imgAlt}">
            <p class="book-description">${article.description} <a href="#">Read More...</a></p>
        `;
        bookDetailsContainer.appendChild(bookBlock);
    });

    const articlesContainer = document.getElementById('articles');
    articlesContainer.appendChild(bookInfoContainer);
    articlesContainer.appendChild(bookDetailsContainer);

    // 添加过滤器部分
    const filtersHtml = `
        <div class="filters">
            <h3>Filters</h3>
            <p>Sort:</p>
            <p>Age:</p>
            <p>Genre:</p>
            <p>Rating:</p>
        </div>
    `;
    articlesContainer.innerHTML += filtersHtml;
});
