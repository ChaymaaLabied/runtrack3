async function ShowFavExpression() {
  const reponse = await fetch("expression.txt");
  const expression = await reponse.text();
  return expression;
}


document.addEventListener("DOMContentLoaded",()=>{
btn = document.getElementById("button");
btn.addEventListener("click", async ()=>{
    const result = await ShowFavExpression();
    const p = document.createElement('p');
    p.className = 'expression';
    p.textContent = result;
    document.body.appendChild(p);
})
})

