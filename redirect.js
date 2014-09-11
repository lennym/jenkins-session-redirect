if (location.href.indexOf('jenkins') > -1 && $('h1:contains("Access Denied")').length && $('p.error:contains("is missing the Overall/Read permission")').length) {
    location.href = '/login';
}