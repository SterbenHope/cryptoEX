let select = function () {
    let selectHeader = document.querySelectorAll('.select_head');
    let selectItem = document.querySelectorAll('.select_item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToogle)
    });

    selectItem.forEach(item=>{
        item.addEventListener('click', selectChoose)
    });

    function selectToogle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
        currentText = this.closest('.select').querySelector('.select_current');
        currentText.innerText = text;
    }
};

select();

let select1 = function () {
    let selectHeader1 = document.querySelectorAll('.select_head1');
    let selectItem1 = document.querySelectorAll('.select_item1');

    selectHeader1.forEach(item=>{
        item.addEventListener('click', selectToogle1)
    });

    selectItem1.forEach(item=>{
        item.addEventListener('click', selectChoose1)
    });

    function selectToogle1() {
        this.parentElement.classList.toggle('is-active1');
    }

    function selectChoose1() {
        let text1 = this.innerText,
        currentText1 = this.closest('.vibor').querySelector('.select_current1');
        currentText1.innerText = text1;
    }
};

select1();