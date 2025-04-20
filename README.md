# PastForward

PastForward is an Instagram-like application with a unique twist - it allows users to interact with historical posts, browse, like, and comment on them. The platform combines modern social media features with historical content exploration.

## Screenshots

### Home Page
[Screenshot placeholder]

### Public Feed
[Screenshot placeholder]

### Profile Page
[Screenshot placeholder]

### Interact Page
[Screenshot placeholder]

## Features

- **Authentication**: User registration and login with Google OAuth
- **Post Creation**: Create posts with images and captions
- **Public Feed**: Browse posts from all users with infinite scrolling
- **Interaction**: Like and comment on posts
- **Profile Management**: View and edit user profiles
- **Follow System**: Follow/unfollow other users
- **Historical Content**: Browse and interact with historical posts
- **Search**: Find users and content
- **Responsive Design**: Works on mobile and desktop devices

## Technologies Used

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **AI Integration**: OpenAI, ElevenLabs (with free alternatives)
- **Image Generation**: Replicate, Stability AI
- **Deployment**: Vercel

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/pastforward.git
   cd pastforward
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

   \`\`\`
   # Database
   DATABASE_URL=
   DATABASE_URL_UNPOOLED=
   PGHOST=

   # Authentication
   NEXTAUTH_SECRET=
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=

   # AI Services
   OPENAI_API_KEY=
   ELEVENLABS_API_KEY=
   REPLICATE_API_TOKEN=
   STABILITY_API_KEY=
   \`\`\`

4. Set up the database:
   \`\`\`bash
   npx prisma generate
   npx prisma db push
   \`\`\`

5. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Creating an Account
1. Navigate to the sign-up page
2. Sign up with Google or create a new account
3. Complete your profile setup

### Creating Posts
1. Click on the "+" button in the navigation
2. Upload an image
3. Add a caption
4. Click "Post"

### Interacting with Posts
1. Browse the public feed
2. Like posts by clicking the heart icon
3. Comment on posts by clicking the comment icon
4. Follow users by visiting their profile and clicking "Follow"

### Exploring Historical Content
1. Navigate to the "Interact" page
2. Browse historical posts
3. Like and comment on historical content

## Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Connect your repository in Vercel
3. Configure project:
   - Framework Preset: Next.js
   - Build Command: `prisma generate && prisma migrate deploy && next build`
   - Output Directory: `.next`

4. Add Environment Variables:
   - Add all your environment variables from `.env.local` to Vercel
   - Make sure to include database connection strings and API keys

5. Update Google OAuth:
   - Add your Vercel deployment URL to Google Cloud Console
   - Add `https://your-vercel-app.vercel.app` to Authorized JavaScript origins
   - Add `https://your-vercel-app.vercel.app/api/auth/callback/google` to Authorized redirect URIs

6. Deploy and test your application

## Free API Alternatives

PastForward includes support for free alternatives to paid APIs:

- **Text Generation**: HuggingFace models instead of OpenAI
- **Image Generation**: Stable Diffusion XL instead of DALL-E
- **Text-to-Speech**: ElevenLabs free tier or browser-based alternatives

See `lib/free-api-alternatives.ts` for implementation details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
