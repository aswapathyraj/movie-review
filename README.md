# 🎥 Movie Search & AI Review

A modern, responsive web application for searching movies and generating AI-powered reviews. Built with a **Node.js/Express** backend and a **HTML/CSS/JavaScript** frontend, it integrates with the OMDb API for movie data and the Groq API for AI-generated reviews.

![Preview](/public/preview.png)  
<!-- Replace with your actual screenshot -->

---

## ✨ Features

- 🔍 **Movie Search**: Retrieve movie details (title, year, genre, director, actors, plot, IMDb rating, poster) by title.
- 🤖 **AI-Generated Reviews**: Generates concise 150-200 word reviews with strengths, weaknesses, a star rating, and similar movie recommendations using Groq's Llama 3.3 70B model.
- 📱 **Responsive Design**: Mobile-friendly UI with Tailwind CSS and smooth interactions.
- ⚡ **Fast Performance**: Lightweight backend with efficient API calls and minimal dependencies.
- 🔔 **Error Handling**: User-friendly loading states and error messages for invalid searches or API failures.

---

## 🧰 Technologies Used

### Frontend
- **HTML5**: Application structure.
- **CSS3**: Styled with Tailwind CSS for a modern, responsive UI.
- **JavaScript (Vanilla)**: Form submissions, API interactions, and dynamic rendering.
- **Tailwind CSS**: Utility-first CSS framework.
- **Google Fonts**: Roboto font for typography.
- **Fetch API**: Backend communication.

### Backend
- **Node.js & Express**: RESTful API framework.
- **Axios**: HTTP requests to OMDb API.
- **Groq SDK**: AI review generation with Llama 3.3 70B model.
- **dotenv**: Environment variable management.
- **OMDb API**: Movie data source.
- **logging**: Console-based error tracking.

---

## 🚀 Installation & Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aswapathyraj/movie-review.git
   cd movie-review
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   OMDB_API_KEY=your_omdb_api_key
   GROQ_API_KEY=your_groq_api_key
   ```
   - Obtain an OMDb API key from [OMDb API](http://www.omdbapi.com/apikey.aspx).
   - Obtain a Groq API key from [xAI](https://x.ai/api).

4. **Build Tailwind CSS**:
   ```bash
   npm run build:tailwind
   ```

5. **Run the Application**:
   ```bash
   npm start
   ```
   The server runs on `http://localhost:3000`.

6. **Access the Application**:
   Open `http://localhost:3000` in a browser.

---

## 🖌️ Customization

- **Theme Colors**: Edit Tailwind CSS variables in `public/css/tailwind.css`.
- **Content**: Modify text and labels in `public/index.html`.
- **API Parameters**: Adjust the Groq prompt in `server.js` for custom review styles or lengths.
- **Frontend**: Add animations or adjust layout in `public/index.html` and `public/css/tailwind.css`.

---

## 📬 Contact

**Aswapathy Raj**  
📧 [aswapathyraj@gmail.com](mailto:aswapathyraj@gmail.com)  
📍 Mavelikara, Alappuzha, Kerala  
🌐 [LinkedIn](https://www.linkedin.com/in/aswapathy-raj-b9417a2b5)  
📸 [Instagram](https://www.instagram.com/aswapathy_raj/)  
💻 [GitHub](https://github.com/aswapathyraj)

---

## 🧾 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and share with credit.

```text
MIT License

Copyright (c) 2025 Aswapathy Raj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

---

## 🙌 Credits

- Developed by **Aswapathy Raj**.
- Frontend styling via [Tailwind CSS](https://tailwindcss.com).
- Fonts from [Google Fonts – Roboto](https://fonts.google.com/specimen/Roboto).
- Movie data from [OMDb API](http://www.omdbapi.com).
- AI reviews powered by [xAI Groq](https://x.ai).

---

## 🤝 Contributing

Contributions, suggestions, or improvements are welcome!  
Please open an issue or pull request on [GitHub](https://github.com/aswapathyraj/movie-review).

---

**Note**: Replace `/public/preview.png` with an actual screenshot of your application. If the repository URL or project details differ, please provide the correct information, and I can update the README accordingly.