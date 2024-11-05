Autor.One Project Documentation

Project Structure:
----------------

1. Pages:
- Home (/) - Main landing page
- Dashboard (/dashboard) - Admin settings panel

2. Components:
-------------
Core Components:
- Header - Site navigation and logo
- Footer - Copyright, contact info, and social links
- Tabs - Navigation tabs component
- Features - Features showcase section
- Services - Services information section
- Pricing - Pricing plans display
- Contact - Contact form and FAQ section
- Testimonials - User testimonials section

Dashboard Components:
- AccordionSection - Collapsible sections for dashboard
- LogoUpload - Site logo upload component
- ColorPicker - Color selection component
- BannerItemCard - Display card for banner items
- BannerItemModal - Modal for editing banner items
- FaqItem - Individual FAQ item display
- FaqModal - Modal for editing FAQs

3. Context:
-----------
SiteSettingsContext - Global state management for site settings

4. Settings Variables:
---------------------
Main Settings:
- name: Site name
- text1: Primary headline
- text2: Secondary headline
- banner1: First banner title
- banner2: Second banner title

Theme Settings:
- headerGradientFrom: Header gradient start color
- headerGradientTo: Header gradient end color
- headerTextColor: Header text color
- logo: Site logo URL

Services Settings:
- title: Services section title
- text1: Services primary text
- text2: Services secondary text

Footer Settings:
- copyright: Copyright text
- contact: Contact information
- socials: Array of social media links
  - name: Social platform name
  - href: Social profile URL

Content Arrays:
- tabs: Navigation tabs
- plans: Pricing plans
- faqs: Frequently asked questions
- items: Banner items (books/products)
- courseItems: Course listings

5. Utilities:
------------
- icons.tsx: SVG icons collection
- socialIcons.tsx: Social media icons
- validation.ts: Form validation schemas
- seo.tsx: SEO meta tags component

6. Configuration Files:
----------------------
- package.json: Project dependencies
- tailwind.config.js: Tailwind CSS configuration
- postcss.config.js: PostCSS configuration
- netlify.toml: Netlify deployment configuration

File Structure:
/src
  /components
    /dashboard
  /context
  /pages
  /utils
/public