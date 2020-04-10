

    $(document).ready(function () {
        $('input').tooltip();
        $('#result').hide();

        $('input[type="radio"][name=taxFiled]:checked').on('click change', function(e) {
            var taxfiled = $( "input[type=radio][name=taxFiled]:checked" ).val();
            if (taxfiled == 0){
            document.getElementById('l1').innerHTML='What was your filing status on your 2018 return?';
            document.getElementById('l2').innerHTML='What was your adjusted gross income (AGI) for 2018?';
            document.getElementById('l3').innerHTML='How many children did you claim as dependents on your 2018 return?';
            }
            });
    });

    $('input[name="taxFiled"]').click(function() {
        var value = $(this).val();

        if (value == "0") {
            document.getElementById('l1').innerHTML='What was your filing status on your 2018 return?';
            document.getElementById('l2').innerHTML='What was your adjusted gross income (AGI) for 2018?';
            document.getElementById('l3').innerHTML='How many children did you claim as dependents on your 2018 return?';

            $('#no').show();
        }

        else if (value == "1") {
            document.getElementById('l1').innerHTML='What was your filing status on your 2019 return?';
            document.getElementById('l2').innerHTML='What was your adjusted gross income (AGI) for 2019?';
            document.getElementById('l3').innerHTML='How many children did you claim as dependents on your 2019 return?';

            $('#no').hide();
        }
    });



    $("input[type='submit']").click(function () {
        // $('html, body').animate({
        //     scrollTop: $("div#result").offset().top
        // }, 2000);
        $('html, body').animate({scrollTop:$(document).height()}, 2000);


        var taxfiled = $( "input[type=radio][name=taxFiled]:checked" ).val();
       var filingStatus = $( "input[type=radio][name=filingStatus]:checked" ).val();
       var AGI = parseFloat(document.getElementById("AGI").value);
       var child = parseFloat(document.getElementById("Child").value);
       var amount = 0.00;
       var slip = 0.00;
       var childamount = 0.00;
       childamount = parseFloat(child * 500);

       if (filingStatus == "S"){
           if (AGI <= 75000){
               amount = 1200 + childamount;
           }
           else if (AGI <= 99000){
               slip = (AGI - 75000);
               slip = slip * 0.05;
               amount = 1200 - slip;
               amount =  parseFloat(amount + childamount);
           }
           else {
               amount = 0;
           }

       }
       else if (filingStatus == "M"){

           if (AGI <= 150000){
               amount = 2400 + childamount;
           }
           else if (AGI <= 198000){
               slip = (AGI - 150000);
               slip = slip * 0.05;
               amount = 2400 - slip;
               amount =  parseFloat(amount + childamount);

           }
           else {
               amount = 0;
           }

       }
       else {
           if (AGI <= 112500){
               amount = 1200 + childamount;
           }
           else if (AGI <= 136500){
               slip = (AGI - 112500);
               slip = slip * 0.05;
               amount = 1200 - slip;
               amount = parseFloat( amount + childamount);

           }
           else {
               amount = 0;
           }
       }

       if (amount <= 0.00){
           document.getElementById('amount').innerHTML = '$'+ 0;
           $('#limit').show();
       }
       else
       {
           document.getElementById('amount').innerHTML = '$'+ amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
           $('#limit').hide();
       }

       $('#result').show();

    });
