# SustainaGPT Landing Page

A modern, responsive landing page for SustainaGPT - an AI-powered sustainability consultant for SMEs in Southeast Asia.

## 🚀 Features

- **Modern Design**: Clean, professional landing page with smooth animations
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Fast Performance**: Built with Vite and optimized for speed
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant design patterns

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sustainagpt-landing.git
cd sustainagpt-landing
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build

To build for production:

```bash
pnpm run build
```

To preview the production build:

```bash
pnpm run preview
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages. Simply push to the `main` or `master` branch and the site will be automatically built and deployed.

### Manual Deployment

1. Build the project: `pnpm run build`
2. The built files will be in the `dist/` directory
3. Deploy the contents of `dist/` to your hosting provider

## 📁 Project Structure

```
sustainagpt-landing/
├── src/
│   ├── components/     # UI components
│   ├── assets/        # Images and static files
│   ├── lib/           # Utility functions
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Public assets
├── .github/           # GitHub Actions workflows
└── dist/              # Production build (generated)
```

## 🎨 Customization

### Colors and Theme

The project uses Tailwind CSS with a custom theme. You can modify colors and other design tokens in `src/App.css`.

### Content

Update the content in `src/App.jsx` to match your business needs. The landing page includes:

- Hero section with call-to-action
- Features section
- Benefits section
- Sample reports showcase
- Waitlist signup section

### Images

Replace images in `src/assets/` with your own:

- `tree_planting_hero.jpg` - Hero section image
- `carbon_footprint.png` - Benefits section image
- `sample_report_1.png` - Sample report 1
- `sample_report_2.png` - Sample report 2

## 📝 Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- Email: hanif@aiforproductivity.id
- Location: Yogyakarta, Indonesia

---

Built with ❤️ for sustainable business growth in Southeast Asia. 