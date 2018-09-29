let total = 5000,
    time = 1,
    hourRate,
    tabLeft = document.querySelector('.tab-left'),
    tabRight = document.querySelector('.tab-right'),
    blocksBlock = document.getElementById('blocks-block'),
    pagesBlock = document.getElementById('pages-block'),
    counterBlock = document.getElementById('counter-block'),
    counterPages = document.getElementById('counter-pages'),
    counterHours = document.getElementById('counter-hours'),
    counterRate = document.getElementById('counter-rate'),
    changesCheck = document.getElementById('changes-check'),
    cmsCheck = document.getElementById('changes-cms'),
    totalValue = document.getElementsByClassName('total-count')[0],
    input = document.querySelectorAll('input');



const land = 5000,
      corp = 12000,
      cms = 4000,
      blocks = 500,
      pages = 2500,
      changes = 1000;

window.addEventListener('DOMContentLoaded', function() {
    
    tabLeft.addEventListener('click', () => {
        input.forEach(function(item, i, input) {
            item.value = '';
        });
        blocksBlock.style.cssText = 'display: flex;';
        pagesBlock.style.cssText = 'display: none;';
        tabLeft.classList.add('active');
        tabRight.classList.remove('active');

        if (changesCheck.checked) {
            changesCheck.checked = false;
        }
        if (cmsCheck.checked) {
            cmsCheck.checked = false;
        }

        total = land;
        totalValue.value = total;
    });

    tabRight.addEventListener('click', () => {
        input.forEach(function(item, i, input) {
            item.value = '';
        });
        blocksBlock.style.cssText = 'display: none;';
        pagesBlock.style.cssText = 'display: flex;';
        tabLeft.classList.remove('active');
        tabRight.classList.add('active');

        if (changesCheck.checked) {
            changesCheck.checked = false;
        }
        if (cmsCheck.checked) {
            cmsCheck.checked = false;
        }

        total = corp;
        totalValue.value = total;
    });
});