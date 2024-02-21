console.log("heelow");

async function getSong(){
    let a = await fetch(`http://127.0.0.1:56230/song/`);
    let res = await a.text();

    
    let div = document.createElement("div");
    div.innerHTML=res;
    
    let ank = div.getElementsByTagName('a');
    
    let song = [];
    
    for (let index = 0; index < ank.length; index++) {
        
        const element = ank[index];
        if (element.href.endsWith(".mp3")) {
            song.push(element.href)
        }
    }
    console.log(song);
    return song;
}

async function main(){
    let gana=await getSong();

    let audio = new Audio(gana[0])
    audio.play()
    .catch((err)=>{
        console.log(err);
    })
}
 
main()