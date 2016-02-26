$(document).ready(function()
{
   $('#main').append("<select id='setData' /><br><br>");
   $('#main').hide().fadeIn(500);
   var mydata = new Array();
   var promise = $.getJSON("http://agamitsudo.ovh/OFF/data.json");
   promise.done(function(data)
   {
      for (var i = 0; i < data.length; i++)
      {
         $('#setData').append($('<option>',
         {
            value: data[i].id,
            text: data[i].name
         }));
         mydata.push(data[i]);
      }
   });
   $("#setData").change(function()
   {
      $("#chartContainer").empty();
      if ($("#setData option:selected").val() == 0)
      {
         return;
      }
      var element;
      for (var i = 0; i < mydata.length; i++)
      {    
         if (mydata[i].id == $("#setData option:selected").val())
         {
            element = mydata[i];
            break;
         }
      }
      var promise = $.getJSON(element.url);
      promise.done(function(data)
      {
         var jsonString = JSON.stringify(data)
         jsonString = jsonString.replace(/name/g, "legendText");
         jsonString = jsonString.replace(/products/g, "y");
         var newData = $.parseJSON(jsonString);
         var chart = new CanvasJS.Chart("chartContainer",
         {
            title:
            {
               text: element.name
            },
            animationEnabled: true,
            legend:
            {
               verticalAlign: "center",
               horizontalAlign: "left",
               fontSize: 20,
               fontFamily: "Helvetica"
            },
            theme: "theme2",
            data: [
            {
               type: "pie",
               indexLabelFontFamily: "Garamond",
               indexLabelFontSize: 10,
               indexLabel: "{legendText} {y}%",
               startAngle: -20,
               showInLegend: false,
               toolTipContent: "{legendText} {y}%",
               dataPoints: newData.tags
            }]
         });
         chart.render();
      });
   });
});
