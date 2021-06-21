const btnSend = document.querySelectorAll('button')[0]
const btnCancel = document.querySelectorAll('button')[1]
const form = document.querySelector('form')
const input1 = document.querySelectorAll('input')[0]
const input2 = document.querySelectorAll('input')[1]
const section = document.querySelector('section')

// 1ere fonctionnalité

btnCancel.addEventListener('click', function () {
    input1.value = ''
    input2.value = ''
})
// 2eme fonctionnalité

form.addEventListener('submit', function (evt) {
    evt.preventDefault()
 $('section').append(`<div class="card mt-3">
<div class="card-body">
    <p class="card-text">${input2.value} - ${input1.value}</p>

</div>

</div>`)
})