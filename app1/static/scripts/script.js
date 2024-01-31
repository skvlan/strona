const buttonElem = document.querySelector('.contactus_6');
const modalElem = document.querySelector('.modal_main');

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out; 
`;


const closeModal = event => {
    const target = event.target;

    if (target === modalElem) {
        modalElem.style.visibility = 'hidden';
        modalElem.style.opacity = 0;
    }
};

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};


buttonElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);