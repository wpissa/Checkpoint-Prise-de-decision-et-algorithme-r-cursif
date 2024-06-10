function AnneeBisex (annee){
    if(annee % 4 === 0 || (annee % 100 === 0 && annee % 400 === 0))
    {
        return true 
    } else{
        return false
    }
}
console.log(AnneeBisex(1999))

function ispalindrome(mot){
    if(mot.length === 0 || mot.length === 1){
        return true

    }
    else{
       if(mot[0] === mot[mot.length -1]){
        return ispalindrome(mot.slice(1,-1))
       }
       else{
        return false
       }
    }
}
const v = "kayak"
console.log(ispalindrome(v))