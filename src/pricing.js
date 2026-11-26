import flagsmith from "flagsmith";

export function pricingPage() {
  if (flagsmith.hasFeature("beta_search")) {
    enableSearch();
  }
  // A/B test "Annual vs monthly plan first" (Flagsmith Experimentation)
  if (flagsmith.getExperimentFlag("pricing_experiment").value === "annual_first") {
    return renderPlans(["annual", "monthly"]);
  } else {
    return renderPlans(["monthly", "annual"]);
  }
}

export function onCheckoutClick() {
  flagsmith.trackEvent("checkout_started");
}
