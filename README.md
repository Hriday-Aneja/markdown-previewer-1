📝 Modern Markdown Previewer

This is a single-page web application that provides a real-time, side-by-side preview for Markdown content. It's built to be fast, responsive, and secure, making it an ideal tool for drafting documentation, blog posts, or professional GitHub README files.

✨ Features:

Live Rendering: Instantly see your rendered HTML output in the preview pane as you type in the editor.

Syntax Highlighting: Automatically formats and color-codes all fenced code blocks (```) for enhanced readability, supporting various languages (e.g., JavaScript, HTML, XML, CSS).

Dual-Theme Support: Easily switch between Light Mode and Dark Mode, which dynamically updates the entire UI, including the syntax highlighting stylesheet, ensuring optimal text contrast at all times.

HTML Export: Download the rendered content in the preview pane as a clean .html file, ready for use elsewhere.

Security Focused: Utilizes DOMPurify to sanitize the rendered HTML output, mitigating the risk of Cross-Site Scripting (XSS) vulnerabilities from malicious input.

Responsive Design: Fully optimized for seamless use on both desktop and mobile devices.

🛠 Tech Stack and Libraries This project is built using vanilla web technologies, minimizing dependencies while leveraging powerful client-side libraries:

HTML, Custom CSS, Vanilla JavaScript: Core application structure and logic.

Marked.js: The primary engine for converting Markdown text into HTML.

[DOMPurify]: Used for sanitization and security of the generated HTML.

[Highlight.js]: Provides robust and dynamic syntax highlighting for code blocks.

Google Fonts (Inter): Used for clean and modern typography.
