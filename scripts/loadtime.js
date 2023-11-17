(function () {
        window.addEventListener('load', function () {
            let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
            let footer = document.querySelector('footer');
            // footer.innerHTML = 'Page load time: ' + loadTime + 'ms';

            let loadTimeElement = document.createElement('div')
            let text = document.createTextNode('Page load time: ' + loadTime + 'ms')
            loadTimeElement.appendChild(text)
            footer.appendChild(loadTimeElement)
        });
    }
)
();


// alert(document.location)

// window.document.write("")

// str = document.location;
// alert(str)

// function GFG_FUN() {
//     str = str.split("/");
//
//     alert(str[str.length - 1]);
// }
//
// GFG_FUN();

// alert(str.split("/"))


// window.document.write(str[str.length - 1]);


// window.document.write(document.location)
// window.document.write(document.location.split('/')[-1])

