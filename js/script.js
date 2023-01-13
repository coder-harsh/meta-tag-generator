function metadata() {
    if (meta_form.meta_name.value == "") {
        alert("Sorry, Please enter required value");
    }
    else {
        let name = document.meta_form.meta_name.value;
        let disc = document.meta_form.meta_disc.value;
        let key = document.meta_form.meta_key.value;
        let auth = document.meta_form.meta_author.value;
        let url = document.meta_form.meta_url.value;
        let img = document.meta_form.metaimg_url.value;
        let refresh = document.meta_form.meta_refreshsec.value;
        let revisit = document.meta_form.meta_enginevisit.value;
        document.meta_form.result.value = `<meta name="title" content="${name}">` + "\n" + `<meta name="description" content="${disc}">` + "\n" + `<meta name="keywords" content="${key}">` + "\n" + `<meta name="author" content="${auth}">` + "\n" + `<meta property="og:url" content="${url}">` + "\n" + `<meta property="og:title" content="${name}">` + "\n" + `<meta property="og:description" content="${disc}">` + "\n" + `<meta property="og:image" itemprop="image" content="${img}">` + "\n" + `<meta http-equiv="refresh" content="${refresh}">` + "\n" + `<meta name="revisit-after" content="${revisit}days">` + "\n" + `<meta property="og:type" content="website">` + "\n" + `<meta name="robots" content="index,follow">`;
    }
}