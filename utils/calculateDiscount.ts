export default function calculateDiscount(price: number, discount: number): number {
  if (price < 0) throw new Error("Price must be non-negative");
  if (discount < 0 || discount > 100) throw new Error("Discount must be between 0 and 100");

  const discountedPrice = price - (price * discount) / 100;
  return Math.round(discountedPrice * 100) / 100;
}
