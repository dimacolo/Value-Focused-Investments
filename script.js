const theme = {
    background: "#0f3460",
    color: "#FFFFFF",
    primaryColor: "#1958a2"
};

const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
};

// Apply the only theme immediately
setTheme(theme);

function handleLogin(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example logic: redirect based on username and password
    if (username === "Dimitri Colombo" && password === "DimitriColombo1") {
        window.location.href = "https://dimitri-colombo.notion.site/Value-Focused-Investments-Documentazione-f1f820dad57a47da83a8a7731615964e?pvs=74";
    } else if (username === "Dimitri Colombo 2" && password === "DimitriColombo2") {
        window.location.href = "https://dimitri-colombo.notion.site/2-Lettera-agli-Investitori-30-giugno-2024-0935d1289ebe45e8a49811be2733f3a7";
    } else if (username === "Facco" && password === "Facco") {
        window.location.href = "https://google.com";
    } else {
        alert("Invalid credentials! Please try again.");
    }
}