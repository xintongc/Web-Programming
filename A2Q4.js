var names = new Array("freddie", "bob", "mieke", "yahoo2", "georgey");

var count = 0;
for(var i in names)
{
if((names[i].search(/ie$/)!=-1)||(names[i].search(/y$/)!=-1))
	count++;
}
document.write("The number of names having these two patterns (/ie$/) and (/y$/) in the array is ", count);