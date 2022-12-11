var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);

//countries in asia region

var result = res.filter((ele)=>ele.region == "Asia");
console.log(result);

var result1= result.map((ele)=>ele.name);
console.log(result1);

//countries population less than 200000

var pop= res.filter((ele)=>ele.population<200000);
console.log(pop);

var pop1=pop.map((ele)=>ele.name);
console.log(pop1);

//using for-each to print name,capital and flag of countries

var pop2=pop.forEach((element) => console.log(element.name,element.capital,element.flag));
console.log(pop2);

var red = res.reduce((acc,cv) => acc+cv.population,0);
console.log(red);

//countries using dollar in currency

var arr=res.filter((ele)=>ele.currencies == "dollar");
console.log(arr);

var arr1=arr.map((ele)=>ele.name);
console.log(arr1);

};