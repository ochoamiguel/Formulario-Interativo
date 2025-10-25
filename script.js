document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const nome = document.getElementById("nome").value;
  const curso = document.getElementById("curso").value;
  const msg = document.getElementById("msg");

  const agora = new Date();
  const data = agora.toLocaleDateString('pt-BR');
  const hora = agora.toLocaleTimeString('pt-BR');

  let texto = "";

  
  if (nome.trim() === "") {
    msg.innerText = "Por favor, insira um nome válido.";
    msg.style.color = "red";
    return;
  }


  if (curso === "") {
    msg.innerText = "Por favor, escolha um curso.";
    msg.style.color = "red";
    return;
  }

  
  if (curso === "Front-End") {
    texto = `Olá, ${nome}! Você escolheu o curso de Front-End.`;
    msg.style.color = "blue";
  } else if (curso === "Back-End") {
    texto = `Olá, ${nome}! Você escolheu o curso de Back-End.`;
    msg.style.color = "green";
  } else if (curso === "Full-Stack") {
    texto = `Olá, ${nome}! Você escolheu o curso Full-Stack.`;
    msg.style.color = "orange";
  }

   msg.innerHTML = `${texto}<br>Enviado em: ${data} às ${hora}`;
  
  
});
