@echo off
echo ----------------------------------------
echo 📁 Setting up StudySprint Project
echo ----------------------------------------

cd client
if exist package.json (
    echo 🧩 Installing frontend dependencies...
    npm install

    echo 🎨 Installing Tailwind CSS...
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

    echo ✅ Updating Tailwind config...
    powershell -Command "(Get-Content tailwind.config.js) -replace 'content: \[.*\]', 'content: [\".\\/src\\/\\*\\*\\/*.{js,jsx,ts,tsx}\"]' | Set-Content tailwind.config.js"
    echo @tailwind base;> src\index.css
    echo @tailwind components;>> src\index.css
    echo @tailwind utilities;>> src\index.css
) else (
    echo ❌ package.json not found in client/. Please check your folder structure.
)

cd ..
cd server
if exist package.json (
    echo 🧩 Installing backend dependencies...
    npm install
) else (
    echo ❌ package.json not found in server/. Please check your folder structure.
)

echo 🌿 Creating .env file...
echo MONGO_URI=mongodb://localhost:27017/studysprint> .env
echo OPENAI_KEY=your-openai-api-key>> .env

cd ..
echo 🧠 Installing Python AI dependencies...
pip install sentence-transformers

echo ----------------------------------------
echo ✅ Setup complete!
echo 🔄 Starting servers...
echo ----------------------------------------

start cmd /k "cd client && npm start"
start cmd /k "cd server && node app.js"
start cmd /k "python ai\matcher.py"
