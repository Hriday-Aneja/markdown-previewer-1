const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const highlightLink = document.getElementById("highlight-theme");
// Base URL for highlight.js styles
const HLJS_BASE_URL = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/";

// Default markdown example 
const sample = `# Modern Markdown Editor 

## Introduction
This application lets you instantly preview your Markdown text. Markdown is lightweight and widely used for documentation (like README files).

### Key Features
- **Headings** (\`#\`, \`##\`, etc.)
- *Italic and Bold* text.
- > Blockquotes for citing information.

### Code Highlighting Example
Inline code looks like this: \`const language = "CSS";\`

Code blocks use syntax highlighting and will dynamically switch theme with the "Toggle Theme" button. **Now it should render as a proper block:**
\`\`\`javascript
// JavaScript function to handle API calls
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
\`\`\`
`;
editor.value = sample;

// Render markdown
function renderMarkdown() {
  const raw = editor.value;
  // Use marked.js with breaks and GFM (GitHub Flavored Markdown)
  const dirty = marked.parse(raw, { breaks: true, gfm: true });
  // Sanitize the output to prevent XSS attacks
  const clean = DOMPurify.sanitize(dirty);
  preview.innerHTML = clean;

  // Highlight code blocks after content is rendered
  preview.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
  });
}

editor.addEventListener("input", renderMarkdown);

function clearText() {
  editor.value = "";
  renderMarkdown();
}

function exportHTML() {
  // Create a Blob containing the generated HTML content
  const blob = new Blob([preview.innerHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  
  // Create a temporary link element to trigger the download
  const a = document.createElement("a");
  a.href = url;
  a.download = "markdown_document.html";
  a.click();
  
  // Clean up the URL object
  URL.revokeObjectURL(url);
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  
  // Update highlight.js stylesheet dynamically to match the body theme
  if (isDark) {
    highlightLink.href = HLJS_BASE_URL + "github-dark.min.css";
  } else {
    highlightLink.href = HLJS_BASE_URL + "github.min.css";
  }
  
  // Rerender to ensure code highlighting is reapplied with the new theme colors
  renderMarkdown();
}

// Initial render
window.addEventListener('load', renderMarkdown);

// The original script was executing renderMarkdown() immediately.
// We wrap it in an event listener to ensure all DOM elements are loaded.
