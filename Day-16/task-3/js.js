document.addEventListener('keydown', function(e) {
    console.log(e)
    if (e.key==='Q' && e.ctrlKey && e.shiftKey) {
        alert('Click ok to close the window')
        window.close();
    }
});