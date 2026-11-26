import flagsmith from "flagsmith";

export function pricingPage() {
  if (flagsmith.hasFeature("beta_search")) {
    enableSearch();
  }
  // A/B test "Annual vs monthly plan first" (Flagsmith Experimentation)
  return renderPlans(["annual", "monthly"]);
}

export function onCheckoutClick() {
  flagsmith.trackEvent("checkout_started");
}
