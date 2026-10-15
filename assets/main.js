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

// 聯絡信箱：原始碼中只存編碼字串，載入後才由 JS 組出 mailto 連結，降低被爬蟲收集的機率
(function () {
    var link = document.getElementById('contact-email');
    var encoded = link && link.getAttribute('data-e');
    if (!encoded) {
        return;
    }

    // 解碼：base64 還原後再反轉字串
    var addr = atob(encoded).split('').reverse().join('');
    link.textContent = addr;
    link.href = 'mailto:' + addr;
    link.removeAttribute('data-e');
})();
