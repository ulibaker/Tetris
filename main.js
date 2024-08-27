//CANVAS
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const BLOCK_SIZE = 20
const BOARD_WIDTH = 15
const BOARD_HEIGHT = 32

canvas.width = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

context.scale(BLOCK_SIZE, BLOCK_SIZE)

//BOARD
const board = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

//FIRST PIECE
let color = getRandomColor()
const piece = {
	position: { x: 6, y: 0 },
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
		[1]
	],
	[
		[1, 1, 1],
		[1, 1, 1],
		[1, 1, 1]
	],
	[
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 1, 0],
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[1, 1],
		[0, 1]
	],
	[
		[0, 0, 0],
		[1, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 1]
	],
	[
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 0]
	],
	[
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 1]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[1, 1, 1]
	],
	[
		[0, 0, 0],
		[1, 0, 0],
		[1, 1, 1]
	],
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[1, 0, 0]
	],
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[1, 0, 0, 0]
	],
]

let dropCounter = 0
let lastTime = 0
let n = 255
let points = 0
let redGB = 255

//GAME LOOP
function update(time = 0) {
	//console.log('hola update')
	const deltaTime = time - lastTime
	lastTime = time
	dropCounter += deltaTime

	if(dropCounter > n) {
		n = n - 0.3
		redGB = n
		console.log(n)
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
				context.fillStyle = 'rgb(255,'+redGB+','+redGB+')'
				context.fillRect(x, y, 1, 1)
			}
		})
	})

	piece.shape.forEach((row, y) => {
		row.forEach((value, x) => {
			if(value === 1) {
				context.fillStyle = color
				context.fillRect(x+piece.position.x, y+piece.position.y, 1, 1)
			}
		})
	})
}
//RANDOM COLOR
function getRandomColor() {
	let newColor = ''
	let option = 0
	option =  Math.floor(Math.random() * 6)
	switch(option) {
		case 0:
			newColor = '#f0f'
		break
		case 1:
			newColor = '#0f0'
		break
		case 2:
			newColor = '#00f'
		break
		case 3:
			newColor = '#e51'
		break
		case 4:
			newColor = '#ff0'
		break
		case 5:
			newColor = '#0ff'
		break
	}
	//console.log(option)
	//console.log(newColor)
	return newColor
}

//CONTROLS
document.addEventListener('keydown', event => {
	if(event.key === 'W' || event.key === 'w') { 
		const rotated = []

		for(let i=0; i<piece.shape[0].length; i++) {
			const row = []

			for(let j=piece.shape.length-1; j>=0; j--) {
				row.push(piece.shape[j][i])
			}
			rotated.push(row)
		}
		piece.shape = rotated
	}
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
	color = getRandomColor()

	if(checkCollision()) {
		n = 255
		points = 0
		document.querySelector('.score-span').innerText = points
		window.alert(' | GAME OVER | ')
		board.forEach((row) => row.fill(0))
	}
}

//DESTROY FULL ROWS
function removeRows() {
	const rowsToRemove = []

	board.forEach((row, y) => {
		if(row.every(value => value === 1)) {
			rowsToRemove.push(y)
			n = n + 20
			points = points + 100
			document.querySelector('.score-span').innerText = points
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