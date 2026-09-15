const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (userData) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }

    return data;
};

export const loginUser = async (userData) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const uploadResume = async (formData) => {
    const response = await fetch(`${API_URL}/resumes`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
        body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Resume upload failed");
    }

    return data;
};

export const analyzeUploadedResume = async (resumeId) => {
    const response = await fetch(`${API_URL}/analysis/${resumeId}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Resume analysis failed");
    }

    return data;
};

export const logoutUser = () => {
    localStorage.removeItem("token");
};

export const getCurrentUser = async () => {
    const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
    }

    return data;
};