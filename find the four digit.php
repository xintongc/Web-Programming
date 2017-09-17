<?php>
function find($str){
	$newA = preg_split("/ +/"; $str);
	foreach($newA as $x)
		if(strlen($x) == 4){
			return $x;
			}
		return false;
}


$list_str = ".....";
$result += find($list_str);
if($result !=0)
	echo ....
else
	echo ....



?>