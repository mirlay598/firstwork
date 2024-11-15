let ball = document.querySelector('.ball')
let dot = document.querySelectorAll('.dot')
let ballActive = false

ball.addEventListener('click', function click(){
    ball.style.filter = 'drop-shadow(gray -11px 5px 5px)'
    ballActive = true
    for(let i = 0;i < dot.length;i++){
        dot[i].style.backgroundColor = 'rgba(127, 255, 212, 0.273)'
    }
})
for(let i = 0;i < dot.length;i++){
    dot[i].addEventListener('click', function click(){
        if (ballActive == true){
            dot[i].style.backgroundColor = 'aqua'
            for(let i = 0;i < dot.length;i++){
                dot[i].style.display = 'none'
            }
            if (i == 0){
                ball.style.left = '500px'
                ball.style.top = '100px'
            }
            if (i == 1){
                ball.style.left = '500px'
                ball.style.top = '400px'
            }
            if (i == 2){
                ball.style.left = '1300px'
                ball.style.top = '100px'
            }
            if (i == 3){
                ball.style.left = '1300px'
                ball.style.top = '400px'
            }
            if (i == 4){
                ball.style.left = '900px'
                ball.style.top = '100px'
            }
            if (i == 5){
                ball.style.left = '900px'
                ball.style.top = '400px'
            }
        }
        
    })
} 
