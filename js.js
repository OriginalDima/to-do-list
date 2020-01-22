window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const btnAdd = document.querySelector('.btn-add'),
        inputAdd = document.querySelector('.input-add'),
        storageList = document.querySelector('.storage-list');

    let item,
        itemText,
        btnContainer,
        btnDelete,
        btnDone,
        arrItem = [],
        arrDone = [],
        arrDelete = [];

    btnAdd.addEventListener('click', createList);

    inputAdd.addEventListener('keypress', (event) => {
        if (event.keyCode == 13) {
            createList();
        }
    });

    function createList() {
        if (inputAdd.value == "") {
            return false;
        }

        createItemList();
        createItemText();
        ctrBtnContainer();
        createBtnDone();
        createBtnDelete();

        arrDone.forEach((i) => {
            i.addEventListener('click', doneItem);
        });

        arrDelete.forEach((i) => {
            i.addEventListener('click', deleteItem);
        });

        for (let i = 0; i < arrItem.length; i++) {
            arrItem[i].addEventListener('click', changeItem);
        }

        inputAdd.value = '';
    }

    function createItemList() {
        item = document.createElement('li');
        item.classList.add('item');
        storageList.appendChild(item);
        item.appendChild(createItemText());
        arrItem.push(itemText);
        // localStorage.setItem('storage-list', 'item');
    }

    function createItemText() {
        itemText = document.createElement('span');
        itemText.textContent = inputAdd.value;
        itemText.classList.add('item-text');
        return itemText;
    }

    function ctrBtnContainer() {
        btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');
        item.appendChild(btnContainer);
    }

    function createBtnDone() {
        btnDone = document.createElement('button');
        btnDone.classList.add('btn-done');
        btnDone.textContent = "done";
        btnContainer.appendChild(btnDone);
        arrDone.push(btnDone);
    }

    function createBtnDelete() {
        btnDelete = document.createElement('button');
        btnDelete.classList.add('btn-delete');
        btnDelete.textContent = "delete";
        btnContainer.appendChild(btnDelete);
        arrDelete.push(btnDelete);
    }

    function doneItem() {
        this.closest('li').classList.add('item-done');
        this.style.display = 'none';
    }

    function deleteItem() {
        this.closest('li').remove();
    }

    function changeItem() {
        this.textContent = prompt("", "");
    }
});