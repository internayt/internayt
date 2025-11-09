window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-9QFTNE9V7B');

MailTo = function (email, subject, body) {
    var link = 'mailto:' + email;
    if (subject && subject.length > 0) {
        link += '?subject=' + escape(subject);
        if (body && body.length > 0) link += '&body=' + escape(body);
    } else if (body && body.length > 0) {
        link += '?body=' + escape(body);
    }

    if ($.browser.isMobile) {
        window.location.href = link;
    } else {
        var mailer = window.open(link, 'MailTo');
        mailer.location.href = link;
        setTimeout(() => { _mailToCheckTimeout(mailer, link); }, 5000);
    }
};

_mailToCheckTimeout = function (mailer, link) {
    if (mailer.location) {
        try {
            if (mailer.location.href === link || mailer.location.href === 'about:blank') mailer.close();
        } catch (e) { }
    }
};