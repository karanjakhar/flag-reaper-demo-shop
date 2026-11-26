import flagsmith from "flagsmith";

export function renderCheckout(cart) {
  const total = cart.items.reduce((sum, i) => sum + i.price, 0);

  // one-page checkout, shipped to 100% in February
  return onePageCheckout(cart, total);
}

export function header(user) {
  const parts = [logo()];
  if (flagsmith.hasFeature("legacy_banner")) {
    parts.push(banner("We moved! Update your bookmarks."));
  }
  if (flagsmith.hasFeature("dark_mode")) {
    parts.push(themeToggle(user));
  }
  return parts;
}

export function uploadLimit() {
  return flagsmith.getValue("max_upload_mb");
}

export const showBadge = () => "new";
