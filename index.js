//如果是错的指令（比如说什么），“请输入正确的”，“多大的什么图形”
//输入符号直到不想再输入

let a= prompt("给我一个符号");
let signs =[];
let newLength = signs.push(a);
while(a){
    a=prompt("给我一个符号");
    if(a){
        newLength = signs.push(a);
    }
}

let num= Number (prompt("几行的图形"));
let pattern= prompt("什么图形");
let graph= new String;

while(pattern!=="正方形"&&pattern!=="三角形"&&pattern!=="菱形"){
    pattern= prompt("正方形or三角形or菱形");
}

if(pattern==="正方形"){
    let c=0;
    for(let j=1;j<=num;j++){
        let temp= new String;
        for(let i=1;i<=num;i++){//第几行
            temp+= signs[c];
            if(c==signs.length-1){
                c=-1;
            }
            c++; 
        }
        graph+=temp+"\n";
    }
}

if(pattern==="三角形"){
    let c=0;
    for(let j=1;j<=num;j++){
        let temp= new String;
        for(let i=1;i<=j;i++){//第几行
            temp+= signs[c];
            if(c==signs.length-1){
                c=-1;
            }
            c++; 
        }
        graph+=temp+"\n";
    }
}

if(pattern==="菱形"){
    let c=0;
    for(let j=1;j<=num;j++){
        let temp= new String;
        for(let i=1;i<=j;i++){
            temp+= signs[c];
            if(c==signs.length-1){
                c=-1;
            }
            c++; 
        }
        graph+=temp+"\n";
    }
    for(let j=1;j<=num;j++){
        let temp= new String;
        for(let i=1;i<=j;i++){
            temp+= " ";
            if(c==signs.length-1){
                c=-1;
            }
            c++; 
        }
        graph+=temp;
        for(let k=j;k<=num;k++){
            temp+=signs[c];
            if(c==signs.length-1){
                c=-1;
            }
            c++; 
        }
        graph+=temp+"\n"
    }
}
alert(graph);