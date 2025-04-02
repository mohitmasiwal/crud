function handleSubmit(event) {
    event.preventDefault()
    let form = event.target.value;
    let price = document.getElementById("price").value;
    let productName = document.getElementById("productName").value;

    let obj = { price, productName }

    axios.post("https://crudcrud.com/api/44af3b836dc94c6d88c158028d2e2392/prisedetail", obj)
        .then((res) => {
            console.log(res);
            
            getuser() 
        })
        .catch((err) => {
            console.log(err);

        })
     
}


function getuser() {
    axios.get("https://crudcrud.com/api/44af3b836dc94c6d88c158028d2e2392/prisedetail")
        .then((res) => {
            display(res.data);

        })
        .catch((err) => {
            console.log(err);

        })

}

function display(users) {

    let list = document.getElementById("list")

    users.forEach(ele => {
        let listitem = document.createElement("li")
        listitem.innerHTML = ` prise :${ele.price} product: ${ele.productName}`
        list.appendChild(listitem)
    });



}
window.onload = getuser;