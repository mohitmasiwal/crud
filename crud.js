function handleSubmit(event) {
    event.preventDefault();
    
    let price = document.getElementById("price").value;
    let productName = document.getElementById("productName").value;

    let obj = { price, productName };

    axios.post("https://crudcrud.com/api/44af3b836dc94c6d88c158028d2e2392/prisedetail", obj)
        .then((res) => {
            console.log(res);
            getuser();  
        })
        .catch((err) => console.log(err));
}

function getuser() {
    axios.get("https://crudcrud.com/api/44af3b836dc94c6d88c158028d2e2392/prisedetail")
        .then((res) => {
            display(res.data);
        })
        .catch((err) => console.log(err));
}

function display(users) {
    let list = document.getElementById("list");
    list.innerHTML = "";  

    users.forEach(ele => {
        let listitem = document.createElement("li");
        let del = document.createElement("button");

        del.innerHTML = "Delete Product";
        del.addEventListener("click", () => {
            deleteproduct(ele._id);
        });

        listitem.innerHTML = `Price: ${ele.price}, Product: ${ele.productName}`;
        listitem.appendChild(del);   
        list.appendChild(listitem);
    });
}

function deleteproduct(id) {
    axios.delete(`https://crudcrud.com/api/44af3b836dc94c6d88c158028d2e2392/prisedetail/${id}`)
        .then(() => getuser())  // ✅ Fix: Fetch updated list after deletion
        .catch(err => console.log(err));
}

 
window.onload = getuser;
