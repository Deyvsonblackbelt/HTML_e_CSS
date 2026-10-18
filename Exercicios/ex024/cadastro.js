const cadastro = document.getElementById('meuCadastro');

        cadastro.addEventListener('submit', function(event) {
            // 2. Evita o recarregamento padrão da página
            event.preventDefault();

            // 3. Captura os valores dos campos
            const nome = document.getElementById('inome').value;
            const senha = document.getElementById('isenha').value;

            // Cria um objeto com os dados
            const dadosUsuario = {
                nome: nome,
                senha: senha,
                dataRegistro: new Date().toISOString()
            };

            // 4. Salva no localStorage (convertendo o objeto para string JSON)
            // Dica: Para salvar múltiplos itens, você costuma recuperar um array existente, dar .push() e salvar de novo.
            localStorage.setItem('usuarioCadastrado', JSON.stringify(dadosUsuario));

            alert('Dados salvos com sucesso no navegador!');
            
            // Opcional: limpar o formulário
            cadastro.reset();
        });