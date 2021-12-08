var App = function() {
    this.listItems = []




    this.init = function() {
        $('#add-form').submit(this.addItemHandler.bind(this))
        $('#delete_all_item').click(this.cleanAllItem.bind(this))
        this.getList()
        this.renderItems();
    }

    this.saveList = function() {
        localStorage.setItem('list', JSON.stringify(this.listItems));
    }
    this.getList = function() {
        var listAsText = localStorage.getItem('list')
        if (listAsText) { this.listItems = JSON.parse(listAsText) }

    }

    this.cleanAllItem = function() {

        if (window.confirm("Do you really want delet all?")) {
            this.listItems = [];
            this.renderItems();
        }

    }

    this.addItemHandler = function(event) {
        event.preventDefault();
        var addInput = $('#add_list_item').val
        console.log('aWDWASDAD ' + addInput)
        var newItem = addInput.val;
        console.log(this.cupyValidator(newItem))
        if (this.cupyValidator(newItem) > 0) {
            alert('Problem')
        } else {
            console.log(this.cupyValidator(newItem))
            this.listItems.push({ title: newItem, isDone: false })
            addInput.val('')
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

        var listContainer = $('#list-container').empty()
        console.log(listContainer)
        var self = this;


        if (this.listItems.length) {
            console.log(this.listItems);
            this.listItems.forEach(function(item) {
                console.log(item);
                var newListElement = $('<li></li>');;
                var newListElementTitle = $('<span></span>');
                var newListElementRemove = $('<a></a>');

                newListElement.addClass(['list-group-item', 'd-flex', 'justify-content-between']);

                if (item.isDone) {
                    newListElement.addClass('done');
                }
                console.log(item.title)
                newListElementTitle.text(item.title);

                newListElementRemove.text('Remove');
                newListElementRemove.addClass('text-danger');
                newListElementRemove.attr("href", "#")
                newListElementRemove.click(self.removeItem.bind(self, item.title))
                newListElementTitle.click(self.setIsDone.bind(self, item.title))

                newListElement.append(newListElementTitle);
                newListElement.append(newListElementRemove);

                listContainer.append(newListElement);
            })

        } else {
            listContainer.innerHTML = '<div class="text-center text-muted my-2">- Ther is no items -</div>'
        }
        this.updateCounter()
        this.saveList()


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
    this.setIsDone = function(title, event) {
        event.preventDefault();
        console.log(this.isDone)
        this.listItems.forEach(item => {
            console.log(item.isDone)
            console.log(title)
            if (item.title === title) {
                item.isDone ? item.isDone = false : item.isDone = true;
            }
        })
        this.renderItems()


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