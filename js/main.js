var arr=[];
var n=parseInt(prompt("enter the size of array "));


for(let i=0; i<n; i++)
{
	arr[i]=parseInt(prompt("enter the value of array"));
}
for(j=0; j<arr.length; j++)
{
if(arr[j]%3==0)
{
	document.write(arr[j]+"is divisible by 3");
	document.write("<br>");
}
if(arr[j]%4==0)
{
	document.write(arr[j]+"is divisible by 4");
	document.write("<br>");
}
if(arr[j]%5==0)
{
	document.write(arr[j]+"is divisible by 5");
	document.write("<br>");
}
}