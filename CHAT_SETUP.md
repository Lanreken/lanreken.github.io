# Chat Agent Setup Guide

## Overview
A chat agent has been added to your portfolio that can answer questions about your backend work and project history. It uses OpenAI's GPT-3.5-turbo model and is deployed as a Vercel serverless function.

## Setup Instructions

### 1. Get OpenAI API Key
1. Go to https://platform.openai.com/
2. Sign up or log in
3. Navigate to API Keys
4. Create a new API key
5. Copy the key and keep it somewhere safe

### 2. Add API Key to Vercel
1. Open your Vercel project dashboard
2. Go to Settings > Environment Variables
3. Add a new environment variable:
   - Name: `OPENAI_API_KEY`
   - Value: your OpenAI API key
   - Environment: Production, Preview, Development
4. Save and redeploy your application

### 3. Test Locally (Optional)
Create a `.env.local` file in the project root:

```env
OPENAI_API_KEY=your-api-key-here
```

Never commit `.env.local` to git.

## Features
- Floating chat button in the bottom-right corner
- AI-powered responses about your portfolio and backend work
- Conversation history support
- Typing indicator
- Responsive design
- Theme-aware styling
- Clear chat button

## Files
- `api/chat.ts` - Vercel serverless function for chat responses
- `src/components/ChatWidget.tsx` - React chat widget
- `src/components/ChatWidget.css` - chat widget styling
- `vercel.json` - route configuration for the API

## Cost Estimate
- GPT-3.5-turbo: about $0.002 per 1K tokens
- Average conversation: about 500-1000 tokens
- Estimated cost: about $0.001-0.002 per conversation
- 1000 conversations per month: about $1-2

## Customization
You can customize the system prompt in `api/chat.ts` any time if you want the assistant to emphasize specific projects, certifications, or work experience.

## Troubleshooting
- Chat not working: confirm `OPENAI_API_KEY` is configured in Vercel
- API errors: check the Vercel function logs
- No responses: verify your OpenAI account has billing or credits enabled
