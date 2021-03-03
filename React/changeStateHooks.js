// Change state of light in a room with button and hooks

function Room() {
  const [isLit, setLit] = React.useState(false)

  return (
    <div className="room">
      The room is {isLit ? 'lit' : 'dark'}
      <br />
      <button onClick={() => setLit(!isLit)}>
        Change
      </button>
    </div>
  )
  }