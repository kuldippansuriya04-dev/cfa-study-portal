const app = document.createElement('div')

app.innerHTML = `
<div style="
font-family: Arial, sans-serif;
padding: 40px;
background: #f3f4f6;
min-height: 100vh;
">

<h1 style="margin-bottom:30px;">
CFA Study Portal
</h1>

<div style="
display:flex;
flex-direction:column;
gap:18px;
font-size:22px;
">

<a href="./flashcards/derivatives.html">Derivatives</a>

<a href="./flashcards/economics.html">Economics</a>

<a href="./flashcards/equity.html">Equity</a>

<a href="./flashcards/ethics.html">Ethics</a>

<a href="./flashcards/fixed-income.html">Fixed Income</a>

<a href="./flashcards/fsa.html">FSA</a>

<a href="./flashcards/qm.html">Quantitative Methods</a>

<a href="./flashcards/pm.html">Portfolio Management</a>

</div>

</div>
`

document.body.appendChild(app)
