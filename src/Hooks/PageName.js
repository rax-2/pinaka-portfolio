import { useEffect } from "react";

function PageName(location) {
    useEffect(() => {
        // Define a mapping between routes and titles
        const titles = {
            "/": "About - Pinaka",
            "/contact": "Contact - Pinaka",
            "/projects": "Projects - Pinaka",
            // Add other routes and titles here
        };

        // Set the document title based on the current route
        const pageTitle = titles[location.pathname] || "My App";
        document.title = pageTitle;
    }, [location]);
}

export default PageName