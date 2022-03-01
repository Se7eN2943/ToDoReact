const filter = (tododata, togleClass) => {
  switch (togleClass) {
    case true:
      return tododata.filter(task => task.checked === true)
    case false:
      return tododata.filter(task => task.checked === false)
    default:
      return tododata
  }
}

export default filter