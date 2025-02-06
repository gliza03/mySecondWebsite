$(document).ready(function () {

    $('#calculate').click(function () {

        const hours = parseFloat($('#hours').val());
        const rate = parseFloat($('#rate').val());
        const hoursError = $('#hours-error');

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            hoursError.show();
            $('#total').val('');
            return;
        }

        // Hide error if input is valid
        hoursError.hide();

        // Calculate and display total
        const total = hours * rate;
        $('#total').val(total.toFixed(2));
    });

    // Hide error message when user starts typing
    $('#hours').on('input', function () {
        $('#hours-error').hide();
    });
});