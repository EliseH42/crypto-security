let phrase = "the quick brown fox jumps over the lazy dog"
let keyphrase = ""

for(let i = 0; i < phrase.length; i++){
    if(keyphrase.includes(phrase[i]) === false){
    keyphrase += phrase[i]
    }
}
//console.log(keyphrase)

function encipher (word) {
    let encrypted = []
    for (let i=0;i<word.length;i++){
        for(let j=0;j<keyphrase.length;j++){
            if (word[i] === keyphrase[j]){

                encrypted.push(j)
            }
        }
    }
    return encrypted
}

function decipher(arr){
    let decoded = ""
    for (let i=0;i<arr.length;i++){
        letter = keyphrase[arr[i]]

        decoded+= letter
    }
    return decoded
}

console.log(encipher("i love cryptography"))
console.log(decipher([6,3,21,11,20,2,3,7,10,24,18,0,11,26,10,22,18,1,24]))