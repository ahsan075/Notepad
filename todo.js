let Minput = document.getElementById("input")
let Mtextarea = document.getElementById("textarea")
const Mbutton = document.getElementById("btn1")
const Cards = document.querySelector(".cards")
document.querySelector(".text").style.display = "none";

let made = document.getElementById("made")
made.addEventListener("click", function () {
    document.querySelector(".text").style.display = "";
    made.style.display = "none"
})

document.querySelector(".text").addEventListener("dblclick", function () {
    document.querySelector(".text").style.display = "none";
    made.style.display = ""
})

class store {
    constructor(itemName, comment) {
        this.createDiv(itemName, comment);
    }
    createDiv(itemName, comment) {
        let input = document.createElement("input");
        input.value ="Title : "+itemName;
        input.disabled = true;
        input.classList.add("input2");
        input.type = "text";

        let textarea = document.createElement("textarea");
        textarea.value = comment;
        textarea.disabled = true;
        textarea.classList.add("textarea2")

        let card = document.createElement("div")
        card.classList.add("card");

        let cardButton = document.createElement("div")
        cardButton.classList.add("cardbtn");

        let edit = document.createElement("i");
        edit.setAttribute("class", "fa")
        edit.setAttribute("aria-hidden", "true")
        edit.classList.add("fa-pencil-square-o");

        let remove = document.createElement("button");
        remove.innerHTML = "remove"
        remove.classList.add("btn3")

        Cards.appendChild(card)

        card.appendChild(input)
        card.appendChild(textarea)
        card.appendChild(cardButton)


        cardButton.appendChild(edit)
        cardButton.appendChild(remove)



        remove.addEventListener("click", () => this.removes(card))
        edit.addEventListener("click", function () {
            input.disabled = !input.disabled
            textarea.disabled = !textarea.disabled
            edit.innerHTML = !save.innerHTML
        })

        let btn = document.createElement("span")
        btn.classList.add("cross")
        btn.innerText = "X"
        card.appendChild(btn)
        btn.style.display = "none"

        textarea.style.display = "none"
        edit.style.display = "none"


        card.addEventListener("dblclick", function () {

            textarea.style.display = ""
            edit.style.display = ""

            card.classList.remove("card")
            card.classList.add("new")
            document.querySelector("#cards").classList.remove("cards")
            document.querySelector("#cards").classList.add("card2")

            btn.style.display = ""

            btn.addEventListener("click", function () {

                textarea.style.display = "none"
                edit.style.display = "none"

                btn.style.display = "none"
                card.classList.add("card")
                card.classList.remove("new")
                document.querySelector("#cards").classList.add("cards")
                document.querySelector("#cards").classList.remove("card2")
            })
        })
    }
    removes(store) {
        Cards.removeChild(store)
    }
}
function check() {
    if (Minput.value != "" && Mtextarea.value != "") {
        new store(Minput.value, Mtextarea.value);
        input.value = "";
        textarea.value = "";
    }
}
Mbutton.addEventListener("click", check)
