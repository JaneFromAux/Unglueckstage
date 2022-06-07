let input = document.querySelector('#input');
let button = document.querySelector('#button');
button.addEventListener("click", () => {
    let year = input.value;
    let datumAnfang = new Date(year, 0);
    let datumEnde = new Date(year, 12, 0)
    let count = 0;
    let unTag;
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let ul = document.createElement('ul');
    for (let i = datumAnfang; i <= datumEnde; i.setDate(i.getDate() + 1)) {
        if (i.getDate() == 13 && i.getDay() == 5) {
            unTag = new Date(year, i.getMonth(), i.getDate());
            count += 1;
            let li = document.createElement('li');
            li.textContent = `Freitag, ${unTag.toLocaleDateString()}`;
            ul.appendChild(li);
        }
    }
    document.body.appendChild(div);
    h2.textContent = `Das Jahr ${year} hat ${count} Unglückstage.`;
    div.appendChild(h2);
    div.appendChild(ul);
});