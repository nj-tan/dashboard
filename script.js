const openMenu = document.getElementById('menu-open');
const closeMenu = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .left-section');
const sidebarItems = document.querySelectorAll('.container .left-section .sidebar .item');

openMenu.addEventListener('click', () => {
	sidebar.style.top = '0';
});

closeMenu.addEventListener('click', () => {
	sidebar.style.top = '-60vh';
});

let activeItem = sidebarItems[0];

sidebarItems.forEach(element => {
	element.addEventListener('click', () => {
		if (activeItem) {
			activeItem.removeAttribute('id');
		}

		element.setAttribute('id', 'active');
		activeItem = element;
	});
});
