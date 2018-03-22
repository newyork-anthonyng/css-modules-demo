import styles from "./styles.css";

const header = document.createElement("div");
header.innerHTML = `
    <h1 class="${styles.header}">Hello World</h1>
    <p class="${styles.p}">Yo yo yo</p>
`;

document.body.appendChild(header);
