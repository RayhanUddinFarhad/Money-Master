function inputValue(inputId) {




    const input = document.getElementById(inputId);


    const value = input.value;

    return value;





}


function getText(TextId) {


    const text = document.getElementById(TextId).innerText;
    return text;

}

function setValue(TextId, value) {




    const values = document.getElementById(TextId);
    values.innerText = value;
}


document.getElementById('btn-calculate').addEventListener('click', function () {




    const Income = inputValue('Income');
    const Food = inputValue('Food');
    const Rent = inputValue('Rent');
    const Clothes = inputValue('Clothes');

    if (Income.trim() === '' || Food.trim() === '' || Rent.trim() === '' || Clothes.trim() === '') {
        alert('Please enter all the values!');


    }

    else {


        const TotalExpense = parseInt(Food) + parseInt(Clothes) + parseInt(Rent);



        if (TotalExpense > Income) {


            alert('Total expenses exceed the current balance!')
            return;
        }



        else {

            const currentBalance = parseInt(Income) - TotalExpense;


            getText('total-expense');
            getText('balance');


            setValue('total-expense', TotalExpense);
            setValue('balance', currentBalance);

        }



    }

}









)


document.getElementById('btn-save').addEventListener('click', function () {

    const Balance = getText('balance');
    const saveInput = inputValue('Save')


    if (saveInput.trim() === '' || saveInput > 100) {
        alert('Please enter the saving amount less than 100!');

    }

    else {


        const savingAmount = (parseInt(Balance) / 100 * parseInt(saveInput))
        const remaining = parseInt(Balance) - savingAmount;





        setValue('saving-amount', savingAmount);
        setValue('remaining-balance', remaining);


    }







})