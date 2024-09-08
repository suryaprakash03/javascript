let ab = new ArrayBuffer(10);   //creates an continuos empty array elements fill with the value zero

let v = new Uint8Array(ab); //for accessing the array buffer.we can use view unit16 - 2bytes,32 - 4bytes.theses are called as typed arrays

v[0] = 255; //maximum value range

for(let a of v)
{
    console.log(a)
}
//yenaku understand agara data change pana yencode(encode).atha reverse pana decode
let s = "surya";
let ec = new TextEncoder();    //string -> arrayform
let af = ec.encode(s);
console.log(af);

let d = new TextDecoder();     //arrayform -> string
let ss = d.decode(af);
console.log(ss);
if(ss == s)
{
    console.log(true);
}
//blob means binary large object same as arraybuffer.it has a extra second argument of mimetype as object
//preview the selected image to client.before sending to the server
let i=document.getElementsByTagName("input")[0];
i.addEventListener('change',
()=>{
        let b = new Blob([i.files[0]],{type:".jpg/.png/.jpeg"});
        let u = URL.createObjectURL(b);            //create a unique url everytime for the data.data is mapped to the url
        let ni = document.createElement("img");
        ni.src = u;
        document.getElementsByTagName('body')[0].append(ni);
    });
//running heading animation
function add()
{
    document.getElementById("scrollheading").classList.add("run");
}
function bc()
{
    document.getElementsByTagName("span")[0].classList.add("bc");
}
let dn = Date.now();
console.log(Date.now());
let count = 0;
let timerid=setInterval(() => {
    let dd = Date.now()-dn;
    console.log(dd);
    count++;
    if(count == 3)
    {
        clearInterval(timerid);
    }
},20);
//animation using js
// function animate({duration, draw, timing}) {

//     let start = performance.now();
  
//     requestAnimationFrame(function animate(time)
//     {
//       console.log(time);
//       let timeFraction = (time - start) / duration;
//       if (timeFraction > 1) timeFraction = 1;
  
//       let progress = timing(timeFraction)
  
//       draw(progress);
  
//       if (timeFraction < 1) {
//         requestAnimationFrame(animate);
//       }
  
//     });
// }
// animate({
//     duration: 1000,
//     draw: function(progress) {
//       elem.style.width = progress * 100 + '%';
//     },
//     timing: function(timeFraction) {
//       return timeFraction;
//     }
//   });



