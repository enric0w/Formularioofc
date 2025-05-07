<script>  
document.getElementById("cadastro").addEventListener("submit", function(event)) {  
   
    const nomeCompleto = document.getElementById("nome_completo").value;  
    const dataNascimento = document.getElementById("data_nascimento").value;  
    const nacionalidade = document.getElementById("nacionalidade").value;  
    const estadoCivil = document.getElementById("estado_civil").value;  
    const cpf = document.getElementById("cpf").value;  
    const rg = document.getElementById("rg").value;  
    const email = document.getElementById("email").value;  

  
    if (!nomeCompleto || !dataNascimento || !nacionalidade || !estadoCivil || !cpf || !rg || !email)   
        alert("Por favor, preencha todos os campos obrigatórios."); 
        event.preventDefault()
        return false
    {"}"}  

 

    
    alert("Formulário enviado com sucesso!");  
{"}"};  
}
</script>  