// Form Submission Logic 

import {
    isNotEmpty,
    isValidEmail,
    isValidPhone,
    isValidAge,
} from "./validation.js";
import { openModal } from "./modal.js";

const form = document.getElementById("signupForm");
const submitButton = form.querySelector('button[type="submit"]');


// Mock API Simulation
const mockAPI = (userJson) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Internal check for required fields
        if (!userJson.fullName || !userJson.email) {
                resolve({ result: false, message: "Missing required fields" });
            } else {
                const success = Math.random() > 0.2; // 80% success rate
                resolve({ result: success, message: success ? "User created successfully" : "API error" });
            }
        }, 1000);
    });
};

// Form Submission
const handleSubmit = (event) => {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.classList.add("opacity-50", "cursor-not-allowed");

    // Get Form Data
    const formData = {
        fullName: form.fullName.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        dob: form.dob.value.trim(),
        age: form.age.value.trim(),
        address: form.address.value.trim(),
        emergencyName: form.emergencyName.value.trim(),
        emergencyPhone: form.emergencyPhone.value.trim(),
    };

    // Validation
    const errors = [];

    if (!isNotEmpty(formData.fullName)) errors.push("Full Name is required.");
    if (!isNotEmpty(formData.email)) errors.push("Email is required.");
    else if (!isValidEmail(formData.email)) errors.push("Email format is invalid.");
    if (!isValidPhone(formData.phone)) errors.push("Phone number format is invalid.");
    if (!isValidAge(formData.age)) errors.push("Age must be a positive number.");
    if (!isValidPhone(formData.emergencyPhone)) errors.push("Emergency phone format is invalid.");

    // Show Error in Modal
    if (errors.length > 0) {
        openModal({
            title: "Form Error",
            message: errors,
            iconClass: "fa-circle-exclamation",
            iconColor: "text-red-600",
        });
        submitButton.disabled = false;
        submitButton.classList.remove("opacity-50", "cursor-not-allowed");
        return;
    }

    // Log JSON
    console.log("User JSON:", JSON.stringify(formData, null, 2));

    // Call mock API
    mockAPI(formData).then((response) => {
        if (response.result) {
            openModal({
                title: "Success",
                message: "Your signup was successful!",
                iconClass: "fa-circle-check",
                iconColor: "text-green-600",
            });

            form.reset();

            // Reset input styles
            form.querySelectorAll("input, textarea").forEach((el) => {
                el.classList.remove("border-green-500", "bg-green-50");
            });
        } else {
            openModal({
                title: "API Error",
                message: "Something went wrong. Please try again later.",
                iconClass: "fa-circle-exclamation",
                iconColor: "text-red-600",
            });
        }
    });
};

// Attach submit listener
form.addEventListener("submit", handleSubmit);