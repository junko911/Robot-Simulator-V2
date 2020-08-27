document.addEventListener("DOMContentLoaded", function(){
  
  const container = document.getElementById('moves-container')
  
  const keyHandler = () => {
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') {
        renderDirection('left')
      } else if (e.key === 'ArrowRight') {
        renderDirection('right')
      } else if (e.key === 'ArrowDown') {
        renderDirection('down')
      } else if (e.key === 'ArrowUp') {
        renderDirection('up')
      } else if (e.key === 'Backspace') {
        if (container.lastChild) {
          container.lastChild.remove()
        }
      }
    })
  }
  
  const renderDirection = direction => {
    const li = document.createElement('li')
    li.textContent = direction
    container.append(li)
  }
  
  const clickHandler = () => {
    document.getElementById('move-button').addEventListener('click', e => {
      const direction = document.getElementById('moves-container')
      if (direction.childElementCount > 0) {
        const moveBySecond = setInterval(() => {
          if (direction.childElementCount > 0) {
            move(direction.firstChild.textContent)
            direction.firstChild.remove()
          } else {
            alert('Out of moves')
            clearInterval(moveBySecond)
          }
        }, 1000)
      } else {
        alert('Out of moves')
      }
    })
  }

  createGrid()
  renderBot(currentPosition)
  keyHandler()
  clickHandler()
})
