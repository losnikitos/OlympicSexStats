$.getJSON("data/data.json",function(data)
    {
        var template = $( ".olympics");
        $.each(data,function(i, line)
        {
            var t = template.clone();
            renderLine(line,t);
            $(".container").append(t);
        })
        template.remove();
    }
);

renderLine = function(line, template)
{
    template.find(".year").text(line.year);
    template.find(".women .count").text(line.women);
    template.find(".men .count").text(line.men);

    var womenIcons = Array(Math.round(line.women/10.0)+1).join('&#xf182; ');
    var menIcons = Array(Math.round(line.men/10.0)+1).join("&#xf183; ");

    template.find(".women .icons").html(womenIcons);
    template.find(".men .icons").html(menIcons);
}
