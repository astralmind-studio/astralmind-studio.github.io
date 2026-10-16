// Set this to the App Store link once the app is live (e.g. "https://apps.apple.com/app/id1234567890").
const APP_STORE_URL = "";
document.querySelectorAll("[data-download]").forEach(a => {
  if (APP_STORE_URL) { a.href = APP_STORE_URL; a.textContent = "Download on the App Store"; }
  else { a.removeAttribute("href"); a.classList.add("soon"); a.textContent = "Coming soon to the App Store"; }
});
