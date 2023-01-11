function metadata() {
    if (meta_form.meta_name.value == "") {
        alert("Sorry, Please enter required value");
    }
    else {
        document.meta_form.result.value = '<meta name="title" content="' + document.meta_form.meta_name.value + '"></meta>' + "<br>" +
            '<meta name="description" content = "' + document.meta_form.meta_disc.value + '" > ';
    }

}
