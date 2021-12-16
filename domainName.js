function domainName(url){
    let re = /[A-Z\d-]+./i
    return url.replace(/www|http|https/ig,'').match(re)[0].replace(/\/|\./g,'')
}
console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
console.log(domainName("https://www.obv7qwic73muzxrt.jp/"))
console.log(domainName("212w7t2bjau0vqmsoz4tn9.io"))

// , "google");