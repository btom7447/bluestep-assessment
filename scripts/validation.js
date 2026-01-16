// Custom validation functions for form fields

// Checks if a value is not empty (trimmed)
export const isNotEmpty = (value) => value.trim() !== "";

// Email format check
export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
};

// Phone number check (optional field)
export const isValidPhone = (phone) => {
    if (!phone) return true; // empty phone is allowed
    const regex = /^[+\d]?(?:[\d\s-]{7,})$/;
    return regex.test(phone.trim());
};

// Age check (optional field)
export const isValidAge = (age) => {
    if (!age) return true; // empty age allowed
    return Number(age) > 0;
};