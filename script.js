const themes = [
    {
        background: "#1A1A2E",
        color: "#FFFFFF",
        primaryColor: "#0F3460"
    },
    {
        background: "#461220",
        color: "#FFFFFF",
        primaryColor: "#E94560"
    },
    {
        background: "#192A51",
        color: "#FFFFFF",
        primaryColor: "#967AA1"
    },
    {
        background: "#F7B267",
        color: "#000000",
        primaryColor: "#F4845F"
    },
    {
        background: "#F25F5C",
        color: "#000000",
        primaryColor: "#642B36"
    },
    {
        background: "#231F20",
        color: "#FFF",
        primaryColor: "#BB4430"
    }
];

const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
    const btnContainer = document.querySelector(".theme-btn-container");
    themes.forEach((theme) => {
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);
        div.addEventListener("click", () => setTheme(theme));
    });
};

function handleLogin(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example logic: redirect based on username and password
    if (username === "Dimitri Colombo" && password === "DimitriColombo1") {
        window.location.href = "https://dimitri-colombo.notion.site/Value-Focused-Investments-Documentazione-f1f820dad57a47da83a8a7731615964e?pvs=74";
    } else if (username === "Dimitri Colombo 2" && password === "DimitriColombo2") {
        window.location.href = "https://dimitri-colombo.notion.site/2-Lettera-agli-Investitori-30-giugno-2024-0935d1289ebe45e8a49811be2733f3a7";
    } else {
        alert("Invalid credentials! Please try again.");
    }
}



displayThemeButtons();