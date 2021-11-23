var text = document.getElementById("text");
var typing = document.getElementById("typing");
var count;
var check=0;
var counter = 8;
function getRandom(x){
    return Math.floor(Math.random()*x)+1;
};

btn6.addEventListener("click",
       function(){

        var Client ="Client";
        var c =":"
        if(check==0)
        {
            check=1;
            count=getRandom(1000);
        }

       // text1.style.fontSize = "30px";
        var newp = document.createElement("p");
        
        newp.style.left = "80%";
        newp.style.top = counter + "%";
        newp.style.position = "absolute";
        newp.style.textAlign = "center";
        counter = counter + 5 ;
        var newContent = document.createTextNode(Client+count+c+content1.value);
        newp.appendChild(newContent);
        var currentp = document.getElementById("text1");
        document.body.insertBefore(newp, currentp);

        /*
        if(count==1)
        {
            var save=content1.value;
            content1.type = "text1";
            text1.innerHTML = `
            ${save}
            `;
            text1.style.fontSize = "30px";


        }

        if(count==2)
        {
            var save1=content1.value;
            content1.type = "text2";
            text2.innerHTML = `
            ${save1}
            `;
            text2.style.fontSize = "30px";


        }
        if(count==3)
        {
            var save2=content1.value;
            content1.type = "text3";
            text3.innerHTML = `
            ${save2}
            `;
            text3.style.fontSize = "30px";


        }
        */

    }
)