# User Signup Form Technical Assessment

## Project Overview

This project is an at-home technical assessment designed to demonstrate foundational skills in JavaScript, HTML, CSS, and problem-solving. The project implements a user signup page with client-side validation, mock API interaction, and responsive UI feedback.

The implementation emphasizes clarity, maintainability, accessibility, and thoughtful use of modern tools.

---

## How to Run the Project

1. Clone or download the project files.
2. Open `index.html` in a modern web browser.
3. Fill out the form and click **Submit**.
4. Check console logs to view the structured JSON object representing the submitted user data.
5. Feedback messages appear via a modal for success or validation errors.

> No server setup is required as the API interaction is simulated via a `mockAPI()` function.

---

## Assumptions Made

* Phone numbers and ages are optional fields, but if provided, must match valid formats.
* Email and full name are strictly required.
* Emergency contact phone number is optional but validated if provided.
* Mock API simulates network latency and randomly fails 20% of the time to demonstrate error handling.
* The project uses Tailwind CSS for styling instead of Bootstrap 5, following personal preference and modern CSS practices.
* Form fields trim whitespace to prevent empty submissions.

---

## AI Usage & Assistance

* **Tool Used:** ChatGPT (OpenAI)

* **Purpose:**

  * Refactoring the form submission logic into modular JS files (`validation.js`, `modal.js`, `script.js`).
  * Assisted with client-side validation.
  * Guidance on accessible modal implementation and smooth transition effects.
  * Sanity checking the HTML structure.
  * Drafting out this README based on my prmopt so it's structured for clarity

* **Manual Verification:**

  * Confirmed validation regexes and logic.
  * Tested modal animations, fade-in/out, and overlay click behavior.
  * Checked submit button disabling during async operations.
  * Trimmed input values using `value.trim()` to prevent whitespace-only inputs.
  * Checked email regex accuracy.

* **AI-Assisted Improvement Task:**

  * Modularized JS and enhanced UX based on AI suggestions.
  * Accepted recommendations for separating concerns and using `opacity` transitions for the modal.
  * Rejected any suggestions that added unnecessary inline styles or complex dependencies.
  * Performed a sanity check on HTML, CSS, and JS to ensure assessment requirements were met.
  * Guided README creation based on assessment prompt.

---

## Project Structure

```
project-root/
├─ index.html            # Main HTML file
├─ scripts/
│  ├─ script.js          # Handles form submission and JSON creation
│  ├─ validation.js      # Validation helper functions
│  └─ modal.js           # Modal open/close logic with transitions
└─ README.md             # Project documentation
```

---

## Validation & Features

* **Required Fields:** Full name and email.
* **Optional Fields with Validation:** Phone, age, emergency contact phone.
* **Validation Checks:**

  * Non-empty for required fields.
  * Email format.
  * Age must be a positive number.
  * Phone numbers allow optional country codes.
* **Feedback:**

  * Modal displays multiple validation errors in a list.
  * Submit button disabled while mock API is processing.
  * JSON output logged to the console.
* **Mock API:**

  * Accepts a JSON object.
  * Returns `{ result: true/false, message: string }`.
  * Simulates 80% success and 20% failure.

---

## Example JSON Structure

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "dob": "1990-01-01",
  "age": 34,
  "address": "123 Main St, City, Country",
  "emergencyContact": {
    "name": "Jane Doe",
    "phone": "555-5678"
  }
}
```

---

## Critical Thinking Answers

1. **When should you not trust AI-generated code?**

   * When the context is ambiguous, security is critical, or the AI might provide outdated or incorrect logic.

2. **How do you verify AI output before using it in production?**

   * Manually review, test all edge cases, and ensure it meets project requirements.

3. **What risks do AI tools introduce into a codebase?**

   * Potential bugs, inconsistent coding style, hidden dependencies, and security vulnerabilities.

4. **Good vs Bad AI Prompt:**

   * Good: `Refactor this form validation code to separate validation, modal, and submission logic while keeping accessibility.`
   * Bad: `Fix my code.` (This prompt is too vague, lacks context and requirements)

---

## Notes

* The project uses modern HTML5, Tailwind CSS, and ES6+ JavaScript.
* Modular JS ensures separation of concerns, maintainability, and readability.
* Transitions and overlays enhance UX without compromising accessibility.
* AI was used responsibly, with all output manually reviewed and tested.

---

**Prepared by:** Benjamin Tom
**Year:** 2026