$(document).ready(function() { 
  $("#feedback").submit(function(){ 
    var form = $(this); 
    var error = false; 
    form.find('input, textarea').each( function(){ 
      if ($(this).val() == '') { 
        alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!');
        error = true; 
      }
    });
    if (!error) { 
      var data = form.serialize(); 
      $.ajax({ 
        type: 'POST', 
        url: 'mail.php', 
        dataType: 'json', 
        data: data,
        beforeSend: function(data) { 
          form.find('input[type="submit"]').attr('disabled', 'disabled'); 
        },
        success: function(data){ 
          if (data['error']) { 
            alert(data['error']);
          } else { 
            alert('Письмo было отправлено, проверьте почту.');
          }
        },
        error: function (xhr, ajaxOptions, thrownError) { 
          alert(xhr.status); 
          alert(thrownError);
        },
        complete: function(data) {
          form.find('input[type="submit"]').prop('disabled', false); 
        }
                      
           });
    }
    return false; // вырубaeм стaндaртную oтпрaвку фoрмы
  });
});