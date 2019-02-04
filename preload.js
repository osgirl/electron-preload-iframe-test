
console.log('LOADING PRELOAD')
if (window !== top) {
    console.log('PRELOAD IN IFRAME')
    // alert('Preload loaded in iframe')

    window.addEventListener('load', () => {
        document.body.innerHTML += '<h1>PRELOAD IS WORKING</h1>'
    })

}