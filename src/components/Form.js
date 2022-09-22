import { useState } from "react"

function Form() {
  const [lastName, setLastName] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value.toUpperCase())}
          // const element = document.querySel...
          // element.addEventListener('change', callback)
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
        />
      </div>
      <button type="submit">Submit</button>

      <hr/>
      {JSON.stringify({ lastName}) ?? "leer" /** fallback operator - nullish coalescence*/} 
    </form>
  )
}

export default Form
