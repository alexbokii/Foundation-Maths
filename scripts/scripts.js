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

    // fraction(addition)
    $('#countFrAd').on('click', function(e) {
        e.preventDefault();
        // get all elements of fraction
        var firstNumerator = parseInt($('#fractionAddition .firstNumerator').val());
        var secondNumerator = parseInt($('#fractionAddition .secondNumerator').val());
        var firstDenominator = parseInt($('#fractionAddition .firstDenominator').val());
        var secondDenominator = parseInt($('#fractionAddition .secondDenominator').val());

        if(firstDenominator != secondDenominator) {
            // find common denominator
            if(firstDenominator % secondDenominator == 0) {
                var newSecondNumerator = firstDenominator / secondDenominator * secondNumerator;
                addNumeratorsAndShowResult(firstNumerator, newSecondNumerator, firstDenominator);
            }
            else if (secondDenominator % firstDenominator == 0){
                var newFirstNumerator = secondDenominator / firstDenominator * firstNumerator;
                addNumeratorsAndShowResult(newFirstNumerator, secondNumerator, secondDenominator);
            }
            else {
                var newDenominator = firstDenominator * secondDenominator;
                var newFirstNumerator = firstNumerator * secondDenominator;
                var newSecondNumerator = secondNumerator * firstDenominator;
                addNumeratorsAndShowResult(newFirstNumerator, newSecondNumerator, newDenominator);
            } 
        }
        else {
            addNumeratorsAndShowResult(firstNumerator, secondNumerator, firstDenominator);
        }

    });

    function addNumeratorsAndShowResult(num1, num2, den) {
        $('#fractionAddition .resultNumerator').val(num1 + num2);
        $('#fractionAddition .resultDenominator').val(den);
    }
});