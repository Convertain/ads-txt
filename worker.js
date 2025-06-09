export default {
    async fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === "/ads.txt") {
            return Response.redirect("https://raw.githubusercontent.com/Convertain/ads-txt/refs/heads/main/ads.txt", 301);
        }
        return fetch(request);
    }
};
