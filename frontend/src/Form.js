import React, { useRef, useState } from 'react'

const Form = props => {
  const [text, setText] = useState(props.text)
  const form = useRef(null)

  const handleSubmit = e => {
    setText()
    const data = new FormData(form.current)
    fetch("http://localhost:5000/api/v1/posts/post", {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: data
    })
    .then(res => res.json())
    .then(json => setText(json.text))
    e.preventDefault();
  }
  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <label>
          Text 
          <input type="text" 
                  name="text"
                  defaultValue={text} />
        </label>
        <input type="submit" name="submit" />
      </form>
    </div>
  );
}

export default Form;