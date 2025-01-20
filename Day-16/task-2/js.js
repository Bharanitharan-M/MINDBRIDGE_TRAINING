document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        alert('Save option disabled');
    }
});
