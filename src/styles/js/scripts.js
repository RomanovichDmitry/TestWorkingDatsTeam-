const buttons = document.querySelectorAll(`.registration__btn-swap`);
const mailBtn = document.querySelector(`.mail-reg`);
const telBtn = document.querySelector(`.tel-reg`);
const formTel = document.querySelector(`.registration__form-tel`);
const formMail = document.querySelector(`.registration__form-mail`);


buttons.forEach((i) => {
    i.addEventListener('click', () =>{
        buttons[0].classList.remove(`registration__btn-swap--active`);
        buttons[1].classList.remove(`registration__btn-swap--active`);
        i.classList.add(`registration__btn-swap--active`);
        if(telBtn.classList.contains(`registration__btn-swap--active`)){
            formTel.style.display='block'
            formMail.style.display='none'
        } else {
            formTel.style.display='none'
            formMail.style.display='block'
        }
    })
})

let inputPhone=document.getElementById("tel");
inputPhone.oninput=()=>phoneMask(inputPhone)
function phoneMask(inputEl) {
    let patStringArr = "+7(___)___-__-__".split('');
    let arrPush = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15]
    let val = inputEl.value;
    let arr = val.replace(/\D+/g, "").split('').splice(1);
    let n;
    let ni;
    arr.forEach((s, i) => {
        n = arrPush[i];
        patStringArr[n] = s
        ni = i
    });
    arr.length < 10 ? inputEl.style.color = 'white' : inputEl.style.color = 'white';
    inputEl.value = patStringArr.join('');
    n ? inputEl.setSelectionRange(n + 1, n + 1) : inputEl.setSelectionRange(17, 17)
}


