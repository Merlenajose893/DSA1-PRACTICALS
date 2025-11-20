function startsWithVowels(str)
{
    let res=[],word="";
    let vowels="aeiouAEIOU"
    for(let a of str)
    {
        if(vowels.includes(a))
        {
            res.push(a)
            word+=a;
        }
    }
    return word;
}
console.log(startsWithVowels("hello guys where are you"));
