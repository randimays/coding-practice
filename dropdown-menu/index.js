(function() {
    // Array.from:
    // https://stackoverflow.com/questions/24266313/using-foreach-on-an-array-from-getelementsbyclassname-results-in-typeerror-und
    const menuItems = Array.from(document.getElementsByClassName('menu-item'));
    const subMenuLinks = Array.from(document.getElementsByClassName('sub-menu-link'));

    const closeMenuItems = () => {
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('active');
        });
    };

    const getItemByText = text => {
        return menuItems.findIndex(menuItem => menuItem?.textContent?.trim() === text);
    };

    const openMenuItem = index => {
        const selectedElement = menuItems[index];
        selectedElement?.classList.add('active');
        subMenuLinks.forEach(link => link.setAttribute('aria-hidden', 'false'));
    };

    const toggleMenuItem = selectedText => {
        const activeItem = Array.from(document.getElementsByClassName('active'))[0];
        const activeText = activeItem?.textContent?.trim();
        const activeIndex = getItemByText(activeText);
        const selectedIndex = getItemByText(selectedText);
            
        closeMenuItems();

        if (activeIndex < 0 || (activeIndex !== selectedIndex)) {
            openMenuItem(selectedIndex);
        }
    };

    if (menuItems.length > 0) {
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', event => {
                event.stopPropagation();
                const selectedText = menuItem?.textContent?.trim();
                
                toggleMenuItem(selectedText);
            });
        });
    }

    // This listener and the stopPropagation added above are from the below SO
    // https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
    window.addEventListener('click', () => {
        const activeItem = Array.from(document.getElementsByClassName('active'))[0];

        if (activeItem) {
            closeMenuItems();
        }
    });

    // https://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-pure-js-or-jquery
    window.addEventListener('keyup', event => {
        if (event.key === 'Escape') {
            closeMenuItems();
        }
    });

    window.addEventListener('keyup', event => {
        const leftArrowPressed = event.key === 'ArrowLeft';
        const rightArrowPressed = event.key === 'ArrowRight';
        
        if (leftArrowPressed) {
            closeMenuItems();
            openMenuItem(0);
        } else if (rightArrowPressed) {
            closeMenuItems();
            openMenuItem(1);
        }
    });
})();