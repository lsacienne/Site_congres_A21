let template = $(".template");
let focusedTemplate;

template.on("click", function(){
    $(this).find(".resume-wrapper").stop().fadeTo("fast",1);
    //$(this).find(".resume-wrapper").css({ display: "unset"})
    focusedTemplate = $(this)
    console.log(focusedTemplate)
    
})
/*
$(window).on("click",function(event) {
    console.log($(this))
    if(!$(event.target).closest(focusedTemplate).length) {
        focusedTemplate.find(".resume-wrapper").css({ display: "none"});
    }
});
*/

$(".resume-wrapper").on("click",function(event){
    event.stopPropagation();
    focusedTemplate.find(".resume-wrapper").stop().fadeTo("solw",-0.5,function(){
        focusedTemplate.find(".resume-wrapper").css({ display: "none"});
    })
    
});