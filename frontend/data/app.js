let itemList = document.getElementById('items');
let refreshButton = document.getElementById('refreshButton');

const url = 'http://localhost:3000/items';

const addItem = function (item){
    var itemElement = document.createElement('li');
    itemElement.appendChild(document.createTextNode(item));
    itemList.appendChild(itemElement);
}

const updateItemList = function (){
    axios.get(url).then(response =>{
        const items = response.data.items;
        console.log("Items");
        console.log(items);
        itemList.innerHTML = "";
        items.forEach(item => addItem(item));
    }).catch( err => console.error(err));
}

refreshButton.addEventListener('click', updateItemList);