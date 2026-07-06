(function () {
  const STORAGE_KEY = "fantastickej_cookie_consent";

  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("cookieAccept");
  const rejectBtn = document.getElementById("cookieReject");

  function updateGoogleConsent(choice) {
    if (typeof window.gtag !== "function") return;

    const granted = choice === "accepted";

    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
    });
  }

  function hideBanner() {
    if (banner) banner.hidden = true;
  }

  function showBanner() {
    if (banner) banner.hidden = false;
  }

  function saveChoice(choice) {
    localStorage.setItem(STORAGE_KEY, choice);
    updateGoogleConsent(choice);
    hideBanner();
  }

  const savedChoice = localStorage.getItem(STORAGE_KEY);

  if (savedChoice === "accepted" || savedChoice === "rejected") {
    updateGoogleConsent(savedChoice);
    hideBanner();
  } else {
    showBanner();
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", function () {
      saveChoice("accepted");
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", function () {
      saveChoice("rejected");
    });
  }
})();