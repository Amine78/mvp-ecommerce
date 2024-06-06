# 🛍️ Mini E-commerce Product Gallery Symfony / Frontend Kata

> This Kata is designed to assess your ability to build a dynamic and interactive e-commerce web application in a streamlined manner. The aim is to focus on fundamental development skills with a rapid development approach, using Symfony for the backend to interact with external APIs and Vue.js for the frontend.

## Instructions

The objective is to create a simplified MVP that demonstrates basic e-commerce functionalities, including fetching product data from an external API. Bonus features are suggested for those looking to explore further.

### Constraints

- **Technical Framework**: Use Symfony for the backend and Vue.js for the frontend. Direct use of Vanilla JavaScript for the frontend is not allowed.
- **Project Documentation**: A simple `README.md` file with basic setup instructions is required.

### Deliverables

Submit your code as a Pull Request to the designated repository or share a link to a repository (e.g., GitLab, GitHub).

### Evaluation Criteria

Applications will be evaluated based on functionality, code quality, and effective use of Symfony and Vue.js.

## Challenge Details

### Simplified MVP

#### User Story 1
> As a customer, I want to see a list of products so that I can choose what to buy.

- Fetch and display a list of products from the Fake Store API (`https://fakestoreapi.com/products`) using Symfony as a proxy. Each product should display at least an image, a name, and a price.

#### User Story 2
> As a customer, I want to add products to my shopping cart to manage my selections before checking out.

- Implement a shopping cart where users can add products, view selected items from the cart.

### Simplified Bonus Features

For those looking to add more complexity, here are some simplified bonus features:

- **Product Details**: Allow the user to view simplified product details by clicking on a product. This can be achieved with a modal or a new page without additional API calls.
- **Responsive Design**: Ensure the application is at least reasonably responsive on different devices.

### Tips

- **UI Libraries**: Feel free to use UI libraries compatible with Vue.js to enhance the application's appearance without extensive CSS customization.
- **Symfony Proxy**: Utilize Symfony controllers to act as a proxy for fetching data from the Fake Store API, allowing for additional backend logic and security measures.
