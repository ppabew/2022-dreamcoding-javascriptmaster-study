const wait = (timeToDelay) => new Promise((resolve) => {
    setTimeout(function () {
        console.log('test1')
        resolve(1);
    }, timeToDelay)
})


async function f() {
    console.log('------start-------');
    let i = await wait(1000);
    console.log(i);
    console.log('------end-------');
}


f();
