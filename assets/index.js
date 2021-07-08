let lock = false;

function topFunction() {
    let x = document.getElementsByClassName("tab");  // 找到元素
    for (let i = 0; i < x.length; i++) {
        x[i].scrollTo(0, 0);
    }
    return false;
}

function select(t) {
    if (!lock) {
        const ele = document.querySelector(".select");
        if (!ele) t.classList.add('select');
        else ele.classList.remove('select');
        topFunction();
    }
}

function hideIntro() {
    const intro = document.querySelector(".intro");
    intro.classList.add('out');
    setTimeout(() => {
        intro.style.display = "none"
    }, 1500);

    const out = document.querySelectorAll(".out");
    out.forEach((ele, i) => {
        setTimeout(() => {
            ele.classList.toggle('out')
        }, 200 * i + 1500)
    });
}

function tagin() {
    const ins = document.querySelectorAll(".in");
    const imgs = document.querySelectorAll(".imgin");

    ins.forEach((ele, i) => {
        setTimeout(() => {
            ele.classList.toggle('in')
        }, 200 * i)
    });

    imgs.forEach(i => {
        setTimeout(() => {
            i.classList.toggle('imgin');
        }, 2000)
    });
}

const options = {
    root: null,
    threshold: 0.9
}
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tagin();
            observer.unobserve(entry.target)
        }
    })
}, options)

observer.observe(document.querySelector(".tabs"));
