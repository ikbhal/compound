$(document).ready(function () {
    $("#calculator-form").submit(function (event) {
        event.preventDefault();
        
        const initialAmount = parseFloat($("#initial-amount").val());
        const additionalContributions = parseFloat($("#additional-contributions").val());
        const totalYears = parseInt($("#total-years").val());
        const annualGrowth = parseFloat($("#annual-growth").val()) / 100; // Convert percentage to decimal
        
        let compoundedAmount = initialAmount;
        
        for (let year = 1; year <= totalYears; year++) {
            compoundedAmount += additionalContributions;
            compoundedAmount *= (1 + annualGrowth);
        }
        
        $("#years-display").text(totalYears);
        $("#compounded-amount").text(compoundedAmount.toFixed(2));
        $("#result").removeClass("hidden");
    });
});
