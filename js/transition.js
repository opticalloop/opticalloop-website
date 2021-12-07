const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        console.log(entry.IntersectionRatio)
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(document.querySelector('.reveal'));