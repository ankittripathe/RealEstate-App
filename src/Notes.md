# Step 1: Initial Setup
• All necessary setup for the project is completed.

# Step 2: Created Navbar.jsx
• Developed a navigation bar with both desktop and mobile versions.
• Used Tailwind CSS for styling.

# Step 3: Created Header.jsx and Imported Navbar.jsx
• Implemented a header section with a background image and call-to-action buttons.
• Imported Navbar.jsx into Header.jsx.

# Step 4: Created a Toggle Menu (Hamburger) for Mobile Devices
• Implemented a mobile navigation menu that appears when the menu icon is clicked.
• Used useState to handle the menu visibility.

# Step 5: Used useState for Menu Visibility
• Initialized showMobileMenu state as false:
  const [showMobileMenu, setShowMobileMenu] = useState(false);
•This state controls whether the mobile menu is displayed.

# Step 6: Used Ternary Operator for Conditional Rendering
• Applied ternary operator to check the state:
<div className={`md:hidden ${showMobileMenu ? "fixed w-full h-screen" : "hidden"}`}>
If showMobileMenu is true, the mobile menu is shown; otherwise, it remains hidden.

# Step 7: Added onClick Event to the Menu Icon
• Clicking the menu icon updates the state:
<img onClick={() => setShowMobileMenu(true)} src={assetsCollection.menu_icon} alt="Menu Icon" />
• This opens the mobile menu.

# Step 8: Added onClick Event to the Close Icon
• Clicking the close (cross) icon toggles showMobileMenu to false:
<img onClick={() => setShowMobileMenu(false)} src={assetsCollection.cross_icon} alt="Close Icon" />
• This closes the mobile menu.

# Step 9: Used useEffect for Side Effects (Prevent Scrolling)
• Implemented useEffect to prevent scrolling when the mobile menu is open:
When the menu is open, scrolling is disabled (overflow: hidden).
When the menu is closed, scrolling is enabled (overflow: auto).
Cleanup function prevents unexpected behavior during re-renders.

# Step10: Apply onclick in anchor tag as well
onClick={() => setShowMobileMenu(false)} 

# Step11: Create About,jsx


