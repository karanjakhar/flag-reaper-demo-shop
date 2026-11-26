import flagsmith from "flagsmith";

export function pricingPage() {
  const variant = flagsmith.getValue("pricing_experiment"); // A/B test, still running
  if (flagsmith.hasFeature("beta_search")) {
    enableSearch();
  }
  return variant === "annual_first" ? annualFirst() : monthlyFirst();
}
