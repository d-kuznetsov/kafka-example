document.addEventListener("DOMContentLoaded", function () {
  const orderTextarea = document.querySelector("#order-textarea");
  const updateButton = document.querySelector("#update-button");

  updateButton.addEventListener("click", function () {
    fetch("/api")
      .then((response) => response.json())
      .then((orders) => {
        orderTextarea.value = getText(orders);
        M.textareaAutoResize(orderTextarea);
      });
  });
});

function getText(arr) {
  return arr.reduce((total, order) => {
    return total += Object.entries(order).reduce((total, [key, value]) => {
      return (total += `${key}: ${value}; `);
    }, "") + '\n';
  }, '')
}
