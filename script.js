document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let user = document.getElementById("username").value.trim();
            let pass = document.getElementById("password").value.trim();
            if (user && pass) {
                window.location.href = "event.html";
            } else {
                document.getElementById("loginMessage").textContent = "Please enter both fields!";
            }
        });
    }
    const addEventBtn = document.getElementById("addEventBtn");
    if (addEventBtn) {
        addEventBtn.addEventListener("click", function () {
            const name = document.getElementById("eventName").value.trim();
            const date = document.getElementById("eventDate").value;
            const desc = document.getElementById("eventDescription").value.trim();
            if (name && date) {
                const list = document.getElementById("eventList");
                const item = document.createElement("li");
                item.textContent = `${name} - ${date} (${desc})`;
                list.appendChild(item);
                document.getElementById("eventName").value = "";
                document.getElementById("eventDate").value = "";
                document.getElementById("eventDescription").value = "";
            } else {
                alert("Please fill in Event Name and Date.");
            }
        });
    }
    const bankForm = document.getElementById("bankForm");
    if (bankForm) {
        bankForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let acc = document.getElementById("account").value.trim();
            let amt = parseFloat(document.getElementById("amount").value);
            const msg = document.getElementById("bankMessage");
            if (!acc || isNaN(amt) || amt <= 0) {
                msg.className = "error";
                msg.textContent = "Please enter valid account and amount.";
                return;
            }
            msg.className = "success";
            msg.textContent = `₹${amt} transferred to Account ${acc} successfully!`;
            bankForm.reset();
        });
    }
});
