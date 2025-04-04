function handleSubmit(event) {
    event.preventDefault();
    
    let price = parseFloat(document.getElementById("price").value);  
    let productName = document.getElementById("productName").value;
    let obj = { price, productName };

    axios.post("https://crudcrud.com/api/2edf6c442bf449208ab7831b144d45fd/prisedetail", obj)
        .then((res) => {
            getuser();   
        })
        .catch((err) => console.log(err));
}

 async function getuser() {

try{
    let data = await axios.get(" https://crudcrud.com/api/2edf6c442bf449208ab7831b144d45fd/prisedetail")
    display(data.data);
}catch(err){
    console.log(err);
    
}
 }

function display(users) {
    let list = document.getElementById("list");
    list.innerHTML = "";  

    users.forEach(ele => {
        let listitem = document.createElement("li");
        let del = document.createElement("button");

        del.innerHTML = "Delete Product";
        del.addEventListener("click", () => {
            deleteproduct(ele._id, ele.price);   
        });

        listitem.innerHTML = `Price: ${ele.price}, Product: ${ele.productName}`;
        listitem.appendChild(del);   
        list.appendChild(listitem);
    });
}

function deleteproduct(id, price) {
    axios.delete(` https://crudcrud.com/api/2edf6c442bf449208ab7831b144d45fd/prisedetail/${id}`)
        .then(() => {
            getuser();   
        })
        .catch(err => console.log(err));
}

function calculateTotal(users) {
    let totalValue = document.getElementById("totalValue");
    let totalPrice = users.reduce((sum, item) => sum + parseFloat(item.price), 0);  
    totalValue.innerHTML = `Total Price: ${totalPrice}`;
}

 
window.onload = getuser;
