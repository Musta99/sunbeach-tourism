# SunBeach Tourism Dubai 🏖️

A fully functional, aesthetic marketing website for SunBeach Tourism Dubai featuring hotel and flight booking services. Built with Next.js 14, TypeScript, and modern CSS.

![SunBeach Tourism Dubai](https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80)

## ✨ Features

- **Modern Hero Section** - Eye-catching parallax background with compelling CTAs
- **Services Showcase** - Hotel booking, flight booking, holiday packages, and city tours
- **Featured Packages** - 6 curated travel packages with detailed information
- **About Section** - Company information with impressive statistics
- **Customer Testimonials** - Real feedback from satisfied travelers
- **Fully Functional Contact Form** - Integrated email functionality
- **Responsive Design** - Beautiful on all devices (mobile, tablet, desktop)
- **Professional Animations** - Smooth fade-ins, slide-ups, and hover effects
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- An email account for SMTP (Gmail, SendGrid, etc.)

### Installation

1. **Navigate to the project directory:**

   ```bash
   cd c:\Projects\sunbeach
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables (see Email Configuration section below)**

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

The contact form requires SMTP credentials to send emails. Follow these steps:

### Step 1: Choose an Email Service

#### Option A: Gmail (Recommended for testing)

1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Generate an App Password:
   - Go to Security → 2-Step Verification → App passwords
   - Create a new app password for "Mail"
   - Copy the generated password

#### Option B: SendGrid (Recommended for production)

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Use `smtp.sendgrid.net` as the host

### Step 2: Update .env.local

Open the `.env.local` file and update with your credentials:

```env
# Admin email - where contact form submissions will be sent
ADMIN_EMAIL=your-email@example.com

# For Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-here

# For SendGrid
# SMTP_HOST=smtp.sendgrid.net
# SMTP_PORT=587
# SMTP_USER=apikey
# SMTP_PASS=your-sendgrid-api-key
```

**Important:** Never commit the `.env.local` file to version control!

## 🖼️ Replacing Dummy Images

All images currently use placeholder URLs from Unsplash. To replace with your own:

### Method 1: Using Local Images

1. Create a `public/images` folder in the project root
2. Add your images to this folder
3. Update the image paths in the components:

**Hero Section** (`app/components/Hero.module.css`):

```css
background-image: url("/images/your-hero-image.jpg");
```

**Services Section** (`app/components/Services.tsx`):

```typescript
image: "/images/hotel-booking.jpg";
```

**Packages Section** (`app/components/Packages.tsx`):

```typescript
image: "/images/beach-package.jpg";
```

**About Section** (`app/components/About.tsx`):

```typescript
<img src="/images/about-dubai.jpg" alt="Dubai Skyline" />
```

### Method 2: Using External URLs

Simply replace the Unsplash URLs with your own hosted image URLs:

```typescript
// Before
image: "https://images.unsplash.com/photo-...";

// After
image: "https://yourdomain.com/images/your-image.jpg";
```

### Image Locations by Component

| Component           | File Path                        | Line/Section                |
| ------------------- | -------------------------------- | --------------------------- |
| Hero Background     | `app/components/Hero.module.css` | Line 8                      |
| Services (4 images) | `app/components/Services.tsx`    | Lines 8, 15, 22, 29         |
| Packages (6 images) | `app/components/Packages.tsx`    | Lines 8, 14, 20, 26, 32, 38 |
| About               | `app/components/About.tsx`       | Line 11                     |

## 🎨 Customization Guide

### Changing Brand Colors

Edit `app/globals.css` and update the color variables:

```css
:root {
  --color-primary-blue: #1da1f2; /* Your primary color */
  --color-accent-yellow: #facc15; /* Your accent color */
}
```

### Updating Content

- **Navigation Links:** Edit `app/components/Navigation.tsx`
- **Hero Text:** Edit `app/components/Hero.tsx`
- **Services:** Edit the `services` array in `app/components/Services.tsx`
- **Packages:** Edit the `packages` array in `app/components/Packages.tsx`
- **About Text:** Edit `app/components/About.tsx`
- **Testimonials:** Edit the `testimonials` array in `app/components/Testimonials.tsx`
- **Footer:** Edit `app/components/Footer.tsx`

### Adding/Removing Sections

Edit `app/page.tsx` to add, remove, or reorder sections:

```typescript
export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      {/* Add your custom section here */}
      <Services />
      {/* ... */}
    </main>
  );
}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy:**

   ```bash
   vercel
   ```

4. **Add environment variables in Vercel dashboard:**

   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add all variables from `.env.local`

5. **Redeploy for changes to take effect**

### Deploy to Netlify

1. **Install Netlify CLI:**

   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project:**

   ```bash
   npm run build
   ```

3. **Deploy:**

   ```bash
   netlify deploy --prod
   ```

4. **Add environment variables:**
   - Go to Site settings → Build & deploy → Environment
   - Add all variables from `.env.local`

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:

- AWS Amplify
- Azure Static Web Apps
- Google Cloud Run
- Railway
- Render

Refer to [Next.js deployment documentation](https://nextjs.org/docs/deployment) for specific instructions.

## 📁 Project Structure

```
sunbeach/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── components/
│   │   ├── Navigation.tsx        # Navigation bar
│   │   ├── Hero.tsx              # Hero section
│   │   ├── Services.tsx          # Services section
│   │   ├── Packages.tsx          # Packages section
│   │   ├── About.tsx             # About section
│   │   ├── Testimonials.tsx      # Testimonials
│   │   ├── ContactForm.tsx       # Contact form
│   │   └── Footer.tsx            # Footer
│   ├── globals.css               # Global styles & design system
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/
│   └── images/                   # Your custom images go here
├── .env.local                    # Environment variables (not in git)
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + Global CSS
- **Email:** Nodemailer
- **Fonts:** Google Fonts (Inter)
- **Images:** Unsplash (placeholders)

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### Contact Form Not Sending Emails

1. **Check environment variables:** Ensure all SMTP credentials are correct in `.env.local`
2. **For Gmail:** Make sure you're using an App Password, not your regular password
3. **Check console:** Look for error messages in the terminal
4. **Test SMTP:** Verify your SMTP credentials work with a tool like [SMTP Test](https://www.smtpdiag.com/)

### Images Not Loading

1. **Local images:** Ensure they're in the `public` folder
2. **External images:** Check the URL is accessible
3. **Next.js config:** For external images, you may need to add domains to `next.config.js`:

```javascript
module.exports = {
  images: {
    domains: ["yourdomain.com"],
  },
};
```

### Build Errors

1. **Clear cache:**

   ```bash
   rm -rf .next
   npm run build
   ```

2. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📄 License

This project is created for SunBeach Tourism Dubai.

## 🤝 Support

For questions or issues, please contact your development team or refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Nodemailer Documentation](https://nodemailer.com/)

---

**Built with ❤️ for SunBeach Tourism Dubai**
