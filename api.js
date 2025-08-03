const BASE_URL = "https://script.google.com/macros/s/AKfycbxIH8hRtOH2zJifVacMpbX0La3t6PjL58NlfZiSG9L6_6MMIeXFvIXOPHlfUrWMuUqN/exec";

async function getRifas() {
  const res = await fetch(`${BASE_URL}?action=rifas`);
  return res.json();
}

async function getNumerosPorRifa(id) {
  const res = await fetch(`${BASE_URL}?action=numeros&id=${id}`);
  return res.json();
}

async function reservarNumeros(id, numeros, nome, whatsapp) {
  const res = await fetch(`${BASE_URL}?action=reservar`, {
    method: "POST",
    body: JSON.stringify({ id, numeros, nome, whatsapp }),
    headers: { "Content-Type": "application/json" }
  });
  const data = await res.text();
  return data;
}