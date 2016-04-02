var now = moment().endOf('day').toDate();
var yearAgo = moment().startOf('day').subtract(1, 'year').toDate();
var chartData = d3.time.days(yearAgo,  moment().startOf('day').toDate()).map(function (dateElement) {
  return {
    date: dateElement,
    count: 0
  };
});
var heatmap = calendarHeatmap()
                .data(chartData)
                .selector('#contributions')
                .tooltipEnabled(false)
                .colorRange(['#f4f7f7', '#79a8a9']);
var clickHandler = function(data){

var chosen = heatmap.data().filter(datapoint => {
   return datapoint.date.toDateString() == data.date.toDateString();
 });
 var commitDensity = document.getElementById("commitDensity").value || 1;
 chosen[0].count = commitDensity;
 heatmap();
};

heatmap.onClick(clickHandler);

heatmap();  // render the chart

function toggleContributionsDetails(){
 heatmap.tooltipEnabled(!heatmap.tooltipEnabled());
 heatmap();
}

function generateCommits(){
 var name = document.getElementById("name").value;
 var fileName = document.getElementById("fileName").value;
 var textToAppend = document.getElementById("textToAppend").value;
 var email = document.getElementById("email").value;
 var author = name + "<" + email + ">";
 var commitMessage = document.getElementById("commitMessage").value;

 var generatedCommits = "";
 heatmap.data().forEach(function(element){
   for(var i = 0; i < element.count; i++){
     generatedCommits += `echo "${textToAppend}" >> ${fileName}; git add ${fileName}; git commit -m "${commitMessage}" --date="${element.date}" --author="${author}";\n`;
   }
 });

 document.getElementById("generated").innerText = generatedCommits;
}
