var App = function() {
    this.listItems = [{
        title: "Her first position1",
        isDone: false,
    }, {
        title: "Her first position2",
        isDone: false,
    }, {
        title: "Her first position3",
        isDone: false,
    }, {
        title: "Her first position4",
        isDone: false,
    }, {
        title: "Her first position5",
        isDone: false,
    }, {
        title: "Her first position6",
        isDone: true,
    }, ]




    this.init = function() {
        document.getElementById('add-form').onsubmit = this.addItemHandler.bind(this)
        this.renderItems();
    }





    this.addItemHandler = function(event) {
        event.preventDefault();
        var addInput = document.getElementById('add-form').getElementsByTagName('input')[0]
        var newItem = addInput.value;
        console.log(this.cupyValidator(newItem))
        if (this.cupyValidator(newItem) > 0) {
            alert('Problem')
        } else {
            console.log(this.cupyValidator(newItem))
            this.listItems.push({ title: newItem, isDone: false })
            addInput.value = ''
            this.renderItems();
        }



    }

    this.cupyValidator = function(newItem) {
        var addedItem = this.listItems.filter(function(item) {
            return item.title === newItem
        })

        return addedItem.length > 0;
    }


    this.renderItems = function() {

        var listContainer = document.getElementById('list-container')
        listContainer.innerHTML = '';

        var self = this;


        if (this.listItems.length) {
            console.log(this.listItems);
            this.listItems.forEach(function(item) {
                console.log(item);
                var newListElement = document.createElement('li');;
                var newListElementTitle = document.createElement('span');
                var newListElementRemove = document.createElement('a');

                newListElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');

                if (item.isDone) {
                    newListElement.classList.add('done');
                }
                newListElementTitle.innerHTML = item.title;

                newListElementRemove.innerHTML = 'Remove';
                newListElementRemove.classList.add('text-danger');
                newListElementRemove.href = "#";
                newListElementRemove.onclick = self.removeItem.bind(self, item.title)

                newListElement.appendChild(newListElementTitle);
                newListElement.appendChild(newListElementRemove);

                listContainer.appendChild(newListElement);
            })

        } else {
            listContainer.innerHTML = '<div class="text-center text-muted my-2">- Ther is no items -</div>'
        }
        this.updateCounter()


    }


    this.removeItem = function(title, event) {
        event.preventDefault();
        console.log(title)
        this.listItems = this.listItems.filter(function(item) {
            return item.title != title
        })
        this.renderItems()
        console.log(this.listItems)

    }

    this.updateCounter = function() {
        {
            var countAllElement = document.getElementById('count-all')
            var countDoneElement = document.getElementById('count-done')

            var doneItemsCounter = 0;
            this.listItems.forEach(function(item) {
                if (item.isDone) {
                    doneItemsCounter++
                }
            })

            countAllElement.innerHTML = this.listItems.length
            countDoneElement.innerHTML = doneItemsCounter

        }
    }











    this.init();
}


new App();
console.log(App);