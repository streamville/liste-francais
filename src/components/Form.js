import { useState } from 'react';

const Form = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
      alert('Please add some text')
      return 
    }
    onAdd({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
  }
  return(
    <form className='add-form' onSubmit={onSubmit} >
      <div className='form-control'>
        <label>Tasks</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
      </div>

      <div className='form-control'>
        <label>Day & Time</label>
        <input type="text" placeholder="Add Task" value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>

      <div className='form-control'>
        <label>Set Reminder</label>
        <input 
          type="checkbox" 
          checked={reminder}
          placeholder="Add Task" 
          value={reminder} 
          onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type='submit' value='Save Task' />
    </form>
  )
}

export default Form;

