// Object Constructer
function Product(nameValue, priceValue, categoryValue){
     this.name = nameValue;
     this.price = priceValue;
     this.category = categoryValue;
}

function registerProduct(event){
    // Prevent the browser from being refreshed
    event.preventDefault();
    
    // 1. Get the input field value
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let productCategory = document.getElementById("productCategory").value;

    // console.log(`Name: ${productName} - Price: ${productPrice} - Category: ${productCategory}`);

    // 2. Use the values
    // 2.1 Create the object
    let newProduct = new Product(productName, productPrice, productCategory);
    // console.log(newProduct);

    // 2.2 Display the product in the table
    let row = document.createElement("tr");
    row.innerHTML =`
        <td>${newProduct.name}</td>
        <td>${newProduct.price}</td> 
        <td>${newProduct.category}</td>
        <td><button class="btn btn-danger delete-btn">Delete</button></td>
    `;

    let body = document.getElementById("body");
    body.appendChild(row);

    // Delete functionality
    row.querySelector(".delete-btn").addEventListener("click", function(){

        let confirmation = confirm("Are you sure you want to delete this row?");

        if(confirmation){
        row.remove();
        }

        
    });

    // Clear the fields
     document.getElementById("productName").value = "";
     document.getElementById("productPrice").value = "";
     document.getElementById("productCategory").value = "";

}