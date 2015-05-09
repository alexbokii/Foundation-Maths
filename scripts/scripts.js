$(function() {
    // prime numbers
    $('#isPrime .btn').on('click', function(e) {
        e.preventDefault();
        var number = $('#isPrime input').val();
        var i;
        var row = [];
        for(i = 2; i <= number; i++) {
            row.push(i);
        }
        for(var i = 0; i < row.length; i++) {
            for(var j = 0; j < row.length; j ++) {
                if (row[i] * row[j] == number) {
                    $('#isPrime output').html("<p class='bg-warning'>Number is not prime! it's a product of " + row[i] + ' and ' + row[j] + "</p>");
                    return;
                }
            }
            $('#isPrime output').html("<p class='bg-success'>Number is prime!</p>");
        }  
    });
});