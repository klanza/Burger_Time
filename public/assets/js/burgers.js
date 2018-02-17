// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $('.change-devoured').on('click', function(event) {
        let id = $(this).data('id');
        let newDevoured = $(this).data('newdevoured');
        console.log(newDevoured);
        let newDevouredState = {
            devoured: newDevoured,
        };
        console.log(newDevouredState);
        // Send the PUT request.
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newDevouredState,
        }).then(
            function() {
                console.log('Changed devoured status to ', newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
            );
    });

    $('.create-form').on('submit', function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            burger_name: $('#burger').val().trim(),
            devoured: $('[burger_name=devoured]:checked').val().trim(),
        };

        // Send the POST request.
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger,
        }).then(
            function() {
                console.log('created new cat');
                // Reload the page to get the updated list
                location.reload();
            }
            );
    });
});
