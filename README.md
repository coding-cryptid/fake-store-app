# 🌐 React Module Project - FakeStoreApp

A React e-commerce front-end built around [FakeStoreAPI](https://fakestoreapi.com/), supporting full product browsing, creation, editing, and deletion through a responsive, React Bootstrap–styled interface.

## Tech Stack

- **React** — component-based UI
- **React Router DOM** — client-side routing between pages
- **React Bootstrap** — styling, layout, and responsive components
- **Axios** — HTTP requests to FakeStoreAPI

## Pages & Features

### 🏠 Home Page
- Welcome message and brief store introduction.
- Button linking to the Product Listing page.
- Styled with React Bootstrap.

### 🛍 Product Listing Page (`/products`)
- Fetches all products from `GET https://fakestoreapi.com/products`.
- Displays products in a responsive grid/card layout.
- Each product card shows: image, title, price, and a "View Details" button that navigates to that product's details page via React Router.

### 📄 Product Details Page (`/products/:id`)
- Uses `useParams()` to read the product ID from the URL.
- Fetches the individual product from `GET https://fakestoreapi.com/products/:id`.
- Displays image, title, description, category, and price.
- "Add to Cart" button (cart functionality optional/stubbed).
- "Delete" button that sends a `DELETE` request for the product.
- Handles loading and error states gracefully.

### ➕ Add Product Page (`/add-product`)
- React Bootstrap form with fields for title, price, description, and category.
- Submits a `POST` request to FakeStoreAPI.
- Shows a confirmation message once the "creation" request succeeds.

### ✏️ Edit Product Page (`/edit-product/:id`)
- Form pre-filled with the selected product's existing data.
- Submits a `PUT` request to update the product on FakeStoreAPI.
- Shows a success message after the update request completes.

### 🗑 Delete Product Functionality
- Available from the Product Details page.
- Shows a confirmation modal before sending the `DELETE` request.
- Redirects back to the Product Listing page after deletion.

### 🛠 Navigation Bar
- Persistent React Bootstrap `Navbar` across all pages.
- Links to Home (`/`), Product Listing (`/products`), and Add Product (`/add-product`).
- Collapses correctly into a mobile-friendly menu on small screens.

## API Handling

- All API calls use Axios.
- Loading indicators are shown while requests are in flight.
- User-friendly error messages are displayed if a request fails.

**⚠️ Note on FakeStoreAPI:** This project uses FakeStoreAPI purely for testing purposes. `POST`, `PUT`, and `DELETE` requests will all return successful responses, but none of the underlying data actually changes — new products won't appear in future `GET` requests, edits won't persist, and deleted products will still show up on reload. This is expected behavior and lets the app's request/response handling be tested without a real backend.

## Responsiveness

The entire app is built with React Bootstrap's grid and component system to remain fully responsive across desktop and mobile screen sizes, including the collapsible navbar.

## Project Structure (high-level)

```
src/
├─ components/
│  ├─ Navbar
│  ├─ ProductCard
│  └─ DeleteConfirmationModal
├─ pages/
│  ├─ Home
│  ├─ ProductList
│  ├─ ProductDetails
│  ├─ AddProduct
│  └─ EditProduct
├─ App.jsx        # Route definitions
└─ index.jsx
```

## Getting Started

```bash
npm install
npm start
```

The app will run locally (typically at `http://localhost:3000`) with routing handled entirely client-side via React Router.

## Final Checklist

- ✅ Home page with navigation
- ✅ Fetch and display products on `/products`
- ✅ View individual product details on `/products/:id`
- ✅ Add, edit, and delete products with API interactions
- ✅ React Bootstrap styling, fully responsive
- ✅ Loading and error states handled
- ✅ Axios used for all API interactions
- ✅ Clear communication that FakeStoreAPI is a mock/testing API
- ✅ Organized, reusable React component structure
- ✅ React Router used for all navigation
