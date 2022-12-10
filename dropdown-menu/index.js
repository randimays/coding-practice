(function() {
    // Array.from:
    // https://stackoverflow.com/questions/24266313/using-foreach-on-an-array-from-getelementsbyclassname-results-in-typeerror-und
    const menuItems = Array.from(document.getElementsByClassName('menu-item'));
    const subMenuLinks = Array.from(document.getElementsByClassName('sub-menu-link'));

    // This listener and the stopPropagation added above are from the below SO
    // https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
    /**
     * Adds a click listener to anywhere in the window in order to close active menu items
     * Works in tandem with event.stopPropagation to not listen for clicks on the menu items themselves
     */
    window.addEventListener('click', () => {
        const activeItem = Array.from(document.getElementsByClassName('active'))[0];

        if (activeItem) {
            closeMenuItems();
        }
    });

    /**
     * Listens for the Escape button to be pressed in order to close open menu items
     */
    // https://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-pure-js-or-jquery
    window.addEventListener('keyup', event => {
        if (event.key === 'Escape') {
            closeMenuItems();
        }
    });

    /**
     * Listens for the right and left arrow buttons to be pressed
     * If the right arrow is pressed, the menu item on the right will open
     * If the left arrow is pressed, the menu on the left will open
     */
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

    /**
     * Close all menu items so only one will be open at once
     */
    const closeMenuItems = () => {
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('active');
        });
    };

    /**
     * Get the index of the menu item that was clicked (from the array of menu items)
     * @param {string} text 
     * @returns {number}
     */
    const getItemIndexByText = text => {
        return menuItems.findIndex(menuItem => menuItem?.textContent?.trim() === text);
    };

    /**
     * Opens a menu item, given the index (from the array of menu items)
     * @param {number} index 
     */
    const openMenuItem = index => {
        const selectedElement = menuItems[index];
        selectedElement?.classList.add('active');
        subMenuLinks.forEach(link => link.setAttribute('aria-hidden', 'false'));
    };

    /**
     * Given the text of the menu item that was clicked on, determines whether it is currently
     * active, closes all menu items to clean up, and then if it's not already active, opens
     * the selected menu item
     * @param {string} selectedText 
     */
    const toggleMenuItem = selectedText => {
        const activeItem = Array.from(document.getElementsByClassName('active'))[0];
        const activeText = activeItem?.textContent?.trim();
        const activeIndex = getItemIndexByText(activeText);
        const selectedIndex = getItemIndexByText(selectedText);
            
        closeMenuItems();

        if (activeIndex < 0 || (activeIndex !== selectedIndex)) {
            openMenuItem(selectedIndex);
        }
    };

    /**
     * Adds event listeners to the menu items to open them when appropriate
     * The stopPropagation is to ensure that any clicks
     * outside this element close the menu, but clicking on the menu itself will not do that
     */
    if (menuItems.length > 0) {
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', event => {
                event.stopPropagation();
                const selectedText = menuItem?.textContent?.trim();
                
                toggleMenuItem(selectedText);
            });
        });
    }
})();