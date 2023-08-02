'use strict';

$(document).ready(function () {


    let formButton = $('.form__button');

    formButton.on('click', function() {
        let formWrite = $('#write_form');
        let formName = $('#name_form');
        let formTel = $('#tel_form');
        let hasError = false;

        let loader = $('.loader');

        let formInvalid = $('.form__invalid').css('display', 'none');
        let formInput = $('.form__input').css('border', '1px solid #821328');

        if (!formWrite.val()) {
            formWrite.css('border', '1px solid red');
            formWrite.next().show();
            hasError = true;
        }
        if (!formName.val()) {
            formName.css('border', '1px solid red');
            formName.next().show();
            hasError = true;
        }
        if (!formTel.val()) {
            formTel.css('border', '1px solid red');
            formTel.next().show();
            hasError = true;
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                url: "https://testologia.site/checkout",
                method: 'POST',
                data: {
                    name: formName.val(), product: formWrite.val(), phone: formTel.val()
                }
            })
                .done (function (message) {
                    loader.hide();
                    if (message.success) {
                        $('.form').hide();
                        $('.success__order').css('display', 'flex');
                    }
                    else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                });
        }

    });










});

