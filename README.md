This document outlines the setup and usage instructions for the single-page application (SPA) frontend of a simplified ERP system built with React.
Technology Stack:
●	React
●	React Router (optional)
Prerequisites:
●	Node.js and npm (or yarn) installed on your system.
Installation:
1.	Clone the project repository:
Bash
git clone <repository_url>

2.	Navigate to the project directory:
Bash
cd simplified-erp-frontend

3.	Install dependencies:
Bash
npm install

Running the application:
1.	Start the development server:
Bash
npm start

This will typically run the application on http://localhost:3000 by default.
Usage:
The application provides a user interface for managing basic business operations. Here's a breakdown of functionalities:
●	Dashboard: Displays an overview of the system, potentially including key metrics like total products and orders. It might also offer quick navigation buttons to access:
○	Products Management: This section allows you to view a list of products with details like name, category, price, and stock quantity (using mock data). It may also enable adding, editing, and deleting products.
○	Orders Management: This section showcases a list of orders with details like order ID, customer name, order date, and status (using mock data). Additionally, it might offer functionalities like:
■	Viewing order details (optional).
■	Updating order status (optional).
■	Deleting orders (optional).
Navigation:
React Router can be implemented to handle navigation between different sections of the ERP system.
Note:
●	This is a simplified application and does not involve a backend component. Mock data is used to populate the UI for demonstration purposes.
●	This is a basic structure, and the specific functionalities and UI elements might require further development based on your chosen libraries and components.



- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
