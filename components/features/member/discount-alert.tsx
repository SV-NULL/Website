import { Discount } from "@/config/discounts";

type Props = {
  discount: Discount;
};

const DiscountAlert = ({ discount }: Props) => {
  return (
    <div className="mb-6 p-4 bg-green-700 border border-green-600 rounded-lg">
      <h3 className="font-semibold text-green-100 mb-2">
        🎉 Kortingsactie actief!
      </h3>
      <p className="text-green-200">
        <strong>{discount.name}:</strong> {discount.description}
      </p>
      <p className="text-green-100 font-medium mt-1">
        Korting: {discount.amount}
      </p>
    </div>
  );
};

export default DiscountAlert;
