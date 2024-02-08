const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const product = document.querySelectorAll(".product");

    product.forEach(item => {
        const productName = item.querySelector("h2");
        const textValue = productName.textContent || productName.innerText;
        if (textValue.toUpperCase().indexOf(searchbox) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}
