import React, { useState } from "react";

function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState(null);

  const handleCalculate = () => {
    if (price && discount) {
      const discountedPrice = price - (price * discount) / 100;
      setFinalPrice(discountedPrice.toFixed(2)); // 2 decimal places
    } else {
      alert("Please enter both price and discount percentage.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center", fontFamily: "Arial" }}>
      <h2>Discount Calculator</h2>
      <input
        type="number"
        placeholder="Enter original price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ margin: "10px 0", padding: "8px", width: "100%" }}
      />
      <input
        type="number"
        placeholder="Enter discount %"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        style={{ margin: "10px 0", padding: "8px", width: "100%" }}
      />
      <button
        onClick={handleCalculate}
        style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}
      >
        Calculate
      </button>

      {finalPrice !== null && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <strong>Discounted Price: ${finalPrice}</strong>
        </div>
      )}
    </div>
  );
}

export default DiscountCalculator;
