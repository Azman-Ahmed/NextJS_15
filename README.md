# Next.js Notes

## Why Learn Next.js

1. **File-Based Routing**: Simple routing mechanism based on file structure.
2. **API Routes**: Create backend endpoints directly in the project without additional setup.
3. **SSR and CSR Rendering**: Supports Server-Side Rendering (SSR) and Client-Side Rendering (CSR) for flexible rendering strategies.
4. **Simplified Data Fetching**: Built-in support for fetching data at different levels (SSG, SSR).
5. **Styling Options**: Flexible styling with CSS and Tailwind CSS.
6. **Optimization**: Features like image optimization, lazy loading, and built-in performance optimizations.
7. **Dev and Prod Build System**: Efficient build processes for development and production environments.

## Prerequisites

1. **HTML, CSS, and JavaScript Fundamentals**
2. **ES6 Features**: Understanding of modern JavaScript features like `let`, `const`, arrow functions, etc.
3. **React Fundamentals**: Basic knowledge of React, including components, props, and state.

## Next.js Project Setup

1. **Download and Install Node.js**
2. **Create a New Next.js App**: Run `npx create-next-app@latest playground`
3. **Project Setup Options**: Select the required features during setup, such as TypeScript, ESLint, and Tailwind CSS.
4. **Run the Project**: Run `npm run dev`

## Project Control Flow After Running

1. **package.json** → `dev` command → **layout.tsx** → `rootLayout` (defines the main layout structure) → **app/page.tsx** → Main content rendering for the root route

---

## Topic to Learn

- **React Server Components (RSC)**

# SSR vs CSR in Next.js

## What is CSR (Client-Side Rendering)?

With **CSR**, the process works like this:

1. **You (the user)** go to a webpage.
2. The webpage (your browser) says, "Hmm, let me ask the server for all the text, pictures, and info I need."
3. The **server** sends the information to the webpage **after the page has loaded**. This means your browser has to wait a bit while the page loads and the content is fetched.

**Example**: It's like opening an app on your phone. Initially, you might see a blank screen while the app is downloading the data, images, and text.

### When to use CSR:
- **Good for interactive websites** where users click around a lot, log in, post comments, etc.
- Makes the website feel very smooth and responsive once everything is loaded.

---

## What is SSR (Server-Side Rendering)?

With **SSR**, it works differently:

1. **You (the user)** go to a webpage.
2. The **server** sends the complete page, already filled with text, images, and everything, before it even reaches your browser.
3. This means **the page is ready to go** by the time it reaches your browser, and you don’t need to wait for any content to load.

**Example**: Imagine you order a pizza. When the pizza arrives at your door, it's **already cooked and ready to eat**. You don’t need to wait for it to be made after it arrives.

### When to use SSR:
- **Great for websites with static content** like blogs, articles, and product pages.
- Makes your website load faster initially, as everything is ready on the server before being sent to the browser.

---

## Key Differences Between SSR and CSR in Next.js

| **Feature**                | **SSR (Server-Side Rendering)**                       | **CSR (Client-Side Rendering)**                        |
|----------------------------|-------------------------------------------------------|-------------------------------------------------------|
| **Where does the page load from?** | The **server** sends the full page to your browser, so everything is ready. | The browser loads an empty page first, then asks the server for data. |
| **How long does it take to see the page?** | You see the page almost immediately because everything is loaded on the server. | You might see a blank page or loading spinner while the browser asks the server for info. |
| **When is the page rendered?** | **Before** it gets to your browser (on the server). | **After** the page gets to your browser (in the browser). |
| **Good for?**               | Websites that don’t change often, like blogs or news articles. | Apps where users interact a lot and need fast updates (like social media or email apps). |
| **Performance (initial load)** | **Faster** for the first page load. The page is ready when it hits your browser. | **Slower** for the first page load, since the browser has to fetch the data. |

---

## Why Does It Matter?

- **SSR** is great for websites that need to load **faster** the first time someone visits and helps with **SEO (Search Engine Optimization)** because search engines can easily read the page's content.
- **CSR** is better for websites that need high interactivity and dynamic content that updates after the page loads, like social media apps or email clients.

---

## SSR vs CSR in Next.js

- **SSR**: Use `getServerSideProps` to fetch data **before** the page is sent to the browser.
- **CSR**: Use **React** features like `useEffect` to fetch data **after** the page loads in the browser.

---

## Quick Summary

- **SSR**: The server sends the **ready-to-view page**.
- **CSR**: The browser gets an empty page and **loads the content after**.

## Routing in Next.js

Next.js uses a **file-based routing system** where the folder structure within the `app` directory defines the URL paths of the application.

---

### Dynamic Routing

Dynamic routing in Next.js allows creating routes with variable segments, such as product pages for different product IDs.

**Example Structure:**

- `app`
  - `product`
    - `[productid]`
      - `page.tsx`

Here, `[productid]` is a **dynamic route** folder. The `page.tsx` file inside this folder dynamically handles URLs like `/product/1`, `/product/2`, etc., based on the `productid` parameter.

**Example Code:**

```typescript
const ProductId = ({ params }: { params: { productid: string } }) => (
    <h1>Detail of Product {params.productid}</h1>
);

export default ProductId;
```
In this component, ProductId takes params.productid as a prop, allowing you to display the productid value from the URL.

Nested Dynamic Routing
Nested dynamic routing lets you create multiple layers of dynamic routes, such as a documentation section with features and specific concepts.

Example Structure:

app
- docs
  - [feature]
    - [concept]
      - page.tsx
      - 
In this setup, both [feature] and [concept] are dynamic segments, enabling URLs like /docs/feature1/concept1 or /docs/feature2/concept2. Each page.tsx file can access these URL segments as parameters.

Example Code:

```typescript
Copy code
const Feature = ({ params }: { params: { feature: string; concept: string } }) => (
    <h1>Detail of {params.feature} - {params.concept}</h1>
);

export default Feature;
```
This component takes params.feature and params.concept from the URL, allowing it to display content dynamically based on both parameters.



Routing example
app
  - page.tsx []
  - about
    - page.tsx
  - Education
    - SSC
      - page.tsx
    - HSC
      - page.tsx
    - BSC
        - page.tsx
    - Docs
      - feature1
        - concept1
        - concept2
      - featuer2
        - concept1
        - concept2
      - feature3
        - concept1
        - concept2


### Colocation

**Colocation** is a way to organize your project files so that components, styles, and other code are grouped together close to where they’re used.

In Next.js, colocation means keeping related files in the same folder as the pages or components that use them. This keeps your code organized and makes it easy to find everything related to a specific page or component in one place.

For example, if you have a page called `About`, you might structure it like this:

```bash
app
  - about
    - page.tsx (main code for the About page)
      - AboutStyles.css (styles specific to the About page)
        - AboutHelper.js (extra helper functions for the About page)
```
By keeping everything in one folder, you can quickly see all the code related to `About` without searching through different parts of the project.

**Why Colocate?**

- **Easier to Maintain**: All related code is in one spot, so you don’t need to look in multiple places.
- **Better Organization**: Your project structure is clean, especially as it grows.

Colocation is all about making development simpler by grouping related files together!



### private folders

Private folders can be created by prefixing a folder with an underscore: _folderName

This indicates the folder is a private implementation detail and should not be considered by the routing system, thereby opting the folder and all its subfolders out of routing.

```bash
app
  - _component
    - page.tsx (Not accessible even though it is a page.tsx file)
```

In this example, `_component` and its contents are ignored by the Next.js routing system, so `page.tsx` inside `_component` is not accessible as a route.

---

### Adding an Underscore in URLs

If you need to include an underscore in a URL, you can use the URL-encoded form of the underscore character, which is `%5f`.

**Example:** `/my%5fpage` translates to `/my_page` in the URL.

---

This setup helps in keeping implementation details private while still allowing flexibility in URL structure when needed.