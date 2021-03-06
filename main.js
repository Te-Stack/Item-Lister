var form = document.getElementById('addForm')
var itemlist = document.getElementById('items')
var filter = document.getElementById('filter')

//form submit event
form.addEventListener('submit',addItem)

//delete event 
itemlist.addEventListener('click',removeItem)
//filter event
filter.addEventListener('keyup',filterItems)

//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value

    //Create new li element 
    var li = document.createElement('li')
    //Add Class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem))

    //create del button
    var deleteBtn = document.createElement('button')

    //add classes to button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    //Append textnode
    deleteBtn.appendChild(document.createTextNode('X'))

    //Append button to li
    li.appendChild(deleteBtn)

    itemlist.appendChild(li)
}

//remove item

function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li)
        }
    }
}


//filter Items

function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    
    //Get list
    var items = itemlist.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }
        else{
            item.style.display = "none"
        }
    })
}