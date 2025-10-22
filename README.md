# AI Food Analyzer - Frontend

React frontend for the AI Food Analyzer application with nutritional analysis and health assessment.

## 🚀 Features

- **Food Image Upload**: Upload food images for analysis
- **AI-Powered Recognition**: Identifies food items using PyTorch models
- **Nutritional Information**: Detailed breakdown of calories, macros, vitamins, and minerals
- **Health Assessment**: Personalized health score based on BMI and medical conditions
- **Beautiful UI**: Modern design with Tailwind CSS and Framer Motion animations

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Axios** - API requests

## 📦 Installation

```bash
npm install
```

## 🔧 Configuration

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://your-backend-url:8000
```

For development, you can use the Azure backend:

```env
VITE_API_URL=http://food-analyzer-backend-sea.southeastasia.azurecontainer.io:8000
```

## 🏃 Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 🌐 Deployment

### Deploy to Vercel

1. Push this repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variable:
   - `VITE_API_URL`: Your backend URL
6. Click "Deploy"

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

## 📝 Environment Variables

- `VITE_API_URL` - Backend API URL (required)

## 🔗 Backend

This frontend connects to the AI Food Analyzer backend deployed on Azure.

Backend Repository: [AI-FOOD-ANALYZER](https://github.com/Sheryansh0/AI-FOOD-ANALYZER)

## 📄 License

MIT
