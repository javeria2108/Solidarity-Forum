'use client'

type EventFormProps = {
    userId: String
    type: "Create" | "Update"
}
//user id and type inputs
const EventForm = ({type} : EventFormProps) => {
  return (
    <div>EventForm {type}</div>
  )
}

export default EventForm