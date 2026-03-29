// ==========================================
// 1. DADOS FICTÍCIOS (MOCKS)
// ==========================================

let pedidos = [
    {
        id: 101,
        cliente: "João Silva",
        documento: "123.456.789-00",
        data: "2026-01-10",
        valorTotal: 524.90,
        status: "Em Aberto",
        endereco: "Rua das Flores, 50 - Joinville/SC",
        itens: [{ nome: "Compressor Embraco", qtd: 1, preco: 489.90 }, { nome: "Capacitor", qtd: 1, preco: 35.00 }]
    },
    {
        id: 102,
        cliente: "Refrigeração Joinville LTDA",
        documento: "12.345.678/0001-99",
        data: "2026-01-11",
        valorTotal: 750.00,
        status: "Recebido",
        endereco: "Av. Industrial, 1000 - Joinville/SC",
        itens: [{ nome: "Gás R134a", qtd: 1, preco: 750.00 }]
    }
];

// --- ADICIONADO: Atributos avançados (voltagem, cor, gas, capacidade) para os filtros funcionarem ---
const produtos = [
    { id: 1, nome: "Compressor Embraco 1/4 HP 110v R134a", categoria: "Compressores", marca: "Embraco", preco: 489.90, estoque: 15, img: "https://www.girellirefrigeracao.com.br/upload/produto/imagem/s_motor-compressor-embraco-1-4-r134a-emr-80hlr-110v-4.webp", destaque: true, freteGratis: true, maisVendido: true, voltagem: "110v", cor: "Preto", gas: "R134a", capacidade: "1/4 HP" },
    { id: 2, nome: "Gás Refrigerante R134a 13.6kg DAC", categoria: "Gases", marca: "Chemours", preco: 750.00, estoque: 5, img: "https://images.tcdn.com.br/img/img_prod/917493/gs_refrigerante_r134a_cilindro_dac_136kg_refrigera_1_20250725104042_c37fa1e16f7c.png", destaque: true, freteGratis: false, maisVendido: true, voltagem: null, cor: null, gas: "R134a", capacidade: "13.6kg" },
    { id: 3, nome: "Kit Manifold R410a/R22 com Mangueiras", categoria: "Ferramentas", marca: "EOS", preco: 220.50, estoque: 8, img: "https://cdn.awsli.com.br/2500x2500/767/767714/produto/2705210714e7c74890c.jpg", destaque: false, freteGratis: true, maisVendido: false, voltagem: null, cor: null, gas: "R410a/R22", capacidade: null },
    { id: 4, nome: "Capacitor 35uF 380VAC Fio", categoria: "Elétrica", marca: "Dugold", preco: 35.00, estoque: 30, img: "https://http2.mlstatic.com/D_Q_NP_2X_923195-MLB71132121952_082023-T.webp", destaque: false, freteGratis: false, maisVendido: true, voltagem: "380v", cor: "Branco", gas: null, capacidade: "35uF" },
    { id: 5, nome: "Bomba de Vácuo 6CFM Duplo Estágio", categoria: "Ferramentas", marca: "Suryha", preco: 1250.00, estoque: 2, img: "https://http2.mlstatic.com/D_832190-MLB89996676994_082025-O.jpg", destaque: true, freteGratis: true, maisVendido: false, voltagem: "Bivolt", cor: "Azul", gas: null, capacidade: "6 CFM" },
    { id: 6, nome: "Controlador Full Gauge TC-900E Power", categoria: "Elétrica", marca: "Full Gauge", preco: 195.00, estoque: 12, img: "https://fullgauge-strapi-prod-media-f340da7.s3.sa-east-1.amazonaws.com/TC_900_E_POWER_6ae05541ef.png", destaque: true, freteGratis: true, maisVendido: true, voltagem: "Bivolt", cor: "Preto", gas: null, capacidade: null },
    { id: 7, nome: "Kit Tubo Cobre 1/4 e 3/8 (5m)", categoria: "Instalação", marca: "Eluma", preco: 180.00, estoque: 0, img: "https://cdn.awsli.com.br/2094/2094747/produto/307926074/d_730396-mlb79444751754_102024-o-1cp2nvpntv.jpg", destaque: false, freteGratis: false, maisVendido: true, voltagem: null, cor: "Cobre", gas: null, capacidade: "5 Metros" },
    { id: 8, nome: "Motor Ventilador Axial 300mm FN030-4EK.WC.V7", categoria: "Ventiladores", marca: "ZIEHLABEGG", preco: 145.00, estoque: 20, img: "https://images.tcdn.com.br/img/img_prod/570101/motor_ventilador_axial_300mm_fn030_4ek_wc_v7_ziehlabegg_19299_2_e36b359c13ddc866bff3ca34b7b706f5_20251103121649.jpg", destaque: false, freteGratis: true, maisVendido: false, voltagem: "220v", cor: "Preto", gas: null, capacidade: "300mm" },
]; 

const historicoPedidos = [
    { 
        id: "1025", 
        data: "15/12/2025", 
        total: 1239.90, 
        status: "Finalizado",
        itens: [
            { id: 1, nome: "Compressor Embraco 1/4 HP 110v R134a", preco: 489.90, qtd: 1, img: "https://www.girellirefrigeracao.com.br/upload/produto/imagem/s_motor-compressor-embraco-1-4-r134a-emr-80hlr-110v-4.webp" },
            { id: 2, nome: "Gás Refrigerante R134a 13.6kg DAC", preco: 750.00, qtd: 1, img: "https://images.tcdn.com.br/img/img_prod/917493/gs_refrigerante_r134a_cilindro_dac_136kg_refrigera_1_20250725104042_c37fa1e16f7c.png" }
        ]
    },
    { 
        id: "1032", 
        data: "02/01/2026", 
        total: 220.50, 
        status: "Processando",
        itens: [
            { id: 3, nome: "Kit Manifold R410a/R22 com Mangueiras", preco: 220.50, qtd: 1, img: "https://cdn.awsli.com.br/2500x2500/767/767714/produto/2705210714e7c74890c.jpg" }
        ]
    }
];

const marcas = [
    { nome: "Embraco", img: "https://images.seeklogo.com/logo-png/31/2/embraco-logo-png_seeklogo-315841.png" },
    { nome: "Danfoss", img: "https://images.seeklogo.com/logo-png/3/2/danfoss-logo-png_seeklogo-38450.png" },
    { nome: "Full Gauge", img: "https://d5gag3xtge2og.cloudfront.net/producao/33153086/G/logo.png" },
    { nome: "EOS", img: "https://yt3.googleusercontent.com/UNjWYqIzIamCkv9-zapGRw2RHm8pjt1Mo0tMFLFdm2mKAd-7e4ykkzCI2KoVbnDxI1OXHez26A=s900-c-k-c0x00ffffff-no-rj" }, 
    { nome: "Thebe", img: "https://images.seeklogo.com/logo-png/30/2/thebe-bombas-hidraulicas-logo-png_seeklogo-305741.png" },
];

const banners = [
    "https://images.pexels.com/photos/5556317/pexels-photo-5556317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/5650042/pexels-photo-5650042.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/3905874/pexels-photo-3905874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
];

// ==========================================
// 2. ESTADO DA APLICAÇÃO
// ==========================================

let carrinho = [];
let favoritos = [];
let bannerIndex = 0;
let bannerInterval = null;

// =========================================
// 3. INICIALIZAÇÃO E NAVEGAÇÃO
// ==========================================

window.onload = () => {
    renderHome();
    iniciarBanner();
    atualizarCarrinhoUI();
    renderFiltrosLaterais(); // Gera os filtros laterais ao abrir o site
};

let usuarioLogado = null;

function navigateTo(viewId) {
    // 1. Esconde todas as seções
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    
    // 2. Lógica de visibilidade para Admin/Estoque
    const categoriesBar = document.querySelector('.categories');
    const zapBtn = document.getElementById('whatsappBtn');
    if (viewId === 'admin' || viewId === 'estoque') {
        if (categoriesBar) categoriesBar.style.display = 'none';
        if (zapBtn) zapBtn.style.display = 'none';
    } else {
        if (categoriesBar) categoriesBar.style.display = 'block';
        if (zapBtn) zapBtn.style.display = 'flex';
    }

    // 3. Controle Interno da View Profile (Login vs Logado)
    if (viewId === 'profile') {
        if (!usuarioLogado) {
            document.getElementById('login-container').style.display = 'block';
            document.getElementById('profile-content').style.display = 'none';
        } else {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('profile-content').style.display = 'block';
            renderPerfil();
        }
    }

    // 4. Ativa a seção solicitada
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.add('active');
    } else {
        console.error("View não encontrada: view-" + viewId);
    }
    
    window.scrollTo(0, 0);
}

// FUNÇÕES DE AÇÃO
function realizarLogin(event) {
    event.preventDefault();
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    const errorMsg = document.getElementById('loginError');

    if (user === 'adm' && pass === '123456k') {
        usuarioLogado = { nome: "Admin Kirchner", role: "admin" };
        navigateTo('admin');
    } else {
        errorMsg.style.display = 'block';
    }
}

function salvarCadastro(event) {
    event.preventDefault();
    const p1 = document.getElementById('regPass').value;
    const p2 = document.getElementById('regPassConf').value;

    if (p1 !== p2) return alert("Senhas diferentes!");
    
    alert("Cadastro simulado com sucesso!");
    navigateTo('profile');
}

function logout() {
    usuarioLogado = null;
    navigateTo('home');
}

// ==========================================
// 4. HOME E PRODUTOS
// ==========================================

function iniciarBanner() {
    const img = document.getElementById('bannerImg');
    if (!img) return;

    if (bannerInterval) clearInterval(bannerInterval);

    bannerInterval = setInterval(() => {
        img.style.opacity = 0;
        setTimeout(() => {
            bannerIndex = (bannerIndex + 1) % banners.length;
            img.src = banners[bannerIndex];
            img.onload = () => { img.style.opacity = 1; };
            setTimeout(() => img.style.opacity = 1, 50);
        }, 1000); 
    }, 5000); 
}

function renderHome() {
    renderHorizontalList('gridFreteGratis', produtos.filter(p => p.freteGratis));
    renderHorizontalList('gridDestaques', produtos.filter(p => p.destaque));
    renderHorizontalList('gridMaisProcurados', produtos.filter(p => p.maisVendido));
    
    const gridMarcas = document.getElementById('gridMarcas');
    if(gridMarcas) {
        gridMarcas.innerHTML = '';
        marcas.forEach(marca => {
            const div = document.createElement('div');
            div.className = 'brand-item';
            div.onclick = () => filtrarMarca(marca.nome);
            div.innerHTML = `<img src="${marca.img}" alt="${marca.nome}" onerror="this.src='https://via.placeholder.com/100?text=${marca.nome}'">`;
            gridMarcas.appendChild(div);
        });
    }
}

function renderHorizontalList(containerId, lista) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    if (lista.length === 0) {
        atualizarBotoesCarrossel(containerId);
        return;
    }

    lista.forEach(prod => container.appendChild(criarCard(prod)));
    setTimeout(() => { atualizarBotoesCarrossel(containerId); }, 0);
}

function criarCard(prod) {
    const div = document.createElement('div');
    div.className = 'card';
    
    const isFav = favoritos.includes(prod.id) ? 'active' : '';
    const iconFav = isFav ? 'favorite' : 'favorite_border';

    div.innerHTML = `
        <div class="fav-btn ${isFav} fav-btn-${prod.id}" onclick="toggleFavorito(${prod.id}); event.stopPropagation();">
            <span class="material-icons">${iconFav}</span>
        </div>
        <div class="card-img-container" onclick="abrirProduto(${prod.id})">
            <img src="${prod.img}" alt="${prod.nome}">
        </div>
        <div class="card-body" onclick="abrirProduto(${prod.id})">
            ${prod.freteGratis ? '<span class="card-tag">Frete Grátis</span>' : ''}
            <div class="card-title">${prod.nome}</div>
            <div class="card-price">R$ ${prod.preco.toFixed(2).replace('.', ',')}</div>
            <div class="card-installments">ou 10x de R$ ${(prod.preco/10).toFixed(2).replace('.', ',')}</div>
        </div>
    `;
    return div;
}

function abrirProduto(id) {
    const prod = produtos.find(p => p.id === id);
    if (!prod) return;

    const content = document.getElementById('productDetailContent');
    if(!content) return;

    // Renderiza o detalhe principal COM a descrição inclusa
    content.innerHTML = `
        <div class="detail-gallery">
            <img src="${prod.img}" alt="${prod.nome}">
        </div>
        <div class="detail-info">
            <div class="detail-cat">${prod.categoria} | ${prod.marca}</div>
            <h1 class="detail-title">${prod.nome}</h1>
            <div class="detail-price">R$ ${prod.preco.toFixed(2).replace('.', ',')}</div>
            <p style="margin-bottom:20px;">Código: #${prod.id}9938 | Em estoque</p>
            
            <div class="qty-selector">
                <label>Quantidade:</label>
                <input type="number" id="qtyInput" value="1" min="1">
            </div>

            <div class="action-buttons">
                <button class="btn-buy-now" onclick="comprarAgora(${prod.id})">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width: 24px; height: 24px; object-fit: contain;">
                    Comprar Agora
                </button>
                <button class="btn-add-cart" onclick="adicionarCarrinhoDetalhe(${prod.id})">
                    Adicionar ao Carrinho
                </button>
            </div>

            <div style="margin-top: 30px; font-size: 14px; color: #555; line-height: 1.6;">
                <h3 style="color: var(--azul-escuro); border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 10px;">Descrição do Produto</h3>
                <p>O produto <strong>${prod.nome}</strong> da marca <strong>${prod.marca}</strong> é reconhecido pela sua alta eficiência e durabilidade em sistemas de refrigeração industrial. 
                Ideal para manutenções preventivas e corretivas, garantindo o desempenho original do equipamento.</p>
                <ul style="margin-top: 10px; margin-left: 20px;">
                    <li>Categoria: ${prod.categoria}</li>
                    <li>Garantia: 3 meses contra defeitos de fabricação</li>
                    <li>Disponibilidade: Pronta entrega na Refrigeração Kirchner</li>
                </ul>
            </div>
        </div>
    `;

    // --- LÓGICA DE ITENS RELACIONADOS ---
    const relacionados = produtos.filter(p => p.categoria === prod.categoria && p.id !== prod.id);
    renderHorizontalList('gridRelacionados', relacionados);

    // --- LÓGICA DE "VOCÊ PODE GOSTAR" ---
    const sugestoes = produtos.filter(p => p.destaque && p.categoria !== prod.categoria);
    renderHorizontalList('gridSugestoes', sugestoes);

    // Muda a visão e sobe o scroll
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.getElementById('view-product').classList.add('active');
    window.scrollTo(0, 0);
}


// ==========================================
// 5. CARRINHO E ORÇAMENTO
// ==========================================

function adicionarCarrinhoDetalhe(id) {
    const qtdInput = document.getElementById('qtyInput');
    const qtd = parseInt(qtdInput.value) || 1;
    const prod = produtos.find(p => p.id === id);
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.qtd += qtd;
    } else {
        carrinho.push({ ...prod, qtd: qtd });
    }
    
    atualizarCarrinhoUI();
    toggleCart(true);
}

function recomprarItem(idProduto, qtdParaAdicionar) {
    const prod = produtos.find(p => p.id === idProduto);
    if (!prod) return;
    
    const itemExistente = carrinho.find(item => item.id === idProduto);
    if (itemExistente) {
        itemExistente.qtd += qtdParaAdicionar;
    } else {
        carrinho.push({ ...prod, qtd: qtdParaAdicionar });
    }
    
    atualizarCarrinhoUI();
    toggleCart(true);
}

function atualizarCarrinhoUI() {
    const totalItens = carrinho.reduce((acc, item) => acc + item.qtd, 0);
    const elCartCount = document.getElementById('cartCount');
    if(elCartCount) elCartCount.innerText = totalItens;

    const totalValor = carrinho.reduce((acc, item) => acc + (item.preco * item.qtd), 0);
    const elCartTotal = document.getElementById('cartTotal');
    if(elCartTotal) elCartTotal.innerText = `R$ ${totalValor.toFixed(2).replace('.', ',')}`;
    
    const container = document.getElementById('cartItemsContainer');
    if(container) {
        container.innerHTML = '';
        if (carrinho.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #999; margin-top: 20px;">Seu carrinho está vazio.</p>';
        } else {
            carrinho.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <img src="${item.img}">
                    <div style="flex:1">
                        <div style="font-size:14px; font-weight:bold;">
                            <span style="color:var(--azul-escuro);">${item.qtd}x</span> ${item.nome}
                        </div>
                        <div style="color: #666; font-size: 12px;">Unit: R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
                        <div style="color: var(--azul-escuro); font-weight:bold;">Total: R$ ${(item.preco * item.qtd).toFixed(2).replace('.', ',')}</div>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center; gap:5px;">
                        <button style="color: #e53935; border:none; background:none; cursor:pointer" onclick="removerDoCarrinho(${index})">
                            <span class="material-icons">delete</span>
                        </button>
                    </div>
                `;
                container.appendChild(div);
            });
        }
    }

    const viewCart = document.getElementById('view-cart');
    if(viewCart && viewCart.classList.contains('active')) {
        renderCarrinhoPagina();
    }
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinhoUI();
}

function abrirPaginaCarrinho() {
    toggleCart(false); 
    navigateTo('cart'); 
}

function renderCarrinhoPagina() {
    const container = document.getElementById('cartPageItems');
    const totalTexto = document.getElementById('cartPageTotal');
    
    if (!container || !totalTexto) return;
    container.innerHTML = '';
    
    if (carrinho.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 40px 0;">Não há itens no seu orçamento no momento.</p>';
        totalTexto.innerText = 'R$ 0,00';
        return;
    }

    let totalValor = 0;

    carrinho.forEach((item, index) => {
        totalValor += item.preco * item.qtd;
        const div = document.createElement('div');
        div.className = 'cart-page-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.nome}">
            <div class="cart-page-item-info">
                <div class="cart-page-item-title">${item.nome}</div>
                <div style="color: #666; font-size: 14px;">Valor Unitário: R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
            </div>
            <div class="cart-page-item-actions">
                <div class="qty-selector">
                    <input type="number" value="${item.qtd}" min="1" onchange="atualizarQtdCarrinho(${index}, this.value)">
                </div>
                <div style="font-weight: bold; color: var(--azul-escuro); width: 100px; text-align: right;">
                    R$ ${(item.preco * item.qtd).toFixed(2).replace('.', ',')}
                </div>
                <button style="color: #e53935; border:none; background:none; cursor:pointer; padding: 5px;" onclick="removerDoCarrinho(${index})">
                    <span class="material-icons">delete</span>
                </button>
            </div>
        `;
        container.appendChild(div);
    });

    totalTexto.innerText = `R$ ${totalValor.toFixed(2).replace('.', ',')}`;
}

function atualizarQtdCarrinho(index, novaQtd) {
    novaQtd = parseInt(novaQtd);
    if (novaQtd >= 1) {
        carrinho[index].qtd = novaQtd;
        atualizarCarrinhoUI(); 
    }
}

function toggleCart(forceOpen) {
    const modal = document.getElementById('cartModal');
    const zapBtn = document.getElementById('whatsappBtn');
    if(!modal) return;
    
    // Se forceOpen for false, ele fecha. Se for true, abre. Se não vier nada, inverte.
    const shouldOpen = (forceOpen !== undefined) ? forceOpen : !modal.classList.contains('open');

    if (shouldOpen) {
        modal.classList.add('open');
        if(zapBtn) zapBtn.classList.add('move-left');
    } else {
        modal.classList.remove('open');
        if(zapBtn) zapBtn.classList.remove('move-left');
    }
}

// Adicione este evento para detectar clique fora da barra branca do carrinho
document.getElementById('cartModal').addEventListener('click', function(event) {
    // Se o clique foi no fundo escuro (modal-overlay) e não dentro da cart-sidebar
    if (event.target === this) {
        toggleCart(false);
    }
});

// ==========================================
// 6. WHATSAPP
// ==========================================

function comprarAgora(id) {
    const prod = produtos.find(p => p.id === id);
    const qtd = document.getElementById('qtyInput') ? document.getElementById('qtyInput').value : 1;
    const total = (prod.preco * qtd).toFixed(2);
    
    const msg = `Olá, gostaria de comprar agora:%0A- ${qtd}x ${prod.nome}%0AValor Total: R$ ${total}`;
    window.open(`https://wa.me/5547996270011?text=${msg}`, '_blank');
}

function finalizarZap() {
    if (carrinho.length === 0) return alert("Carrinho vazio!");
    
    let msg = "Olá, vim pelo site e gostaria de comprar:%0A%0A";
    
    carrinho.forEach(item => {
        msg += `- *${item.qtd}x* ${item.nome} (R$ ${(item.preco * item.qtd).toFixed(2)})%0A`;
    });
    
    const cartPageAtiva = document.getElementById('view-cart').classList.contains('active');
    const totalTexto = cartPageAtiva ? document.getElementById('cartPageTotal').innerText : document.getElementById('cartTotal').innerText;
    
    msg += `%0A*Total Geral: ${totalTexto}*`;
    window.open(`https://wa.me/5547996270011?text=${msg}`, '_blank');
}

// ==========================================
// 7. LISTAGEM, BUSCA E FILTROS AVANÇADOS
// ==========================================

function marcarCategoriaAtiva(categoria) {
    const botoes = document.querySelectorAll('.cat-btn');
    botoes.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.trim() === categoria) {
            btn.classList.add('active');
        }
    });
}

function filtrarCategoria(cat) {
    marcarCategoriaAtiva(cat); 
    mostrarLista(produtos.filter(p => p.categoria === cat), `Categoria: ${cat}`);
}

function filtrarMarca(marca) {
    if(marca === 'Todas') mostrarLista(produtos, 'Todos os Produtos');
    else mostrarLista(produtos.filter(p => p.marca === marca), `Marca: ${marca}`);
}

function buscarProdutos() {
    const input = document.getElementById('searchInput');
    if(!input) return;
    const termo = input.value.toLowerCase();
    if(!termo) return;
    mostrarLista(produtos.filter(p => p.nome.toLowerCase().includes(termo)), `Busca: "${termo}"`);
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if(searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') buscarProdutos();
        });
    }
});

function mostrarLista(lista, titulo) {
    const grid = document.getElementById('gridListagem');
    const elTitle = document.getElementById('listTitle');
    if(!grid || !elTitle) return;

    elTitle.innerText = titulo;
    grid.innerHTML = '';
    
    if(lista.length === 0) grid.innerHTML = '<p style="grid-column: 1 / -1;">Nenhum item encontrado com esses filtros.</p>';
    else lista.forEach(prod => grid.appendChild(criarCard(prod)));

    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.getElementById('view-list').classList.add('active');
    window.scrollTo(0, 0);
}

// --- NOVA LÓGICA DE FILTROS LATERAIS ---
function renderFiltrosLaterais() {
    // Função auxiliar para criar as caixinhas de marcação (checkbox) dinamicamente
    function renderCheckboxes(containerId, propriedade, classeFiltro) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // Pega os valores únicos e que não sejam nulos ou vazios
        const valoresUnicos = [...new Set(produtos.map(p => p[propriedade]).filter(val => val))].sort();
        
        container.innerHTML = valoresUnicos.map(val => `
            <label style="cursor: pointer; display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" class="${classeFiltro}" value="${val}"> ${val}
            </label>
        `).join('');
    }

    renderCheckboxes('filter-categories-list', 'categoria', 'filter-cat');
    renderCheckboxes('filter-brands-list', 'marca', 'filter-brand');
    renderCheckboxes('filter-voltagem-list', 'voltagem', 'filter-voltagem');
    renderCheckboxes('filter-cor-list', 'cor', 'filter-cor');
    renderCheckboxes('filter-gas-list', 'gas', 'filter-gas');
    renderCheckboxes('filter-capacidade-list', 'capacidade', 'filter-capacidade');
}

function aplicarFiltrosAvancados() {
    // Coleta as escolhas do usuário
    const catSelecionadas = Array.from(document.querySelectorAll('.filter-cat:checked')).map(el => el.value);
    const marcasSelecionadas = Array.from(document.querySelectorAll('.filter-brand:checked')).map(el => el.value);
    const voltSelecionadas = Array.from(document.querySelectorAll('.filter-voltagem:checked')).map(el => el.value);
    const coresSelecionadas = Array.from(document.querySelectorAll('.filter-cor:checked')).map(el => el.value);
    const gasesSelecionados = Array.from(document.querySelectorAll('.filter-gas:checked')).map(el => el.value);
    const capSelecionadas = Array.from(document.querySelectorAll('.filter-capacidade:checked')).map(el => el.value);
    
    const maxPriceInput = document.getElementById('filter-max-price').value;
    const maxPrice = maxPriceInput ? parseFloat(maxPriceInput) : null;

    let filtrados = produtos;

    // Aplica as filtragens uma a uma
    if (catSelecionadas.length > 0) filtrados = filtrados.filter(p => catSelecionadas.includes(p.categoria));
    if (marcasSelecionadas.length > 0) filtrados = filtrados.filter(p => marcasSelecionadas.includes(p.marca));
    if (voltSelecionadas.length > 0) filtrados = filtrados.filter(p => voltSelecionadas.includes(p.voltagem));
    if (coresSelecionadas.length > 0) filtrados = filtrados.filter(p => coresSelecionadas.includes(p.cor));
    if (gasesSelecionados.length > 0) filtrados = filtrados.filter(p => gasesSelecionados.includes(p.gas));
    if (capSelecionadas.length > 0) filtrados = filtrados.filter(p => capSelecionadas.includes(p.capacidade));
    
    // Filtro de preço
    if (maxPrice !== null && !isNaN(maxPrice)) {
        filtrados = filtrados.filter(p => p.preco <= maxPrice);
    }

    marcarCategoriaAtiva(''); // Limpa a categoria colorida no menu de cima
    mostrarLista(filtrados, "Resultados Filtrados");
}

function limparFiltrosListagem() {
    // Desmarca tudo e zera o preço
    document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('filter-max-price').value = '';
    
    // Mostra tudo de novo
    aplicarFiltrosAvancados();
}

// ==========================================
// 8. FAVORITOS
// ==========================================

function toggleFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favId => favId !== id);
    } else {
        favoritos.push(id);
    }

    const botoesNaTela = document.querySelectorAll(`.fav-btn-${id}`);
    botoesNaTela.forEach(btn => {
        if (favoritos.includes(id)) {
            btn.classList.add('active');
            btn.querySelector('span').innerText = 'favorite';
        } else {
            btn.classList.remove('active');
            btn.querySelector('span').innerText = 'favorite_border';
        }
    });

    const viewFavorites = document.getElementById('view-favorites');
    if(viewFavorites && viewFavorites.classList.contains('active')) {
        renderFavoritos();
    }
}

function renderFavoritos() {
    const grid = document.getElementById('gridFavoritos');
    if(!grid) return;
    
    grid.innerHTML = '';
    const listaFav = produtos.filter(p => favoritos.includes(p.id));

    if(listaFav.length === 0) {
        grid.innerHTML = '<p>Você não possui favoritos.</p>';
    } else {
        listaFav.forEach(prod => grid.appendChild(criarCard(prod)));
    }
}

// ==========================================
// 9. PERFIL E HISTÓRICO (DETALHE CLIENTE)
// ==========================================

function renderPerfil() {
    const tbody = document.getElementById('historyBody');
    if (!tbody) return;

    tbody.innerHTML = historicoPedidos.map(pedido => `
        <tr style="border-top: 1px solid #eee; font-size: 14px;">
            <td style="padding: 12px 0;">${pedido.data}</td>
            <td>${pedido.itens.length} item(ns)</td>
            <td style="color: ${pedido.status === 'Finalizado' || pedido.status === 'Entregue' ? 'green' : 'orange'}; font-weight: bold;">
                ${pedido.status}
            </td>
            <td>R$ ${pedido.total.toFixed(2).replace('.', ',')}</td>
            <td style="text-align: center;">
                <button class="btn-detalhes" style="font-size: 12px;" onclick="abrirDetalhesPedidoCliente('${pedido.id}')">Ver Detalhes</button>
            </td>
        </tr>
    `).join('');
}

function abrirDetalhesPedidoCliente(idPedido) {
    const pedido = historicoPedidos.find(p => p.id === String(idPedido));
    if(!pedido) return;
    
    document.getElementById('clienteOrderIdTitle').innerText = `#${pedido.id}`;
    const body = document.getElementById('clienteOrderDetailBody');
    
    let html = `
        <p><strong>Data da Compra:</strong> ${pedido.data}</p>
        <p><strong>Status:</strong> <span style="color: ${pedido.status === 'Finalizado' ? 'green' : 'orange'}; font-weight: bold;">${pedido.status}</span></p>
        <p><strong>Total Pago:</strong> R$ ${pedido.total.toFixed(2).replace('.', ',')}</p>
        <hr style="margin: 15px 0;">
        <h4 style="margin-bottom: 15px; color: var(--azul-escuro);">Itens Comprados:</h4>
    `;

    pedido.itens.forEach(item => {
        html += `
            <div style="display: flex; gap: 15px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 15px; align-items: center;">
                <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; border: 1px solid #ddd; border-radius: 4px; padding: 2px;">
                <div style="flex: 1;">
                    <div style="font-weight: 600; font-size: 14px; color: var(--azul-escuro);">${item.nome}</div>
                    <div style="font-size: 13px; color: #666;">${item.qtd}x R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
                </div>
                <button class="btn-add-cart" style="padding: 5px 10px; font-size: 12px; height: fit-content; min-width: auto; display:flex; align-items:center;" onclick="recomprarItem(${item.id}, ${item.qtd})" title="Adicionar este item ao carrinho">
                    <span class="material-icons" style="font-size: 18px;">add_shopping_cart</span>
                </button>
            </div>
        `;
    });

    html += `
        <button onclick="comprarPedidoNovamente('${pedido.id}')" class="btn-buy-now" style="width: 100%; margin-top: 10px; font-size: 14px;">
            <span class="material-icons" style="font-size: 18px;">shopping_bag</span> Adicionar Pedido Inteiro ao Carrinho
        </button>
    `;

    body.innerHTML = html;
    document.getElementById('clienteOrderDetailModal').classList.add('open');
}

function fecharModalPedidoCliente() {
    const modal = document.getElementById('clienteOrderDetailModal');
    if(modal) modal.classList.remove('open');
}

function comprarPedidoNovamente(idPedido) {
    const pedido = historicoPedidos.find(p => p.id === String(idPedido));
    if(!pedido) return;

    pedido.itens.forEach(item => {
        const prod = produtos.find(p => p.id === item.id);
        if (prod) {
            const itemExistente = carrinho.find(c => c.id === item.id);
            if (itemExistente) {
                itemExistente.qtd += item.qtd;
            } else {
                carrinho.push({ ...prod, qtd: item.qtd });
            }
        }
    });
    
    atualizarCarrinhoUI();
    fecharModalPedidoCliente();
    toggleCart(true); 
}

// ==========================================
// 10. PAINEL ADMIN (PEDIDOS)
// ==========================================

function renderAdmin(listaFiltrada = pedidos) {
    const tbody = document.getElementById('adminPedidosLista');
    if(!tbody) return;
    tbody.innerHTML = '';

    listaFiltrada.forEach(pedido => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${pedido.data.split('-').reverse().join('/')}</td>
            <td>${pedido.cliente}</td>
            <td>R$ ${pedido.valorTotal.toFixed(2)}</td>
            <td><span class="status-badge status-${pedido.status.toLowerCase().replace(' ', '-')}">${pedido.status}</span></td>
            <td><button class="btn-detalhes" onclick="verDetalhesPedido(${pedido.id})">Detalhes</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function filtrarPedidosAdmin() {
    const busca = document.getElementById('adminSearch').value.toLowerCase();
    const status = document.getElementById('filterStatus').value;
    const data = document.getElementById('filterDate').value;

    const filtrados = pedidos.filter(p => {
        const matchesBusca = p.cliente.toLowerCase().includes(busca) || p.documento.includes(busca);
        const matchesStatus = status === 'todos' || p.status === status;
        const matchesData = !data || p.data === data;
        return matchesBusca && matchesStatus && matchesData;
    });

    renderAdmin(filtrados);
}

function verDetalhesPedido(id) {
    const p = pedidos.find(pedido => pedido.id === id);
    if(!p) return;
    
    const modal = document.getElementById('orderDetailModal');
    const body = document.getElementById('orderDetailBody');

    body.innerHTML = `
        <p><strong>Cliente:</strong> ${p.cliente}</p>
        <p><strong>CPF/CNPJ:</strong> ${p.documento}</p>
        <p><strong>Endereço:</strong> ${p.endereco}</p>
        <br><hr>
        <h4>Itens:</h4>
        <ul style="margin: 10px 0;">
            ${p.itens.map(i => `<li>${i.qtd}x ${i.nome} - R$ ${i.preco.toFixed(2)}</li>`).join('')}
        </ul>
        <hr>
        <div class="form-group">
            <br>
            <label>Alterar Situação:</label>
            <select onchange="atualizarStatusPedido(${p.id}, this.value)">
                <option ${p.status === 'Em Aberto' ? 'selected' : ''}>Aberto</option>
                <option ${p.status === 'Recebido' ? 'selected' : ''}>Recebido</option>
                <option ${p.status === 'Sendo Preparado' ? 'selected' : ''}>Preparando</option>
                <option ${p.status === 'Enviado' ? 'selected' : ''}>Enviado</option>
                <option ${p.status === 'Finalizado' ? 'selected' : ''}>Finalizado</option>
            </select>
        </div>
    `;
    modal.classList.add('open');
}

function atualizarStatusPedido(id, novoStatus) {
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {
        pedido.status = novoStatus;
        alert(`Pedido ${id} atualizado para: ${novoStatus}`);
        renderAdmin();
    }
}

function fecharModalPedido() {
    const modal = document.getElementById('orderDetailModal');
    if(modal) modal.classList.remove('open');
}

function limparFiltrosAdmin() {
    document.getElementById('adminSearch').value = '';
    document.getElementById('filterStatus').value = 'todos';
    document.getElementById('filterDate').value = '';
    renderAdmin(pedidos);
}

// ==========================================
// 11. CONTROLE DE ESTOQUE
// ==========================================

function renderEstoque() {
    const tbody = document.getElementById('estoqueLista');
    if (!tbody) return;
    tbody.innerHTML = '';

    produtos.forEach(prod => {
        const statusClasse = prod.estoque <= 2 ? 'estoque-baixo' : 'estoque-ok';
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>#${prod.id}</td>
            <td>
                <div style="display:flex; align-items:center; gap:10px;">
                    <img src="${prod.img}" style="width: 40px; height: 40px; object-fit: contain; border: 1px solid #eee; border-radius: 4px;">
                    <div>
                        <div style="font-weight: 500;">${prod.nome}</div>
                        <div style="font-size: 12px; color: #888;">${prod.categoria} | ${prod.marca}</div>
                    </div>
                </div>
            </td>
            <td>R$ ${prod.preco.toFixed(2).replace('.', ',')}</td>
            <td>
                <span class="${statusClasse} estoque-qtd-display">${prod.estoque} un.</span>
            </td>
            <td style="text-align: right;">
                <button class="btn-estoque btn-estoque-edit" title="Editar" onclick="abrirModalProduto(${prod.id})">
                    <span class="material-icons" style="font-size: 18px;">edit</span>
                </button>
                <button class="btn-estoque btn-estoque-danger" title="Excluir" onclick="excluirProdutoEstoque(${prod.id})">
                    <span class="material-icons" style="font-size: 18px;">delete</span>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function preencherSelectsModal() {
    const selectCat = document.getElementById('prodCat');
    const selectMarca = document.getElementById('prodMarca');

    const categoriasBase = ["Compressores", "Gases", "Ferramentas", "Elétrica", "Instalação", "Ventiladores"];
    if(selectCat) selectCat.innerHTML = categoriasBase.map(cat => `<option value="${cat}">${cat}</option>`).join('');

    const marcasBase = marcas.map(m => m.nome);
    const marcasDosProdutos = produtos.map(p => p.marca);
    const marcasUnicas = [...new Set([...marcasBase, ...marcasDosProdutos])].sort(); 

    if(selectMarca) selectMarca.innerHTML = marcasUnicas.map(marca => `<option value="${marca}">${marca}</option>`).join('');
}
 
function abrirModalProduto(id = null) {
    const modal = document.getElementById('produtoModal');
    const titulo = document.getElementById('modalProdutoTitle');
    preencherSelectsModal();
    
    if (id) {
        const prod = produtos.find(p => p.id === id);
        titulo.innerText = "Editar Produto Técnico";
        document.getElementById('prodId').value = prod.id;
        document.getElementById('prodNome').value = prod.nome;
        document.getElementById('prodPreco').value = prod.preco;
        document.getElementById('prodQtd').value = prod.estoque;
        document.getElementById('prodCat').value = prod.categoria;
        document.getElementById('prodMarca').value = prod.marca;
        document.getElementById('prodImg').value = prod.img;
        
        // Novos campos
        document.getElementById('prodNcm').value = prod.ncm || "";
        document.getElementById('prodCodSistema').value = prod.codSistema || "";
        document.getElementById('prodPeso').value = prod.peso || "";
        document.getElementById('prodLargura').value = prod.largura || "";
        document.getElementById('prodAltura').value = prod.altura || "";
        document.getElementById('prodComprimento').value = prod.comprimento || "";
    } else {
        titulo.innerText = "Cadastrar Novo Produto Técnico";
        document.getElementById('formProduto').reset();
        document.getElementById('prodId').value = ""; 
    }
    modal.classList.add('open');
}

function salvarProdutoEstoque(event) {
    event.preventDefault(); 
    
    const idField = document.getElementById('prodId').value;
    
    const dadosProduto = {
        nome: document.getElementById('prodNome').value,
        preco: parseFloat(document.getElementById('prodPreco').value),
        estoque: parseInt(document.getElementById('prodQtd').value),
        categoria: document.getElementById('prodCat').value,
        marca: document.getElementById('prodMarca').value,
        img: document.getElementById('prodImg').value,
        // Novos campos capturados
        ncm: document.getElementById('prodNcm').value,
        codSistema: document.getElementById('prodCodSistema').value,
        peso: parseFloat(document.getElementById('prodPeso').value),
        largura: parseInt(document.getElementById('prodLargura').value),
        altura: parseInt(document.getElementById('prodAltura').value),
        comprimento: parseInt(document.getElementById('prodComprimento').value),
        destaque: false, freteGratis: false, maisVendido: false
    };

    if (idField === "") {
        const novoId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
        dadosProduto.id = novoId;
        produtos.push(dadosProduto);
        alert("Produto técnico cadastrado com sucesso!");
    } else {
        const id = parseInt(idField);
        const index = produtos.findIndex(p => p.id === id);
        if (index !== -1) {
            produtos[index] = { ...produtos[index], ...dadosProduto };
            alert("Informações técnicas atualizadas!");
        }
    }

    fecharModalProduto();
    renderEstoque(); 
}


function fecharModalProduto() {
    const modal = document.getElementById('produtoModal');
    if(modal) modal.classList.remove('open');
}

function salvarProdutoEstoque(event) {
    event.preventDefault(); 
    
    const idField = document.getElementById('prodId').value;
    
    const dadosProduto = {
        nome: document.getElementById('prodNome').value,
        preco: parseFloat(document.getElementById('prodPreco').value),
        estoque: parseInt(document.getElementById('prodQtd').value),
        categoria: document.getElementById('prodCat').value,
        marca: document.getElementById('prodMarca').value,
        img: document.getElementById('prodImg').value,
        destaque: false, freteGratis: false, maisVendido: false
    };

    if (idField === "") {
        const novoId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
        dadosProduto.id = novoId;
        produtos.push(dadosProduto);
        alert("Produto adicionado com sucesso!");
    } else {
        const id = parseInt(idField);
        const index = produtos.findIndex(p => p.id === id);
        if (index !== -1) {
            produtos[index] = { ...produtos[index], ...dadosProduto };
            alert("Produto atualizado com sucesso!");
        }
    }

    fecharModalProduto();
    renderEstoque(); 
    renderHome(); 
}

function excluirProdutoEstoque(id) {
    if (confirm("Tem certeza que deseja excluir este produto do catálogo?")) {
        const index = produtos.findIndex(p => p.id === id);
        if (index !== -1) {
            produtos.splice(index, 1);
            renderEstoque();
            renderHome();
        }
    }
}

// ==========================================
// 12. UTILITÁRIOS
// ==========================================

function toggleMenu() {
    const sidebarMenu = document.getElementById('sidebarMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    if(!sidebarMenu || !menuOverlay) return;

    const isOpen = sidebarMenu.classList.contains('open');
    if(isOpen) {
        sidebarMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
    } else {
        sidebarMenu.classList.add('open');
        menuOverlay.classList.add('open');
    }
}

function scrollCarousel(containerId, direction) {
    const container = document.getElementById(containerId);
    if(!container) return;
    const scrollAmount = 240; 
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function atualizarBotoesCarrossel(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const wrapper = container.parentElement;
    if(!wrapper) return;
    
    const btnPrev = wrapper.querySelector('.nav-btn.prev');
    const btnNext = wrapper.querySelector('.nav-btn.next');

    if (container.scrollWidth > container.clientWidth) {
        if(btnPrev) btnPrev.style.display = 'flex';
        if(btnNext) btnNext.style.display = 'flex';
    } else {
        if(btnPrev) btnPrev.style.display = 'none';
        if(btnNext) btnNext.style.display = 'none';
    }
}

window.addEventListener('resize', () => {
    const carrosseis = ['gridFreteGratis', 'gridDestaques', 'gridMaisProcurados', 'gridMarcas'];
    carrosseis.forEach(id => atualizarBotoesCarrossel(id));
});



//==============================

function realizarLogin(event) {
    event.preventDefault();
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    const errorMsg = document.getElementById('loginError');

    // Validação Administrativa
    if (user === 'adm' && pass === '123456k') {
        usuarioLogado = { nome: "Administrador", role: "admin" };
        errorMsg.style.display = 'none';
        alert("Acesso Administrativo concedido.");
        navigateTo('admin'); // Vai direto para o painel ADM
    } 
    // Validação Simulada de Usuário Comum
    else if (user === 'joao' || user === 'joao@email.com') {
        usuarioLogado = { nome: "João da Silva", role: "user" };
        errorMsg.style.display = 'none';
        renderPerfilPosLogin();
    } 
    else {
        errorMsg.style.display = 'block';
    }
}

function renderPerfilPosLogin() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('profile-content').style.display = 'block';
    renderPerfil(); // Chama a função original que carrega a tabela
}

function logout() {
    usuarioLogado = null;
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('profile-content').style.display = 'none';
    document.getElementById('loginUser').value = '';
    document.getElementById('loginPass').value = '';
    navigateTo('home');
}

// Função para controlar o que aparece no menu lateral
function atualizarVisibilidadeMenu() {
    const adminSection = document.getElementById('admin-sidebar-section');
    if (!adminSection) return;

    // Se o usuário estiver logado e for admin, mostra a seção, senão esconde
    if (usuarioLogado && usuarioLogado.role === 'admin') {
        adminSection.style.display = 'block';
    } else {
        adminSection.style.display = 'none';
    }
}

// Atualize sua função realizarLogin para incluir a atualização do menu
function realizarLogin(event) {
    event.preventDefault();
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    const errorMsg = document.getElementById('loginError');

    if (user === 'adm' && pass === '123456k') {
        usuarioLogado = { nome: "Administrador", role: "admin" }; //
        if(errorMsg) errorMsg.style.display = 'none';
        
        atualizarVisibilidadeMenu(); // ATUALIZA O MENU
        alert("Acesso Administrativo concedido.");
        navigateTo('admin'); 
    } else {
        if(errorMsg) errorMsg.style.display = 'block';
    }
}

// Atualize sua função logout para esconder o menu novamente
function logout() {
    usuarioLogado = null;
    atualizarVisibilidadeMenu(); // ESCONDE O MENU AO SAIR
    navigateTo('home');
}

// Fecha modais e sidebars ao apertar a tecla ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        // Fecha o carrinho se estiver aberto
        const cartModal = document.getElementById('cartModal');
        if (cartModal && cartModal.classList.contains('open')) {
            toggleCart(false);
        }

        // Aproveita e fecha também o menu lateral, se estiver aberto
        const sidebarMenu = document.getElementById('sidebarMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        if (sidebarMenu && sidebarMenu.classList.contains('open')) {
            toggleMenu();
        }
        
        // Fecha modais de detalhes (Pedido/Produto)
        fecharModalPedido();
        fecharModalProduto();
        fecharModalPedidoCliente();
    }
});


// MÁSCARAS DE INPUT
function mascaraCPF(i) {
    let v = i.value.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    i.value = v;
}

function mascaraCEP(i) {
    let v = i.value.replace(/\D/g, "");
    v = v.replace(/^(\d{5})(\d)/, "$1-$2");
    i.value = v;
}

function mascaraTel(i) {
    let v = i.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    i.value = v;
}

// LÓGICA DE SALVAMENTO
function salvarCadastro(event) {
    event.preventDefault();
    
    const email = document.getElementById('regEmail').value;
    const emailConf = document.getElementById('regEmailConf').value;
    const pass = document.getElementById('regPass').value;
    const passConf = document.getElementById('regPassConf').value;

    // 1. Validação de E-mail
    if (email !== emailConf) {
        alert("Os e-mails informados não coincidem!");
        return;
    }

    // 2. Validação de Força da Senha (REGEX)
    // ^(?=.*[A-Z])      -> Pelo menos uma letra maiúscula
    // ^(?=.*[0-9])      -> Pelo menos um número
    // ^(?=.*[!@#$%^&*]) -> Pelo menos um caractere especial
    // .{8,}             -> No mínimo 8 caracteres
    const regexSenha = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

    if (!regexSenha.test(pass)) {
        alert("A senha não atende aos requisitos de segurança:\n" +
              "- Pelo menos 8 caracteres\n" +
              "- Uma letra maiúscula\n" +
              "- Um número\n" +
              "- Um caractere especial (!@#$%^&*)");
        return;
    }

    // 3. Validação de Confirmação de Senha
    if (pass !== passConf) {
        alert("As senhas informadas não coincidem!");
        return;
    }

    // Fluxo de sucesso
    alert("Cadastro pré-aprovado! Enviamos um link de validação para: " + email);
    navigateTo('profile');
}