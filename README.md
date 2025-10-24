# 🎨 TaskFlow - React Task Management Application

A modern, responsive task management application built with React, TypeScript, and Tailwind CSS. Features include task management, API integration, dark mode theming, and a clean, intuitive user interface.

## 🚀 Live Demo

**Deployed URL:** [Add your deployment URL here]

## ✨ Features

### Core Functionality
- ✅ **Task Management**: Create, complete, and delete tasks
- 🔍 **Task Filtering**: Filter tasks by status (All, Active, Completed)
- 💾 **Local Persistence**: Tasks are saved to browser's localStorage
- 📊 **Statistics Dashboard**: View task completion statistics
- 📰 **Posts Page**: Fetch and display posts from JSONPlaceholder API
- 🔎 **Search Functionality**: Search posts by title or content
- 📄 **Pagination**: Navigate through posts with pagination controls

### UI/UX Features
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- ✨ **Smooth Animations**: Fade-in and slide-up animations
- 🎨 **Modern UI**: Clean, professional interface using Tailwind CSS
- ⚡ **Fast Performance**: Built with Vite for optimal speed

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JSONPlaceholder API** - Demo API for posts

## 📦 Installation

### Prerequisites
- Node.js v18 or higher
- npm or pnpm package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd frontend-assignment
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using pnpm
   pnpm install
   ```

3. **Fix Tailwind CSS version (if needed)**
   ```bash
   # Using npm
   npm remove tailwindcss
   npm install -D tailwindcss@^3.4.0 postcss autoprefixer

   # Using pnpm
   pnpm remove tailwindcss
   pnpm add -D tailwindcss@^3.4.0 postcss autoprefixer
   ```

4. **Start development server**
   ```bash
   # Using npm
   npm run dev

   # Using pnpm
   pnpm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Button component with variants
│   ├── Card.tsx        # Card container component
│   ├── Footer.tsx      # Footer with links
│   ├── Layout.tsx      # Layout wrapper with navbar and footer
│   └── Navbar.tsx      # Navigation bar with theme toggle
├── context/            # React Context providers
│   └── ThemeContext.tsx # Theme management (light/dark mode)
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts # Hook for localStorage persistence
├── pages/              # Page components
│   ├── TaskManager.tsx # Main task management page
│   └── PostsPage.tsx   # Posts listing with API integration
├── App.tsx             # Main app component with routing
├── App.css             # Global styles
├── index.css           # Tailwind imports and base styles
└── main.tsx            # App entry point
```

## 🎯 Features Breakdown

### Task 1: Project Setup ✅
- ✅ Created React app with Vite
- ✅ Installed and configured Tailwind CSS
- ✅ Set up project structure (components, pages, hooks, context)
- ✅ Configured React Router for navigation

### Task 2: Component Architecture ✅
- ✅ **Button Component**: Three variants (primary, secondary, danger)
- ✅ **Card Component**: Reusable container with hover effects
- ✅ **Navbar Component**: Site navigation with theme toggle
- ✅ **Footer Component**: Links and copyright information
- ✅ **Layout Component**: Wrapper with navbar and footer
- ✅ All components use props for customization

### Task 3: State Management and Hooks ✅
- ✅ **TaskManager Component**: Full CRUD operations for tasks
  - Add new tasks
  - Mark tasks as completed
  - Delete tasks
  - Filter tasks (All, Active, Completed)
- ✅ **Hooks Implementation**:
  - `useState` for component state management
  - `useEffect` for loading saved tasks
  - `useContext` for theme management (light/dark mode)
  - Custom `useLocalStorage` hook for task persistence

### Task 4: API Integration ✅
- ✅ Fetch posts from JSONPlaceholder API
- ✅ Display data in card layout
- ✅ Loading state with spinner
- ✅ Error handling with user-friendly messages
- ✅ Pagination (10 posts per page)
- ✅ Search feature to filter posts by title/content

### Task 5: Styling with Tailwind CSS ✅
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Theme switcher (light/dark mode)
- ✅ Tailwind utility classes throughout
- ✅ Custom animations (fade-in, slide-up)
- ✅ Smooth transitions on interactive elements

## 🎨 Screenshots

### Task Manager - Light Mode
![Task Manager Light Mode](./screenshots/task-manager-light.png)

### Task Manager - Dark Mode
![Task Manager Dark Mode](./screenshots/task-manager-dark.png)

### Posts Page
![Posts Page](./screenshots/posts-page.png)

### Mobile Responsive
![Mobile View](./screenshots/mobile-view.png)

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your app will be deployed!

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to Netlify
   - Drag and drop the `dist` folder to Netlify
   - Or use Netlify CLI: `netlify deploy --prod`

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Add to package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🧪 Code Quality

- ✅ TypeScript for type safety
- ✅ Clean, well-organized code structure
- ✅ Reusable components with proper props
- ✅ Custom hooks for shared logic
- ✅ Error handling throughout
- ✅ Responsive design patterns
- ✅ Accessibility considerations

## 📝 Usage Guide

### Managing Tasks
1. **Add a Task**: Type in the input field and press Enter or click the + button
2. **Complete a Task**: Click the circle icon next to a task
3. **Delete a Task**: Click the trash icon
4. **Filter Tasks**: Use the All/Active/Completed buttons

### Browsing Posts
1. Navigate to the "Posts" page using the navigation bar
2. Use the search bar to filter posts
3. Navigate pages using the pagination controls
4. Click "Clear" to reset the search

### Theme Switching
- Click the sun/moon icon in the navigation bar to toggle between light and dark modes
- Your preference is saved automatically

## 🤝 Contributing

This is an assignment project. If you'd like to suggest improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is created for educational purposes as part of a React.js learning assignment.



---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
