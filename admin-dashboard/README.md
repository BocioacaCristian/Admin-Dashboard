# Admin Dashboard

A modern admin dashboard built with React, Next.js, TypeScript, Tailwind CSS, and Chart.js. This project demonstrates component composition, data handling, and responsive design techniques.

## Features

- 📊 **Interactive Charts**: Visualize data with responsive and interactive charts using Chart.js
- 💡 **Modern UI**: Clean and intuitive interface built with Tailwind CSS
- 📱 **Responsive Design**: Works perfectly on all device sizes
- 🔍 **Filter & Search**: Easily find what you're looking for
- 🚀 **Performance Optimized**: Fast loading and rendering
- 📝 **TypeScript**: Type-safe code for better development experience

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/admin-dashboard.git
cd admin-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

## Project Structure

```
admin-dashboard/
├── public/                # Static files
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Reusable components
│   │   ├── dashboard/     # Dashboard-specific components
│   │   ├── layout/        # Layout components
│   │   └── ui/            # UI components
│   ├── context/           # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and data
│   ├── styles/            # Global styles
│   └── types/             # TypeScript type definitions
├── .gitignore
├── next.config.js         # Next.js configuration
├── package.json
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Best Practices Implemented

- **Component Composition**: Breaking UI into reusable components
- **Separation of Concerns**: Keeping business logic separate from presentation
- **Responsive Design**: Using Tailwind's responsive utilities
- **Type Safety**: Leveraging TypeScript for better code quality
- **Code Organization**: Well-structured project folders with clear naming
- **Performance Optimization**: Using memo and other React optimization techniques

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- [TypeScript](https://www.typescriptlang.org/) 