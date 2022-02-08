let message 
let encryptedText 
let newElement
let buttonEncrypt = document.getElementById("encrypt_btn");
let resultElement;

buttonEncrypt.addEventListener("click", function(event) {
    event.preventDefault()
    let result = "";
    message = document.getElementById("text").value;
    encryptedText = document.getElementById("msg_enc_dec")
    newElement = document.createElement("h4") 

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
})

