// Função para carregar o conteúdo do formulário de busca
function loadSearchForm() {
    fetch('sections/search/search.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('search-container').innerHTML = html;
            initializeSearchForm();
        });
}

// Função para inicializar o formulário de busca
function initializeSearchForm() {
    const form = document.getElementById('search-form');
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');

    // Configurar datas mínimas
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Formatar datas para o formato YYYY-MM-DD
    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    // Configurar data mínima para check-in (hoje)
    checkinInput.min = formatDate(today);
    
    // Atualizar data mínima do checkout quando check-in for selecionado
    checkinInput.addEventListener('change', (e) => {
        const selectedDate = new Date(e.target.value);
        const nextDay = new Date(selectedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        checkoutInput.min = formatDate(nextDay);
        
        // Se a data de checkout for anterior à nova data mínima, atualizá-la
        if (checkoutInput.value && new Date(checkoutInput.value) <= selectedDate) {
            checkoutInput.value = formatDate(nextDay);
        }
    });

    // Lidar com o envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Coletar dados do formulário
        const formData = new FormData(form);
        const searchData = {
            destination: formData.get('destination'),
            checkin: formData.get('checkin'),
            checkout: formData.get('checkout'),
            guests: formData.get('guests')
        };

        // Aqui você pode adicionar a lógica de busca
        console.log('Dados da busca:', searchData);
    });
}

// Carregar o formulário quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', loadSearchForm);
