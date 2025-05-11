# 🛒 Ocado Recruitment Task (Volodymyr_Haideichuk_Web_Wrocław)

This project was created using **React + Vite** 
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="20" style="vertical-align:middle;"/>
<img src="https://vitejs.dev/logo.svg" alt="Vite" width="20" style="vertical-align:middle;"/> 

---

## ⚙️ Setup

To run the project locally:

1. **Clone the repository**
    ```bash
    git clone https://github.com/Volodymyr1233/ocado-task.git
    ```

2. **Navigate to the project folder**
    ```bash
    cd ocado-task
    ```

3. **Install dependencies**
    ```bash
    npm install
    ```

4. **Run the project**
    ```bash
    npm run dev
    ```

Then open your browser and go to:  
👉 [http://localhost:5173/ocado-task](http://localhost:5173/ocado-task)

---

## 📋 Quick Overview

### **Approach**

- List of products is located in:  
  `public/data/products.json`

- The application uses **two contexts**:
  - `cart-context`
  - `product-context`  
  
  These contexts are responsible for managing `products` and `cartItems` in a structured way.

- `product-context` uses `useFetchData` to fetch product data
- `useProducts` – to access from `product-context` and display products on the main page

- `cart-context` manages `cartItems` and all related functionalities
  
-  `useCartItems` hook gives access `cartItems` and functions in components.

-  `products` and `cartItems` are displayed in dedicated React components.

- There are **two HTML files**:
  - `index.html` – renders the main page , cart and summary components using `react-router-dom`
  - `order.html` – renders the confirmation page. This page is **fully loaded** after summary

- The app uses **localStorage** to save items added to cart and show them on order.html

---

### **Assumptions**

1. 🛑 User **can't access the cart page** without adding a product.
2. 🗑️ If all items are deleted from the cart, **the user can't access the summary page** and is redirected back.
3. 💾 All cart changes are **saved in localStorage**.
