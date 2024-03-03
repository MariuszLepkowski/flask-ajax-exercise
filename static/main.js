$(document).ready(function(){

    $('.btn-primary').click(function(){
        $.ajax({
            url: '',
            type: 'get',
            contentType: 'application/json',
            data: {
                button_text: $(this).text()
            },
            success: function(response){
                $('.btn-primary').text(response.seconds)
                $('.left-list').append('<li>' + response.seconds + '<li>')
            }
        })
    })

    $('.left-list').on('click', 'li', function(){
        $.ajax({
            url: '',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({
                text: $(this).text()
            }),
            success: function(response){
                $('.right-list').append('<li>' + response.data + '<li>')
            }
        })

    })


})