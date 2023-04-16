// Função para lidar com a submissão do formulário
function handleFormSubmit(event) {
    event.preventDefault(); // Evita o envio do formulário pelo navegador
    const form = event.target;
    const url = form.action;
    const formData = new FormData(form);
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Mensagem enviada com sucesso!'); // Exibe mensagem de sucesso
        form.reset(); // Limpa o formulário
      } else {
        throw new Error('Ocorreu um erro ao enviar a mensagem.'); // Exibe mensagem de erro
      }
    })
    .catch(error => alert(error));
  }
  
  // Adiciona o evento de submissão do formulário à função handleFormSubmit
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
  