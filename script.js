const closeNav = () => {
    let b = document.getElementById('collapsibleNavbar')
    b.classList.remove('show')
  };

function toggleIcon(expandIconPlus, expandIconMinus, isOpen) {
    if (isOpen) {
        expandIconPlus.style.display = 'none';
        expandIconMinus.style.display = 'block';
    } else {
        expandIconPlus.style.display = 'block';
        expandIconMinus.style.display = 'none';
    }
}

function createAccordion(el) {
    let animation = null;
    let isClosing = false;
    let isExpanding = false;
    const summary = el.querySelector('summary');
    const content = el.querySelector('.faq-content');
    const expandIconPlus = summary.querySelector('.icon-tabler-circle-plus');
    const expandIconMinus = summary.querySelector('.icon-tabler-circle-minus');

    function onClick(e) {
        e.preventDefault();
        el.style.overflow = 'hidden';
        if (isClosing || !el.open) {
            open();
        } else if (isExpanding || el.open) {
            shrink();
        }
    }

    function shrink() {
        isClosing = true;
        const startHeight = `${el.offsetHeight}px`;
        const endHeight = `${summary.offsetHeight}px`;
        if (animation) {
            animation.cancel();
        }
        animation = el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });
        animation.onfinish = () => {
            toggleIcon(expandIconPlus, expandIconMinus, false);
            onAnimationFinish(false);
        };
        animation.oncancel = () => {
            toggleIcon(expandIconPlus, expandIconMinus, false);
            isClosing = false;
        };
    }

    function open() {
        el.style.height = `${el.offsetHeight}px`;
        el.open = true;
        window.requestAnimationFrame(expand);
    }

    function expand() {
        isExpanding = true;
        const startHeight = `${el.offsetHeight}px`;
        const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;
        if (animation) {
            animation.cancel();
        }
        animation = el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 350,
            easing: 'ease-out'
        });
        animation.onfinish = () => {
            toggleIcon(expandIconPlus, expandIconMinus, true);
            onAnimationFinish(true);
        };
        animation.oncancel = () => {
            toggleIcon(expandIconPlus, expandIconMinus, true);
            isExpanding = false;
        };
    }

    function onAnimationFinish(open) {
        el.open = open;
        animation = null;
        isClosing = false;
        isExpanding = false;
        el.style.height = el.style.overflow = '';
    }

    summary.addEventListener('click', onClick);
}

document.querySelectorAll('details').forEach(createAccordion);


let year = document.getElementById('year');

let fullYear = new Date().getFullYear();

year.innerHTML = fullYear;


