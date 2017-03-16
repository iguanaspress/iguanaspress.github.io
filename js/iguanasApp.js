var templates_items, templates_text;

function showTemplate(template, data){
	var html    = template(data);
	$('.content').html(html);
}


$(document).ready(function(){
        var fuente   = $("#formulaire").html();
        templates_forms = Handlebars.compile(fuente);    
    
    
    
    $('.carousel').carousel({
      interval: 5000
    });

    $('.carousel').carousel('next');
    
    
    
});