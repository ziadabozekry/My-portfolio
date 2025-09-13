# Data Scientist Portfolio - Ziad Abozekry

A modern, responsive portfolio website designed for a data scientist to showcase skills, projects, and professional information.

## Features

- Clean, modern design with responsive layout
- Interactive elements with smooth animations
- Sections for introduction, skills, projects, and contact information
- Customizable content and styling
- Form validation for the contact section

## File Structure

- `index.html` - Main HTML structure
- `styles.css` - CSS styling for the website
- `script.js` - JavaScript for interactive elements
- SVG files for placeholder images:
  - `profile-photo.svg` - Profile photo placeholder
  - `project1.svg`, `project2.svg`, `project3.svg` - Project image placeholders

## Customization Guide

### Replacing Placeholder Images

Replace the SVG placeholder images with your actual images:

1. Replace `profile-photo.svg` with your actual profile photo
2. Replace project SVG files with actual project screenshots or relevant images

### Updating Personal Information

1. Edit the header section in `index.html` to update your name, title, and introduction
2. Update the About Me section with your personal background and expertise
3. Modify the contact information with your actual email, phone, and social media links

### Customizing Skills

In the Skills section of `index.html`, you can:

1. Adjust skill levels by changing the width percentage in the `style` attribute of each `.skill-level` div
2. Add or remove skills by duplicating or removing the `.skill-card` elements
3. Update skill descriptions to better reflect your expertise

### Adding Projects

To add more projects:

1. Duplicate a `.project-card` element in the Projects section
2. Update the project title, description, and tags
3. Add a new project image (and create a corresponding SVG or image file)
4. Update the project link

### Styling Customization

To change the color scheme or other styling elements:

1. Edit the CSS variables or specific styles in `styles.css`
2. The main gradient colors can be found in several places including buttons, skill bars, and section titles

## Browser Compatibility

This portfolio website is compatible with modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Local Development

To view the website locally:

1. Open the `index.html` file in your web browser
2. For live reloading during development, consider using a local development server

## Future Enhancements

Potential improvements for the future:

- Add a dark/light mode toggle
- Implement a blog section
- Add more interactive data visualizations to showcase data science skills
- Integrate with a backend for a functional contact form