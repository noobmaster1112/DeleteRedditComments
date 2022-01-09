let interval = setInterval(() => {
    let deleteButtons = $('a.togglebutton[data-event-action="delete"]');
    if (deleteButtons.length === 0) {
        clearInterval(interval);
        if ($('.next-button > a')[0]) {
            $('.next-button > a')[0].click();
            alert('Restart script.');
        }
    } else {
        deleteButtons[0].click();
        setTimeout(() => {
            $('span.option.error.active > a.yes').click();
        }, 300);
    }
}, 1000);
