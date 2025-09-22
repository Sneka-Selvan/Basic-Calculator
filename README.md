# 🧮 Calculator Web App

A modern **Calculator Application** built with **HTML, CSS, and JavaScript**.  
It supports basic arithmetic, advanced operations (square root, square), percentage, and includes **keyboard input support** with a **light/dark theme toggle**.

---

## 🚀 Features
- 🔢 Basic arithmetic operations: `+`, `-`, `*`, `/`, `%`
- 📐 Advanced functions: `√` (square root), `x²` (square)
- ⌨️ Keyboard support:
  - Numbers `0–9`
  - Operators `+ - * / .`
  - `Enter` → calculate result
  - `Backspace` → delete last digit
- 🌙 Light/Dark theme toggle
- 🖥️ Modern responsive UI with **Neumorphism design**

---

## 🛠️ Technologies Used
- **HTML5** – structure
- **CSS3** – styling & animations
- **JavaScript (ES6)** – logic & functionality
- **Bootstrap 5** – responsiveness

---

## 📖 How It Works
1. User clicks number/operator buttons **or types using keyboard**.
2. The input is displayed in the calculator screen.
3. On pressing `=` or `Enter`, the expression is evaluated using JavaScript `eval()`.
4. Special buttons:
   - **AC** → clears input
   - **DE** → deletes last character
   - **%** → calculates percentage
   - **√** → calculates square root
   - **x²** → squares the input
5. Theme toggle switches between **light mode** and **dark mode**.

---

## 📑 Algorithm
1. Initialize display as empty.
2. On button click or keypress:
   - Append the value to display.
3. If `=` or `Enter` pressed:
   - Replace `%` with `/100` for calculation.
   - Evaluate the expression.
   - Show result in display.
4. If `AC` pressed → clear display.
5. If `DE` or `Backspace` pressed → remove last character.
6. If `√` pressed → calculate square root of expression.
7. If `x²` pressed → square the expression.
8. Toggle theme → add/remove `.dark` class on body.

---

## ⚙️ Installation & Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/calculator-app.git
