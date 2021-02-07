let canvas = document.querySelector('canvas')

canvas.style.backgroundColor = "#47494d"

imagine this to be your paintbrush
let ctx = canvas.getContext('2d')

context methods to draw stuff

--------RECTANGLES-----------//

fillRect(x, y, width, height)

ctx.fillStyle = "red"
ctx.fillRect(50, 60, 100, 200)

ctx.fillStyle = "blue"
ctx.fillRect(180, 60, 100, 200)

clearReact(x, y, width, height)
この部分を透明の四角で囲ってマスクする感じ(実際に目には見えない)
ctx.clearRect( 0, 0, 200, 200)

最初に選択したバックグラウンドを全て選択する場合
ctx.clearRect( 0, 0, canvas.width, canvas.height)

そのサイズの枠だけを表す
ctx.strokeStyle = "yellow"
ctx.strokeRect(50, 60, 100, 200)

------LINES---------//

moveTo (x, y) 
どこから始まって、どこで終わるか決めて、線をかく
ctx.beginPath()
ctx.strokeStyle = "yellow"
ctx.moveTo(100, 100)
ctx.lineTo(200, 150)
ctx.lineTo(150, 250)
ctx.lineTo(100, 100)
ctx.stroke()
ctx.closePath()
beginPathとclosePathで囲うことで中の指定した所だけ反映される（線の時はいるけど四角形や三角形などの形の時には不要）


ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.moveTo(100, 300)
ctx.lineTo(200, 450)
ctx.stroke()
ctx.closePath()


-----CIRCLES-------//

arc(x, y, radius, startAngle, EndAngle, anti?))
ctx.beginPath()
ctx.strokeStyle = "yellow"
ctx.arc(100, 100, 50, 0, 2 * Math.PI)
ctx.stroke()
ctx.closeParh()


ctx.stroke()は指定した指示を実際に書くという行動を実行するために必要
2*Math.PI　は　円の求め方　２✖パイ



------TEXT--------//

fillText(text, x, y)

ctx.font = '32px Verdana'
ctx.fillText('Hello Ironhack', 100, 100)

ctx.font = '32px Verdana'
ctx.fillText('Today lab is hard', 100, 200)


--------IMAGE--------//

let img = document.createElement('img')
img.src = "https://tinyurl.com/ironhack-pokemons/25.svg"

// drawImage(imgElement, x, y, width, height)

img.addEventListener('load', () =>{
  ctx.drawImage(img, 150, 300)
})
なんで↑↑ここで関数を使うのか謎



// activity2

let canvas = document.querySelector( 'canvas' )
// canvas.style.backgroundColor = "#e5ccc7"
let ctx = canvas.getContext('2d')

ctx.fillStyle = "red"
ctx.fillRect(50, 100, 200, 300)
ctx.strokeStyle = "black"
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "black"
ctx.moveTo(250, 100)
ctx.lineTo(450, 400)
ctx.lineTo(250, 400)
ctx.moveTo(250, 100)
ctx.fillStyle= "yellow"
ctx.stroke()
ctx.fill()
ctx.closePath()


ctx.beginPath()
ctx.fillStyle = "green"
ctx.arc(600, 200, 80, 0, Math.PI )
ctx.fill()
ctx.closePath()
