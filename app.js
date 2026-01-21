fetch("data.json").then(r=>r.json()).then(d=>{
document.getElementById("results").innerHTML =
d.map(r=>`<div class="card">
<strong>${r.element_id}</strong><br>
${r.description}<br>
$${r.price_cad} CAD
</div>`).join("");
});