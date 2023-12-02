export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}
