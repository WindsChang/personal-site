// 行動版導覽列開關
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!toggle || !nav) {
        return;
    }

    function setOpen(open) {
        nav.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
    }

    toggle.addEventListener('click', function () {
        setOpen(!nav.classList.contains('open'));
    });

    // 點選連結後自動收合
    nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            setOpen(false);
        }
    });
})();
