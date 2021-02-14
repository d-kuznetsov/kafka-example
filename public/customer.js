document.addEventListener("DOMContentLoaded", function () {
  const customerInput = document.querySelector("#customer-input");
  const productSelect = document.querySelector("#product-select");
  const numnerInput = document.querySelector("#number-input");
  const buyButton = document.querySelector("#buy-button");

  M.FormSelect.init(productSelect, {});

  buyButton.addEventListener("click", function () {
    sendOrder(customerInput.value, productSelect.value, numnerInput.value);
  });
});

function sendOrder(customer, product, number) {
  return fetch("/api", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer,
      product,
      number,
    }),
  });
}
