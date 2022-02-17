let message 
let encryptedText 
let newElement
let buttonEncrypt = document.getElementById("encrypt_btn");
let resultElement;
let flag;

buttonEncrypt.addEventListener("click", function(event) {
    event.preventDefault()
    let result = "";
    message = document.getElementById("text").value;
    encryptedText = document.getElementById("msg_enc_dec")
    newElement = document.createElement("h4") 

    for (let index = 0; index < message.length; index++) {
        
        if (message.charAt(index) === "a" || message.charAt(index) === "b" || message.charAt(index) === "c" || message.charAt(index) === "d" || message.charAt(index) === "e" || message.charAt(index) === "f" || message.charAt(index) === "g" || message.charAt(index) === "h" || message.charAt(index) === "i" || message.charAt(index) === "j" || message.charAt(index) === "k" || message.charAt(index) === "l" || message.charAt(index) === "m" || message.charAt(index) === "n" || message.charAt(index) === "ñ" || message.charAt(index) === "o" || message.charAt(index) === "p" || message.charAt(index) === "q" || message.charAt(index) === "r" || message.charAt(index) === "s" || message.charAt(index) === "t" || message.charAt(index) === "u" || message.charAt(index) === "v" || message.charAt(index) === "w" || message.charAt(index) === "x" || message.charAt(index) === "y" || message.charAt(index) === "z") {
            // console.log(flag);
            flag = true
            // console.log(flag);
            // console.log("debug del if"); // Debug
            // console.log(message.charAt(index)); // Debug
        } else {
            flag = false
            break
        }
        
    }
    // console.log(flag); // Debug

    if (flag) {
        for (let index = 0; index < message.length+1; index++) {
            // console.log(result) Debug
            switch (message.charAt(index)) {
                case "e":
                    result += "enter"
                    break;
                case "i":
                    result += "imes"
                    break;
                case "a":
                    result += "ai"
                    break;
                case "o":
                    result += "ober"
                    break;
                case "u":
                    result += "ufat"
                    break;
                default:
                    result += message.charAt(index)
                    break;
            }
            
        }

        console.log(result)

        resultElement = document.createElement("div");
        resultElement.textContent = result

        console.log(newElement)
        //encryptedText.appendChild(newElement)
        encryptedText.replaceChildren(resultElement)

        return result

    } else {
        alert("El texto ingresado no cumple con los requisitos. Vuelva a intentarlo.")
    }

    

    
})

let buttonDecrypt = document.getElementById("decrypt_btn");

buttonDecrypt.addEventListener("click", function(event) {
    event.preventDefault()
    let result = "";
    message = document.getElementById("text").value;
    decryptedText = document.getElementById("msg_enc_dec")
    newElement = document.createElement("h4")

    for (let index = 0; index < message.length; index++) {
        
        if (message.charAt(index) === "a" || message.charAt(index) === "b" || message.charAt(index) === "c" || message.charAt(index) === "d" || message.charAt(index) === "e" || message.charAt(index) === "f" || message.charAt(index) === "g" || message.charAt(index) === "h" || message.charAt(index) === "i" || message.charAt(index) === "j" || message.charAt(index) === "k" || message.charAt(index) === "l" || message.charAt(index) === "m" || message.charAt(index) === "n" || message.charAt(index) === "ñ" || message.charAt(index) === "o" || message.charAt(index) === "p" || message.charAt(index) === "q" || message.charAt(index) === "r" || message.charAt(index) === "s" || message.charAt(index) === "t" || message.charAt(index) === "u" || message.charAt(index) === "v" || message.charAt(index) === "w" || message.charAt(index) === "x" || message.charAt(index) === "y" || message.charAt(index) === "z") {
            // console.log(flag);
            flag = true
            // console.log(flag);
            // console.log("debug del if"); // Debug
            // console.log(message.charAt(index)); // Debug
        } else {
            flag = false
            break
        }
        
    }

    if (flag) {

        for (let index = 0; index < message.length+1; index++) {
            // console.log(result) Debug
            result += message.charAt(index)
            switch (message.charAt(index)) {
                case "e": //enter
                    if (message.charAt(index+1) === "n" && message.charAt(index+2) === "t" && message.charAt(index+3) === "e" && message.charAt(index+4) === "r" ) {
                        index += 4
                    }
                    break;
                case "i": //imes
                    if (message.charAt(index+1) === "m" && message.charAt(index+2) === "e" && message.charAt(index+3) === "s") {
                        index += 3
                    }
                    break;
                case "a": //ai
                    if (message.charAt(index+1) === "i") {
                        index += 1
                    }
                    break;
                case "o": //ober
                    if (message.charAt(index+1) === "b" && message.charAt(index+2) === "e" && message.charAt(index+3) === "r") {
                        index += 3
                    }
                    break;
                case "u": //ufat
                    if (message.charAt(index+1) === "f" && message.charAt(index+2) === "a" && message.charAt(index+3) === "t") {
                        index += 3
                    }
                    break;
                default:
                    break;
            }
            
        }

        resultElement = document.createElement("div");
        resultElement.textContent = result

        console.log(newElement)
        decryptedText.replaceChildren(resultElement)

    } else {
        alert("El texto ingresado no cumple con los requisitos. Vuelva a intentarlo.")
    }

    



})