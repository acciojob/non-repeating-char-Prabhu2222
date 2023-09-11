function firstNonRepeatedChar(str) {
 // Write your code here
	let obj={};
	let arr=[];
	for(let i=0;i<str.length;i++){
      let char = str[i];
		if(obj[char]!=null){
          obj[char]++;
		}else{
			obj[char]=1;
		}
	}
	for(let i=0;i<str.length;i++){
		let char =str[i];
		if(obj[char]==1){
           return char;
			break;
		} 
		
	}
	return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
