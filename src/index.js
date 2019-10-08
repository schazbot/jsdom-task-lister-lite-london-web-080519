document.addEventListener("DOMContentLoaded", () => {

  const taskUl = document.querySelector("#tasks")

  const form = document.querySelector("#create-task-form")
  form.addEventListener('submit', handleFormSubmit)


  function appendTask(text) {
    let newLi = document.createElement('li')
    newLi.innerText = text
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "X"
    deleteBtn.addEventListener('click', handleRemoveLi)
    newLi.append(deleteBtn)
    taskUl.append(newLi)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    text = e.target[0].value
    appendTask(text)
    form.reset()
  }

  function handleRemoveLi(e) {
    liToRemove = e.target.parentElement
    liToRemove.remove()
  }


});
