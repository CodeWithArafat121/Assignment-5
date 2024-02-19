const seatButtons = document.getElementsByClassName("seat-btn");
let count = 0;
let totalPrice = 0;
const seatLeft = document.getElementById("seat-left");
let seatLeftInnerText = parseInt(seatLeft.innerText);
for (const seatButton of seatButtons) {
  seatButton.addEventListener("click", function (e) {
    if (seatButton.classList.contains("bg-primaryColor")) {
      seatButton.classList.remove("bg-primaryColor", "text-white");
      seatLeftInnerText += 1;
      count -= 1;
      const selectedSeatContainer = document.getElementById(
        "selected-seat-container"
      );
      const seatBuyingInfo = selectedSeatContainer.childNodes[1];
      selectedSeatContainer.removeChild(seatBuyingInfo);
      if (count < 4) {
        enableAllButtons();
        const enterCouponInputBtn = document.getElementById("apply-btn");
        enterCouponInputBtn.setAttribute("disabled", "");
      }
      const seatPrice = document.getElementById("seat-price");
      const seatPriceText = parseInt(seatPrice.innerText);
      totalPrice -= seatPriceText;
      let grandTotal = totalPrice;
      setInnerTextById("grand-total", grandTotal);
    } else {
      seatButton.classList.add("bg-primaryColor", "text-white");
      seatLeftInnerText -= 1;
      count += 1;
      if (count >= 4) {
        alert("YOU CANT SELECT MORE THAN 4 TICKET");
      }
      const seatPrice = document.getElementById("seat-price");
      const seatPriceText = parseInt(seatPrice.innerText);
      const selectedSeatContainer = document.getElementById(
        "selected-seat-container"
      );
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.innerText = seatButton.innerText;
      const p1 = document.createElement("p");
      p1.innerText = "Economy";
      const p2 = document.createElement("p");
      p2.innerText = seatPriceText;
      div.appendChild(p);
      div.appendChild(p1);
      div.appendChild(p2);
      div.classList.add("flex", "justify-between", "w-full", "mb-4");
      selectedSeatContainer.appendChild(div);
      if (count === 4) {
        disableUnselectedButtons();
        const enterCouponInputBtn = document.getElementById("apply-btn");
        enterCouponInputBtn.removeAttribute("disabled");
      }
      totalPrice += seatPriceText;
      let grandTotal = totalPrice;
      setInnerTextById("grand-total", grandTotal);
      document
        .getElementById("apply-btn")
        .addEventListener("click", function () {
          const enterCouponInput = document.getElementById("enter-coupon");
          const enterCouponInputValue = enterCouponInput.value;
          if (count === 4 && enterCouponInputValue === "NEW15") {
            const discountAmount = (totalPrice * 15) / 100;
            grandTotal = grandTotal - discountAmount;
            setInnerTextById("grand-total", grandTotal);
            const couponInputs = document.getElementById("coupon-inputs");
            couponInputs.classList.add("hidden");
            const discountPrice = document.getElementById("discount-price");
            discountPrice.innerText = discountAmount;
            const discountPriceContainer = document.getElementById(
              "discount-price-container"
            );
            discountPriceContainer.classList.remove("hidden");
          } else if (enterCouponInputValue === "Couple 20") {
            const discountAmount = (totalPrice * 20) / 100;
            grandTotal = grandTotal - discountAmount;
            setInnerTextById("grand-total", grandTotal);
            const couponInputs = document.getElementById("coupon-inputs");
            couponInputs.classList.add("hidden");
            const discountPrice = document.getElementById("discount-price");
            discountPrice.innerText = discountAmount;
            const discountPriceContainer = document.getElementById(
              "discount-price-container"
            );
            discountPriceContainer.classList.remove("hidden");
          } else {
            alert("SORRY YOUR COUPON CODE IS INVALID");
          }
        });
      document
        .getElementById("phone-number")
        .addEventListener("keyup", function () {
          for (const seatButton of seatButtons) {
            const phoneNumber = document.getElementById("phone-number");
            const phoneNumberValue = parseInt(phoneNumber.value);
            const submitButton = document.getElementById("submit-btn");
            if (
              seatButton.classList.contains("bg-primaryColor") &&
              !isNaN(phoneNumberValue)
            ) {
              submitButton.removeAttribute("disabled");
            }
          }
        });
      document
        .getElementById("submit-btn")
        .addEventListener("click", function () {
          const phoneNumber = document.getElementById("phone-number");
          const phoneNumberValue = parseInt(phoneNumber.value);
          if (
            seatButton.classList.contains("bg-primaryColor") &&
            !isNaN(phoneNumberValue)
          ) {
            hideElementById("header");
            hideElementById("main");
            removeHideClassById("submit-pop-up");
          }
        });
    }

    setInnerTextById("seat-count", count);
    setInnerTextById("total-price", totalPrice);
    setInnerTextById("seat-left", seatLeftInnerText);
  });
}
