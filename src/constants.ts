export const RESTAURANTS = [
  { id: "POMO", label: "פומו" },
  { id: "CAPRI_ITALIA", label: "קאפרי איטליה" },
  { id: "BAR_ITALIA_LAGOON", label: "בר איטליה לגון" },
  { id: "MILANO_BAKERY", label: "מילאנו בייקרי" },
  { id: "CAFE_NAPO", label: "קפה נאפו" },
] as const;

export function getRestaurantLabel(id: string): string {
  return RESTAURANTS.find((r) => r.id === id)?.label || id;
}

export const UPLOAD_FUNCTION_URL =
  "https://europe-west1-milano-os-core.cloudfunctions.net/scannerUpload";
