$(function() {

    function obtainFraction(num, den) {
        var result = [];
        for(var i = 0; i <= num; i++) {
            if(num % i == 0 && den % i == 0) {
                result.unshift(num / i);
                result.unshift(den / i);
            }
        }
        return result;
    }

    function addNumeratorsAndShowResult(num1, num2, den) {
        var numerator = num1 + num2;
        var obtainedFraction = obtainFraction(numerator, den);
        if(obtainedFraction.length > 0) {
            numerator = obtainedFraction[1];
            var denominator = obtainedFraction[0];
            $('#fractionAddition .resultNumerator').val(numerator);
            $('#fractionAddition .resultDenominator').val(denominator);
        }
        else {
            $('#fractionAddition .resultNumerator').val(numerator);
            $('#fractionAddition .resultDenominator').val(den);
        }
    }

    function subtractNumeratorsAndShowResult(num1, num2, den) {
        var numerator = num1 - num2;
        var obtainedFraction = obtainFraction(numerator, den);
        if(obtainedFraction.length > 0) {
            numerator = obtainedFraction[1];
            var denominator = obtainedFraction[0];
            $('#fractionSubtraction .resultNumerator').val(numerator);
            $('#fractionSubtraction .resultDenominator').val(denominator);
        }
        else {
            $('#fractionSubtraction .resultNumerator').val(numerator);
            $('#fractionSubtraction .resultDenominator').val(den);
        }
    }

    function findCommonDenominatorAndChangeNumeratorsIfNeed(firstNumerator, secondNumerator, firstDenominator, secondDenominator) {
        var fraction = {
            firstNumerator: firstNumerator,
            secondNumerator: secondNumerator,
            firstDenominator: firstDenominator,
            secondDenominator: secondDenominator,
            denominator: undefined
        }

        if(firstDenominator != secondDenominator) {
            if(firstDenominator % secondDenominator == 0) {
                fraction.secondNumerator = firstDenominator / secondDenominator * secondNumerator;
                fraction.denominator = firstDenominator;
            }
            else if (secondDenominator % firstDenominator == 0){
                fraction.firstNumerator = secondDenominator / firstDenominator * firstNumerator;
                fraction.denominator = secondDenominator;
            }
            else {
                fraction.denominator = firstDenominator * secondDenominator;
                fraction.firstNumerator = firstNumerator * secondDenominator;
                fraction.secondNumerator = secondNumerator * firstDenominator;
            } 
        }
        else {
            fraction.denominator = firstDenominator;
        }
        return fraction;
    }

    function multiplyFractionAndGetResult(firstNumerator, secondNumerator, firstDenominator, secondDenominator) {
        var numerator = firstNumerator * secondNumerator;
        var denominator = firstDenominator * secondDenominator;
        var resultOfMultiplication = obtainFraction(numerator, denominator);
        console.log(numerator, denominator, resultOfMultiplication);
        $("#fractionMultiplication .resultNumerator").val(resultOfMultiplication[1]);
        $("#fractionMultiplication .resultDenominator").val(resultOfMultiplication[0]);


    }

    // fraction(addition)
    $('#countFrAd').on('click', function(e) {
        e.preventDefault();
        var firstNumerator = parseInt($('#fractionAddition .firstNumerator').val());
        var secondNumerator = parseInt($('#fractionAddition .secondNumerator').val());
        var firstDenominator = parseInt($('#fractionAddition .firstDenominator').val());
        var secondDenominator = parseInt($('#fractionAddition .secondDenominator').val());

        var resultFraction = findCommonDenominatorAndChangeNumeratorsIfNeed(firstNumerator, secondNumerator, firstDenominator, secondDenominator);
        addNumeratorsAndShowResult(resultFraction.firstNumerator, resultFraction.secondNumerator, resultFraction.denominator);
    });

    // fraction(substraction)
    $('#countFrSub').on('click', function(e) {
        e.preventDefault();
        var firstNumerator = parseInt($('#fractionSubtraction .firstNumerator').val());
        var secondNumerator = parseInt($('#fractionSubtraction .secondNumerator').val());
        var firstDenominator = parseInt($('#fractionSubtraction .firstDenominator').val());
        var secondDenominator = parseInt($('#fractionSubtraction .secondDenominator').val());

        var resultFraction = findCommonDenominatorAndChangeNumeratorsIfNeed(firstNumerator, secondNumerator, firstDenominator, secondDenominator);
        subtractNumeratorsAndShowResult(resultFraction.firstNumerator, resultFraction.secondNumerator, resultFraction.denominator);
    });

    // fraction(multiplication)
    $('#countFrMult').on('click', function(e) {
        e.preventDefault();
        var firstNumerator = parseInt($('#fractionMultiplication .firstNumerator').val());
        var secondNumerator = parseInt($('#fractionMultiplication .secondNumerator').val());
        var firstDenominator = parseInt($('#fractionMultiplication .firstDenominator').val());
        var secondDenominator = parseInt($('#fractionMultiplication .secondDenominator').val());

        multiplyFractionAndGetResult(firstNumerator, secondNumerator, firstDenominator, secondDenominator);
    });

    $('.clearForm').on('click', function(e) {
        e.preventDefault();
        $('form input').val("");
    });

    

});