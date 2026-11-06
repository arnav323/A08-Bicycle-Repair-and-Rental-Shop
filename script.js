const rentalForm = document.getElementById("rentalForm");
if (rentalForm) {
    rentalForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const bikePrice = Number(document.getElementById("bike").value)
        const days = Number(document.getElementById("days").value);
        if (bikePrice <= 0 || days < 1 || days > 30) {

            document.getElementById("result").textContent =
                "Please enter valid rental details.";
            return;
        }
        const totalPrice = bikePrice * days;
        document.getElementById("result").textContent =
            "Your total rental price is ₹" + totalPrice;
        localStorage.setItem("lastRentalPrice", totalPrice);
    });
}
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const date = document.getElementById("date").value;
        const quantity = document.getElementById("quantity").value;
        const service = document.getElementById("service").value;
        if (
            name === "" ||
            email === "" ||
            phone.length !== 10 ||
            !/^[0-9]{10}$/.test(phone) ||
            date === "" ||
            Number(quantity) < 1 ||
            Number(quantity) > 10 ||
            service === ""
        ) {
            document.getElementById("formMessage").textContent =
                "Please enter all details correctly.";

            return;
        }
        const enquiry = {
            name: name,
            email: email,
            phone: phone,
            date: date,
            quantity: quantity,
            service: service
        };
        let enquiries = JSON.parse(
            localStorage.getItem("enquiries")
        ) || [];
        enquiries.push(enquiry);
        localStorage.setItem(
            "enquiries",
            JSON.stringify(enquiries)
        );
        document.getElementById("formMessage").textContent =
            "Thank you! Your enquiry has been saved successfully.";
        contactForm.reset();
    });
}

const rentalDate = document.getElementById("date");

if (rentalDate) {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    rentalDate.min = year + "-" + month + "-" + day;
}


if (rentalForm) {
    rentalForm.addEventListener("reset", function() {
        document.getElementById("result").textContent =
            "Your total price will appear here.";
    });
}
