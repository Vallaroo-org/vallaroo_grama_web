# Vallaroo Grama Web

Vallaroo Grama Web is a comprehensive web application designed to connect users with essential local services. It functions as a digital gateway to various community resources, ranging from emergency contacts to daily needs, specifically tailored for local "Grama" (village/community) contexts.

The application is built with modern web technologies, ensuring a fast, responsive, and accessible experience across devices. It features full bilingual support (English and Malayalam), making it accessible to a wider demographic.

## Features

*   **Service Directory**: Categorized access to essential services:
    *   🚑 **Emergency**: Ambulance, Fire, Police
    *   🛺 **Transport**: Auto Rickshaw, Jeep, Taxi
    *   🩺 **Health**: Doctors, Clinics, Pharmacy
    *   🏛️ **Panchayat**: Local government services
    *   🔧 **Services**: Plumbers, Electricians, Mechanics
    *   🐕 **Veterinary**: Vet clinics, Animal care
    *   🎓 **Education**: Schools, Tuitions
    *   🧺 **Daily Needs**: Grocery, Vegetables, Fish/Meat

*   **Bilingual Support**: Seamless switching between **English** and **Malayalam** (മലയാളം) content.
*   **Responsive Design**: Mobile-first approach ensuring great usability on smartphones and tablets.
*   **Modern UI**: Clean, intuitive interface powered by Tailwind CSS and Lucide Icons.
*   **Real-time Data**: Integrated with **Supabase** for dynamic service listings and updates.

## Tech Stack

*   **Framework**: [Next.js 16](https://nextjs.org/) (App Directory)
*   **Frontend**: [React 19](https://react.dev/)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
*   **Database**: [Supabase](https://supabase.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

*   Node.js 18.17 or later
*   npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Vallaroo-org/vallaroo_grama_web.git
    cd vallaroo_grama_web
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Environment Setup:**

    Create a `.env.local` file in the root directory and add your Supabase credentials:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   `app/`: Main application source code (Next.js App Router).
*   `components/`: Reusable UI components (ServiceCard, LanguageProvider, etc.).
*   `lib/`: Utility functions and Supabase client configuration.
*   `types/`: TypeScript type definitions.
*   `public/`: Static assets.

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

*   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
*   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
