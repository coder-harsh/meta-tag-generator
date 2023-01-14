function metadata() {
    if (meta_form.meta_name.value == "" || meta_form.meta_disc.value == "" || meta_form.meta_key.value == "" || meta_form.meta_url.value == "" || meta_form.metaimg_url.value == "") {
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

        if (meta_form.meta_refreshsec.value == "" && meta_form.meta_enginevisit.value == "") {
            refresh = 3000000;
            revisit = 5;
            document.meta_form.result.value = `<meta name="title" content="${name}">` + "\n" + `<meta name="description" content="${disc}">` + "\n" + `<meta name="keywords" content="${key}">` + "\n" + `<meta name="author" content="${auth}">` + "\n" + `<meta property="og:url" content="${url}">` + "\n" + `<meta property="og:title" content="${name}">` + "\n" + `<meta property="og:description" content="${disc}">` + "\n" + `<meta property="og:image" itemprop="image" content="${img}">` + "\n" + `<meta http-equiv="refresh" content="${refresh}">` + "\n" + `<meta name="revisit-after" content="${revisit}days">` + "\n" + `<meta property="og:type" content="website">` + "\n" + `<meta name="robots" content="index,follow">`;
            document.meta_form.copybtn.value = "Copy 📋";
            document.getElementById("copy-btn").style.backgroundColor = "rgb(1, 64, 254)";
            document.getElementById("resultinp").style.display = "flex";
            document.getElementById("copy-btn").style.display = "flex";
        }
        else if (meta_form.meta_refreshsec.value == "") {
            refresh = 3000000;
            document.meta_form.result.value = `<meta name="title" content="${name}">` + "\n" + `<meta name="description" content="${disc}">` + "\n" + `<meta name="keywords" content="${key}">` + "\n" + `<meta name="author" content="${auth}">` + "\n" + `<meta property="og:url" content="${url}">` + "\n" + `<meta property="og:title" content="${name}">` + "\n" + `<meta property="og:description" content="${disc}">` + "\n" + `<meta property="og:image" itemprop="image" content="${img}">` + "\n" + `<meta http-equiv="refresh" content="${refresh}">` + "\n" + `<meta name="revisit-after" content="${revisit}days">` + "\n" + `<meta property="og:type" content="website">` + "\n" + `<meta name="robots" content="index,follow">`;
            document.meta_form.copybtn.value = "Copy 📋";
            document.getElementById("copy-btn").style.backgroundColor = "rgb(1, 64, 254)";
            document.getElementById("resultinp").style.display = "flex";
            document.getElementById("copy-btn").style.display = "flex";
        }
        else if (meta_form.meta_enginevisit.value == "") {
            revisit = 5;
            document.meta_form.result.value = `<meta name="title" content="${name}">` + "\n" + `<meta name="description" content="${disc}">` + "\n" + `<meta name="keywords" content="${key}">` + "\n" + `<meta name="author" content="${auth}">` + "\n" + `<meta property="og:url" content="${url}">` + "\n" + `<meta property="og:title" content="${name}">` + "\n" + `<meta property="og:description" content="${disc}">` + "\n" + `<meta property="og:image" itemprop="image" content="${img}">` + "\n" + `<meta http-equiv="refresh" content="${refresh}">` + "\n" + `<meta name="revisit-after" content="${revisit}days">` + "\n" + `<meta property="og:type" content="website">` + "\n" + `<meta name="robots" content="index,follow">`;
            document.meta_form.copybtn.value = "Copy 📋";
            document.getElementById("copy-btn").style.backgroundColor = "rgb(1, 64, 254)";
            document.getElementById("resultinp").style.display = "flex";
            document.getElementById("copy-btn").style.display = "flex";
        }
        else {
            document.meta_form.result.value = `<meta name="title" content="${name}">` + "\n" + `<meta name="description" content="${disc}">` + "\n" + `<meta name="keywords" content="${key}">` + "\n" + `<meta name="author" content="${auth}">` + "\n" + `<meta property="og:url" content="${url}">` + "\n" + `<meta property="og:title" content="${name}">` + "\n" + `<meta property="og:description" content="${disc}">` + "\n" + `<meta property="og:image" itemprop="image" content="${img}">` + "\n" + `<meta http-equiv="refresh" content="${refresh}">` + "\n" + `<meta name="revisit-after" content="${revisit}days">` + "\n" + `<meta property="og:type" content="website">` + "\n" + `<meta name="robots" content="index,follow">`;
            document.meta_form.copybtn.value = "Copy 📋";
            document.getElementById("copy-btn").style.backgroundColor = "rgb(1, 64, 254)";
            document.getElementById("resultinp").style.display = "flex";
            document.getElementById("copy-btn").style.display = "flex";
        }
    }
}