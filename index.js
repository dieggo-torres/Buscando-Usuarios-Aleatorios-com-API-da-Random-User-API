// Número de usuários que desejamos obter
let numUsuarios = 12

async function obterUsuarios() {
    try {
        // Faz a requisição para a Random User API
        const resposta = await fetch(`https://randomuser.me/api/?results=${numUsuarios}`)

        // Converte a resposta obtida para o formato JSON
        const dados = await resposta.json()

        // Lista de usuários (objetos)
        let usuarios = dados.results

        // Percorre a lista de usuários, criando a cada iteração um novo cartão
        usuarios.map(usuario => {
            // Obtém o contêiner no qual inserimos as cópias do template
            let template = document.getElementById('amostra').content

            // Faz uma cópia do template
            let copia = document.importNode(template, true)

            // Define o atributo src da imagem usando dados da resposta
            copia.querySelector('img.rounded-circle').src = usuario.picture.medium

            // Define o contúdo do título do cartão com dados da resposta
            copia.querySelector('.card-body .card-title').textContent = `${usuario.name.first} ${usuario.name.last}`
            
            // Anexa a cópia ao contêiner app
            app.appendChild(copia)
        })
    } catch(erro) {
        console.error(erro)
    }
}

// Chama a função
obterUsuarios()
