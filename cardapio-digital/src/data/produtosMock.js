
export const produtosMock = [
    {
        id: 1,
        nome: "Coxinha",
        descricao: "Coxinha de frango com massa crocante",
        preco: 12.50,
        categoria: "Entradas",
        tipo:'Salgado',
        tamanho: 'Médio',
        disponibilidade: true,
        ingredientes: ['Frango', 'Massa', 'Temperos'],
        preparo: 'Fritar até dourar',
        alergenicos: ['Glúten', 'Lactose'],
        preparoDetalhado: 'Preparar o recheio de frango, moldar a massa, empanar e fritar em óleo quente por 5 minutos até dourar.',
        imagem: require('../assets/images/coxinha.jpg')
    },
    {
        id: 2,
        nome: "Picanha Grelhada",
        descricao: "Picanha suculenta grelhada ao ponto",
        preco: 45.00,
        categoria: "Pratos Principais",
        tipo: 'Carne',
        tamanho: 'Grande',
        disponibilidade: true,
        ingredientes: ['Picanha', 'Sal', 'Pimenta'],
        preparo: 'Grelhar na churrasqueira por 15 minutos de cada lado',
        alergenicos: ['Nenhum'],
        preparoDetalhado: 'Temperar a picanha com sal e pimenta, grelhar na churrasqueira por 15 minutos de cada lado até atingir o ponto desejado.',
        imagem: require('../assets/images/picanha.jpg')
    },
    {
        id: 3,
        nome: "Torta de Limão",
        descricao: "Torta de limão com merengue e base crocante",
        preco: 15.00,
        categoria: "Sobremesas",
        tipo: 'Doce',
        tamanho: 'Individual',
        disponibilidade: true,
        ingredientes: ['Limão', 'Merengue', 'Massa'],
        preparo: 'Assar a massa, preparar o recheio de limão e cobrir com merengue',
        alergenicos: ['Glúten', 'Lactose'],
        preparoDetalhado: 'Preparar a base da torta com farinha e manteiga, assar até dourar, preparar o recheio de limão com suco e açúcar, cobrir com merengue e levar ao forno por 10 minutos.',
        imagem: require('../assets/images/tortalimao.jpg')
    },
    {
        id: 4,
        nome: "Caipirinha",
        descricao: "Caipirinha clássica com limão e cachaça",
        preco: 10.00,
        categoria: "Bebidas",
        tipo: 'Bebida',
        tamanho: 'Copo',
        disponibilidade: true,
        ingredientes: ['Limão', 'Cachaça', 'Açúcar', 'Gelo'],
        preparo: 'Misturar limão picado com açúcar, adicionar cachaça e gelo',
        alergenicos: ['Nenhum'],
        preparoDetalhado: 'Cortar o limão em pedaços, misturar com açúcar até dissolver, adicionar cachaça e gelo a gosto, mexer bem e servir gelado.',
        imagem: require('../assets/images/caipirinha-limao.jpg')
    }
    ];