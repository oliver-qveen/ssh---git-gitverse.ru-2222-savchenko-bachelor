const button = document.getElementById("enter") as (HTMLButtonElement | null);
const login = document.getElementById("login") as (HTMLInputElement | null);
const password = document.getElementById("password") as (HTMLInputElement | null);
if (button !== null && login !== null && password !== null) {
    button.onclick = async () => {
        console.log((await (await fetch("/auth", {
            method: "post",
            body: JSON.stringify({ login: login.value, password: password.value })
        })).json()));
    }
}