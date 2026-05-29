## 📝 Project Description

This project is a dynamic, responsive web application built using **React.js**. It demonstrates a clean implementation of reusable functional components and unidirectional data flow. 

The application dynamically renders a collection of promotional banners (cards) from a central data array. By leveraging React props, a single blueprint component (`BannerCardItem`) is reused to generate multiple cards, each featuring unique text content and distinct background themes defined via custom CSS classes. 

### Key Features:
* **Dynamic Rendering:** Uses JavaScript's `.map()` method to seamlessly loop through data and render UI elements.
* **Component Reusability:** Features a highly reusable child component that adapts completely based on incoming properties.
* **Conditional/Dynamic Styling:** Utilizes ES6 template literals to apply unique class names to individual cards for specific background variations.
* **Clean Code Architecture:** Keeps data management and UI representation separate for better maintainability.

---

## 📁 Project Structure

The project follows a standard React directory structure, organizing components into dedicated subfolders for modularity:

```text
my-app/
├── public/
│   └── index.html          # The main HTML page template
├── src/
│   ├── components/         # Directory for reusable UI components
│   │   └── BannerCardItem/
│   │       ├── index.js    # BannerCardItem component logic & JSX
│   │       └── index.css   # Styles specific to the BannerCardItem
│   ├── App.css             # Main container and global layout styles
│   ├── App.js              # Root component containing data array and mapping logic
│   └── index.js            # JavaScript entry point that renders App.js to the DOM
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
