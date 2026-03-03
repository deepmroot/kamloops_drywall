# Drywall Contractor Website Template - Kamloops

A clean, modern, high-converting static website for a drywall contractor.

## Getting Started

### 1. Local Development
To view the website locally:
- Open `index.html` in any web browser.
- Alternatively, use a local server like `Live Server` (VS Code extension) or run `npx serve .` in the root directory.

### 2. Update Placeholders
Search and replace the following placeholders in all HTML files:
- `[BUSINESS_NAME]`: Your company name.
- `[PHONE]`: Your phone number (e.g., 250-555-0199).
- `[EMAIL]`: Your professional email address.
- `[YEARS]`: Number of years in business or experience.
- `[ADDRESS]`: Your business address or city/region.
- `[POSTAL_CODE]`: Your postal code for SEO schema.
- `https://formspree.io/f/xxxxxxx`: Update the `action` attribute in `contact.html` with your actual Formspree endpoint or other form handler.

### 3. SEO & Images
- Update the `<title>` and `<meta description>` tags in each page.
- Replace the placeholder image divs/texts with actual project photos for better conversion.
- Update `og:image` and `og:url` in the `<head>` sections.

## Deployment

### Cloudflare Pages
1. Push this code to a GitHub repository.
2. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set the **Build Command** to (empty) and **Build Output Directory** to `/` (or the folder containing the files).
5. Deploy.

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root and follow the prompts.
3. Or connect your GitHub repository to the Vercel dashboard.

## Tech Stack
- **HTML5**: Semantic markup for better SEO.
- **Tailwind CSS**: Utility-first CSS via CDN for rapid styling and performance.
- **Vanilla JavaScript**: Lightweight script for mobile menu interaction.
- **Schema.org**: LocalBusiness JSON-LD included for better Google search presence.
