#Shopping Website with ReactJS and Redux Toolkit

This project is a shopping website built with ReactJS, utilizing Redux Toolkit for state management. The primary feature of this application is the ability to add products to a shopping cart and view the cart's contents and total price on a dedicated cart page.

Key Features:
1) Product Display: A list of products is showcased on the main page, each with an "Add to Cart" button.
2) Add to Cart Functionality: When a user clicks the "Add to Cart" button, the selected product is stored in the shopping cart state managed by Redux Toolkit.
3) Cart Page: A dedicated cart page displays:
 * The number of items in the cart.
 * A detailed list of the products added.
 * The total price of all items in the cart.


Implementation Details:
* ReactJS: Utilized for building the user interface, providing a seamless and interactive experience.
* Redux Toolkit: Used for efficient state management. The toolkit simplifies the process of setting up Redux, creating slices of state, and managing actions and reducers.
  1) Slices: Separate slices for handling cart state and product state.
  2) Actions: Actions for adding products to the cart and removing them if needed.
  3) Reducers: Reducers to update the state based on actions like adding an item, removing an item, and calculating the total price.

User Flow:
1) Browsing Products: Users can browse through a list of products.
2) Adding to Cart: By clicking the "Add to Cart" button on a product, it gets added to the cart.
3) Viewing Cart: Users can navigate to the cart page to see all items added, along with the total item count and the aggregate price.

This project demonstrates an effective use of ReactJS for the frontend and Redux Toolkit for managing application state, providing a robust and scalable solution for building a shopping cart feature in a web application.

How to use?
1. Step 1 -  Clone this project
2. Step 2 - install Node Module
3. Step 3 - Run Command "npm start"
