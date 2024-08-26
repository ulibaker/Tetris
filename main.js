//CANVAS
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const BLOCK_SIZE = 20
const BOARD_WIDTH = 14
const BOARD_HEIGHT = 30

canvas.width = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

context.scale(BLOCK_SIZE, BLOCK_SIZE)

//BOARD
const board = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1]
]

//FIRST PIECE
const piece = {
	position: { x: 5, y: 5 },
	shape: [
		[1, 1],
		[1, 1]
	]
}

//RANDOM PIECES
const pieces = [
	[
		[1, 1],
		[1, 1]
	],
	[
		[1, 1, 1, 1]
	],
	[
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[1, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 1],
		[1, 1, 0]
	],
	[
		[1, 0, 0],
		[1, 1, 1]
	],
	[
		[1, 1, 1],
		[1, 0, 0]
	],
]

let dropCounter = 0
let lastTime = 0

//GAME LOOP
function update(time = 0) {
	//console.log('hola update')
	const deltaTime = time - lastTime
	lastTime = time
	dropCounter += deltaTime

	if(dropCounter > 500) {
		piece.position.y++
		dropCounter = 0

		if(checkCollision()) {
			piece.position.y--
			solidifyPiece()
			removeRows()
		}
	}

	draw()
	window.requestAnimationFrame(update)
}

function draw() {
	//console.log('hola draw')
	context.fillStyle = '#000'
	context.fillRect(0, 0, canvas.width, canvas.height)

	board.forEach((row, y) => {
		row.forEach((value, x) => {
			if(value === 1) {
				context.fillStyle = '#F00'
				context.fillRect(x, y, 1, 1)
			}
		})
	})

	piece.shape.forEach((row, y) => {
		row.forEach((value, x) => {
			if(value === 1) {
				context.fillStyle = '#00F'
				context.fillRect(x+piece.position.x, y+piece.position.y, 1, 1)
			}
		})
	})
}

//CONTROLS
document.addEventListener('keydown', event => {
	if(event.key === 'A' || event.key === 'a') { 
		piece.position.x--
		if(checkCollision()) {
			piece.position.x++
		}
	}
	if(event.key === 'D' || event.key === 'd') { 
		piece.position.x++
		if(checkCollision()) {
			piece.position.x--
		}
	}
	if(event.key === 'S' || event.key === 's') { 
		piece.position.y++
		if(checkCollision()) {
			piece.position.y--
			solidifyPiece()
			removeRows()
		}
	}
})

//COLLISION
function checkCollision() {
	return piece.shape.find((row, y) => {
		return row.find((value, x) => {
			return (
				value != 0 &&
				board[y + piece.position.y]?.[x + piece.position.x] != 0
			)
		})
	})
}

//SOLIDIFICATION
function solidifyPiece() {
	piece.shape.forEach((row, y) => {
		row.forEach((value, x) => {
			if(value === 1) {
				context.fillStyle = '#F00'
				board[y+piece.position.y][x+piece.position.x] = 1
			}
		})
	})

	//PIECE RESET AND GET RANDOM
	piece.position.x = 6
	piece.position.y = 0
	piece.shape = pieces[Math.floor(Math.random() * pieces.length)]
}

//DESTROY FULL ROWS
function removeRows() {
	const rowsToRemove = []

	board.forEach((row, y) => {
		if(row.every(value => value === 1)) {
			rowsToRemove.push(y)
		}
	})

	rowsToRemove.forEach(y => {
		board.splice(y, 1)
		const newRow = Array(BOARD_WIDTH).fill(0)
		board.unshift(newRow)
	})
}

//console.log('hola')
update()