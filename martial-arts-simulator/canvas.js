
let numArr = (number) => {
    const arr = []
    for (var i = 1; i <= number; i++) {
        arr.push(i)
    }

    return arr
}
let animationNames = ['idle', 'kick', 'punch', 'block', 'forward', 'backward']
let frames = {
    idle: numArr(8),
    kick: numArr(7),
    punch: numArr(7),
    block: numArr(9),
    forward: numArr(6),
    backward: numArr(6)
}
let positionX = 50
let c = document.getElementById('my-canvas')
let ctx = c.getContext("2d");
c.style.background = "url('images/background.jpg')"
c.style.backgroundSize = "900px 450px"

let loadImage = (src, callback) => {
    let img = document.createElement('img')
    img.onload = () => callback(img)
    img.src = src
}


let imagePath = (animation, frameNumber) => {
    return `images/${animation}/${frameNumber}.png`
}

let loadImages = (callback) => {
    let images = { idle: [], kick: [], punch: [], block: [], forward: [], backward: [] }
    let imagesToLoad = 0
    animationNames.forEach(animation => {
        let animationFrames = frames[animation]
        imagesToLoad = imagesToLoad + animationFrames.length

        animationFrames.forEach((frame) => {
            let path = imagePath(animation, frame);
            loadImage(path, (image) => {
                images[animation][frame - 1] = image
                imagesToLoad = imagesToLoad - 1;
                if (imagesToLoad === 0) {
                    callback(images)
                }
            })
        })
    })

}


let animate = (ctx, images, animation, callback) => {
    images[animation].forEach((image, index) => {
        setTimeout(() => {
            ctx.clearRect(0, 0, c.width, c.height)
            ctx.drawImage(image, positionX, 100, 350, 350)
            if (animation === 'forward' && positionX < 790) positionX = positionX + 8
            else if (animation === 'backward' && positionX > 8) positionX = positionX - 8
        }, index * 90)
    })
    setTimeout(callback, images[animation].length * 90)
}

loadImages((images) => {
    let queuedAnimations = []
    let aux = () => {
        let selectedAnimation;
        if (queuedAnimations.length === 0) selectedAnimation = "idle"
        else selectedAnimation = queuedAnimations.shift()
        animate(ctx, images, selectedAnimation, aux)
    }
    aux()
    animationNames.forEach((ani, i) => {
        if (i !== 0)
            document.getElementById(ani).onclick = () => {
                queuedAnimations.push(ani)
            }
    })
    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowRight') queuedAnimations.push('forward')
        else if (e.key === 'ArrowLeft') queuedAnimations.push('backward')
        else if (e.key === 'a') queuedAnimations.push('kick')
        else if (e.key === 's') queuedAnimations.push('punch')
        else if (e.key === 'd') queuedAnimations.push('block')
    })

})