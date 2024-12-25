let allcircle = document.querySelectorAll(".circle");
let allinputs = document.querySelectorAll("input");
let bar = document.querySelector("#bar");
let barprogress = 33.3; // Set numeric value for progress increment



Array.from(allcircle).forEach((element) => {
    element.addEventListener("click", () => {
        // Check if at least one input has a non-empty value
        let inputsavail = [...allinputs].some((elem) => elem.value.trim() !== "");
        if(!inputsavail){
            alert("Please fill in all input fields.");
            return; // Exit function if no input is available
        }
        if (inputsavail) {
            element.firstElementChild.style.display = "flex";

            // Get current width of the bar and increment it
            let currentWidth = parseFloat(bar.style.width) || 0; // Fallback to 0 if width is not set
            let newWidth = currentWidth + barprogress;

            // Ensure the bar width does not exceed 100%
            bar.style.width = newWidth > 100 ? "100%" : `${newWidth}%`;
           
            element.nextElementSibling.classList.add('underline')
        
        }
    });
});
