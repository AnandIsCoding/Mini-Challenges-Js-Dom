let telephone = document.querySelector('#telephone');

telephone.addEventListener('input', () => {
    let inputValue = telephone.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (inputValue.length > 3) {
        telephone.value = `+(${inputValue.substring(0, 3)}) ${inputValue.substring(3)}`;
    } else {
        telephone.value = `+(${inputValue}`;
    }
});
