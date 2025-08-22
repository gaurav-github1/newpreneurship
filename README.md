# NewPreneur 🚀

**Create, Connect, and Grow with NewPreneur**

A modern startup community platform built with Next.js 15, Sanity CMS, and NextAuth.js where entrepreneurs can pitch their startups, connect with like-minded individuals, and find mentorship opportunities.

## ✨ Features

### 🏠 Homepage
- **Startup Discovery**: Browse and search through startup pitches with real-time filtering
- **Interactive Search**: Dynamic search functionality with category filtering
- **View Counter**: Track startup pitch engagement
- **Responsive Design**: Fully responsive across all devices

### 🔐 Authentication
- **GitHub OAuth**: Secure authentication using NextAuth.js v5
- **User Profiles**: Personalized user profiles with GitHub integration
- **Session Management**: Persistent login sessions

### 📝 Startup Management
- **Create Pitches**: Rich markdown editor for detailed startup pitches
- **Content Management**: Full CRUD operations for startup content
- **Media Upload**: Image upload and management
- **Category System**: Organized startup categorization

### 🎨 Modern UI/UX
- **Custom Typography**: Work Sans font family integration
- **Tailwind CSS**: Modern styling with custom components
- **Shadcn/ui Components**: Professional UI component library
- **Interactive Elements**: Mouse tracking and dynamic animations
- **Toast Notifications**: User feedback system

### 📊 Content Management (Sanity CMS)
- **Headless CMS**: Sanity Studio integration at `/studio`
- **Real-time Updates**: Live content synchronization
- **Structured Content**: Type-safe content schemas
- **Media Management**: Optimized image handling

## 🛠 Tech Stack

### Frontend
- **Next.js 15** (App Router with PPR - Partial Prerendering)
- **React 19** with TypeScript
- **Tailwind CSS** + **Tailwind Typography**
- **Shadcn/ui Components**
- **Lucide React** (Icons)

### Backend & Authentication
- **NextAuth.js v5** (GitHub OAuth)
- **Next.js API Routes**
- **Server Actions** for form handling

### Content Management
- **Sanity CMS** with Vision tool
- **Sanity Live** for real-time updates
- **Sanity Image URL** for optimized images
- **Sanity Plugin Markdown** for rich content

### Development Tools
- **TypeScript** with strict type checking
- **ESLint** with Next.js configuration
- **Turbopack** for faster development builds
- **PostCSS** with Autoprefixer

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm/bun
- GitHub OAuth App (for authentication)
- Sanity account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with:
   ```env
   # NextAuth Configuration
   NEXTAUTH_SECRET=your_nextauth_secret
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=your_sanity_read_token
   SANITY_API_WRITE_TOKEN=your_sanity_write_token
   ```

4. **Generate Sanity Types**
   ```bash
   npm run typegen
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

6. **Access Sanity Studio**
   Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## 📁 Project Structure

```
my-app/
├── app/                          # Next.js App Router
│   ├── (root)/                   # Route group
│   │   ├── page.tsx             # Homepage
│   │   └── startup/             # Startup routes
│   │       ├── [id]/            # Dynamic startup pages
│   │       └── create/          # Create startup form
│   ├── api/                     # API routes
│   ├── studio/                  # Sanity Studio
│   ├── components/              # Shared components
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root layout
├── components/                   # React components
│   ├── ui/                      # Shadcn/ui components
│   ├── Navbar.tsx               # Navigation
│   ├── StartupCard.tsx          # Startup display card
│   ├── SearchForm.tsx           # Search functionality
│   └── ...
├── sanity/                      # Sanity CMS configuration
│   ├── lib/                     # Sanity client & queries
│   ├── schemaTypes/             # Content schemas
│   └── env.ts                   # Environment config
├── lib/                         # Utility functions
└── auth.ts                      # NextAuth configuration
```

## 🎯 Key Features Explained

### Content Schema
- **Startup**: Title, description, category, pitch (markdown), author, views
- **Author**: GitHub profile integration, bio, social links

### Search & Filtering
- Real-time search across titles, descriptions, categories, and authors
- Category-based filtering
- View-based sorting

### Authentication Flow
- GitHub OAuth integration
- Automatic user profile creation
- Protected routes for startup creation

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typegen` - Generate Sanity TypeScript types

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed on any platform supporting Node.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 🔧 Configuration

### Next.js Configuration
- **PPR (Partial Prerendering)**: Enabled for optimal performance
- **Image Optimization**: Configured for external domains
- **Turbopack**: Enabled for faster development

### Sanity Configuration
- **Real-time Updates**: Live content synchronization
- **Markdown Support**: Rich text editing capabilities
- **Vision Tool**: GROQ query testing in studio

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Support

For support and questions, please open an issue in the GitHub repository.

---

**Built with ❤️ using Next.js 15, Sanity CMS, and modern web technologies**
