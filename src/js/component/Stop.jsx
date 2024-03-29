import React, { useState } from 'react'

function Stop() {
    const [Stoping, Resuming] = useState(false);

    const handleClick = (event) => {
        Resuming(!Stoping);
    }
  return (
    <div>
      <button type="button" class="btn btn-primary mx-3" onClick={handleClick}>{Stoping ? "Resume" : "Stop"}</button>
      {Stoping && <p>funciona</p>}
    </div>
  )
}

export default Stop;
