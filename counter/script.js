var count=0

function plusOne(){
    count = count + 1
    document.getElementById("count-text").innerHTML = count
}

function minusOne(){
    count = count - 1
    document.getElementById("count-text").innerHTML = count
}

document.getElementById("plus-1").addEventListener("click", plusOne)
document.getElementById("minus-1").addEventListener("click", minusOne)



