/**
 * Initializes the privacyPolicy section by including HTML content,
 * hides the navigation bar, header icons, and highlights the legal notice link.
 */
function initPrivacyPolicy(){
    includeHTML().then(() => {
        hideNavBar();
        hideHeaderIcons();
        highlightPrivacyPolicy();
    });
}

/**
 * Navigates the user back to the previous page in the browsing history.
 */
function goBack() {
    window.history.back();
}