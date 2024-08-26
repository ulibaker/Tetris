//CANVAS
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const BLOCK_SIZE = 20
const BOARD_WIDTH = 14
const BOARD_HEIGHT = 30

canvas.width = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

context.scale(BLOCK_SIZE, BLOCK_SIZE)

//GAME LOOP
function update () {
	console.log('hola update')
	draw()
	window.requestAnimationFrame(update)
}

function draw () {
	console.log('hola draw')
	context.fillStyle = '#000'
	context.fillRect(0, 0, canvas.width, canvas.height)
}
console.log('hola')
update()