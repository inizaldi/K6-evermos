import http from "k6/http";
export const options = {
  scenarios: {
    shared_iter_scenario: {
      executor: "shared-iterations",
      vus: 100,
      iterations: 200,
      startTime: "0s",
    },
    per_vu_scenario: {
      executor: "per-vu-iterations",
      vus: 100,
      iterations: 30,
      startTime: "30s",
    },
  },
};
export default function () {
  http.get("https://test.k6.io/");
}
