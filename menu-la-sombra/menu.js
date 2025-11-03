import { createClient } from "https://cdn.skypack.dev/@sanity/client";

const client = createClient({
  projectId: "c4w8cov6", // 🔹 cámbialo por el tuyo
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

async function cargarMenu() {
  try {
    const platos = await client.fetch(`*[_type == "dish"]{
      name, description, price, "imageUrl": image.asset->url
    }`);

    const contenedor = document.getElementById("menuComida");
    contenedor.innerHTML = `
      <h2>Nuestro Menú</h2>
      <p>*Presione cada imagen para ver más información sobre el plato.</p>
    `;

    platos.forEach((p) => {
      const item = document.createElement("div");
      item.className = "item";
      item.style = "display: flex; align-items: center; gap: 10px;";

      item.innerHTML = `
        <img src="${p.imageUrl || ""}" alt="${p.name}" style="width:130px;height:auto;border-radius:40px;">
        <div>
          <h3>${p.name}</h3>
          <p>${p.description || ""}</p>
          <strong>$${p.price}</strong>
        </div>
      `;

      contenedor.appendChild(item);
    });
  } catch (error) {
    console.error("Error al cargar el menú:", error);
  }
}

cargarMenu();
