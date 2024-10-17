export function monthsSinceMarch2024(): string {
 const march2024 = new Date(2024, 2, 1); // March is month index 2 (0-based)
 const now = new Date();

 let monthsDifference = (now.getFullYear() - march2024.getFullYear()) * 12 + (now.getMonth() - march2024.getMonth());

 let years = Math.floor(monthsDifference / 12);
 let months = monthsDifference % 12;

 if (years > 0) {
  return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
 } else {
  return `${months} month${months > 1 ? 's' : ''}`;
 }
}