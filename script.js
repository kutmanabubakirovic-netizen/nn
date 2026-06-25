const templates = [
  {
    id: 'mercedes-w124',
    name: 'Mercedes-Benz W124',
    type: 'auto',
    category: 'Неоклассика',
    price: 42000,
    year: 1993,
    specs: { power: '220 hp', engine: '2.6 L' },
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'nissan-gt86',
    name: 'Nissan GT-86',
    type: 'auto',
    category: 'JDM',
    price: 47000,
    year: 2018,
    specs: { power: '205 hp', engine: '2.0 L' },
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'porsche-911',
    name: 'Porsche 911 Turbo',
    type: 'auto',
    category: 'Суперкары',
    price: 185000,
    year: 2021,
    specs: { power: '572 hp', engine: '3.8 L' },
    imageUrl: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lamborghini-huracan',
    name: 'Lamborghini Huracan',
    type: 'auto',
    category: 'Суперкары',
    price: 320000,
    year: 2023,
    specs: { power: '631 hp', engine: '5.2 L' },
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bmw-m3-e46',
    name: 'BMW M3 E46',
    type: 'auto',
    category: 'Неоклассика',
    price: 96000,
    year: 2004,
    specs: { power: '333 hp', engine: '3.2 L' },
    imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'audi-rs6',
    name: 'Audi RS6',
    type: 'auto',
    category: 'Суперкары',
    price: 130000,
    year: 2020,
    specs: { power: '600 hp', engine: '4.0 L' },
    imageUrl: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'subaru-wrx',
    name: 'Subaru Impreza WRX',
    type: 'auto',
    category: 'JDM',
    price: 35000,
    year: 2016,
    specs: { power: '300 hp', engine: '2.5 L' },
    imageUrl: 'https://images.unsplash.com/photo-1511391403027-5a1e5cb0df77?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ferrari-488',
    name: 'Ferrari 488 Pista',
    type: 'auto',
    category: 'Суперкары',
    price: 450000,
    year: 2019,
    specs: { power: '710 hp', engine: '3.9 L' },
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'yamaha-r1',
    name: 'Yamaha R1',
    type: 'moto',
    category: 'Спортбайки',
    price: 21000,
    year: 2024,
    specs: { power: '200 hp', engine: '1.0 L' },
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ducati-v4',
    name: 'Ducati Panigale V4',
    type: 'moto',
    category: 'Спортбайки',
    price: 26000,
    year: 2023,
    specs: { power: '214 hp', engine: '1.1 L' },
    imageUrl: 'https://images.unsplash.com/photo-1464316324265-25c6f9901f73?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'kawasaki-zx10r',
    name: 'Kawasaki ZX-10R',
    type: 'moto',
    category: 'Спортбайки',
    price: 19000,
    year: 2022,
    specs: { power: '203 hp', engine: '1.0 L' },
    imageUrl: 'https://images.unsplash.com/photo-1546171733-0180a2b6b92e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'honda-cbr',
    name: 'Honda CBR1000RR',
    type: 'moto',
    category: 'Спортбайки',
    price: 18000,
    year: 2021,
    specs: { power: '189 hp', engine: '1.0 L' },
    imageUrl: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'harley-street',
    name: 'Harley-Davidson Street Glide',
    type: 'moto',
    category: 'Неоклассика',
    price: 32000,
    year: 2021,
    specs: { power: '94 hp', engine: '1.8 L' },
    imageUrl: 'https://images.unsplash.com/photo-1445820135484-05591d82a8fc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bugatti-chiron',
    name: 'Bugatti Chiron',
    type: 'exclusive',
    category: 'Эксклюзив',
    price: 3300000,
    year: 2024,
    specs: { power: '1500 hp', engine: '8.0 L' },
    imageUrl: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'koenigsegg-jesko',
    name: 'Koenigsegg Jesko',
    type: 'exclusive',
    category: 'Эксклюзив',
    price: 3000000,
    year: 2023,
    specs: { power: '1600 hp', engine: '5.0 L' },
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
  }
];

const state = {
  filterText: '',
  activeType: 'all',
  sortKey: 'priceAsc',
  currentPage: 1,
  itemsPerPage: 12,
  garage: new Set(),
  currentModalId: null,
  loadedVehicles: []
};

const dom = {
  searchInput: document.getElementById('searchInput'),
  sortSelect: document.getElementById('sortSelect'),
  itemCount: document.getElementById('itemCount'),
  cardsGrid: document.getElementById('cardsGrid'),
  pagination: document.getElementById('pagination'),
  garageCount: document.getElementById('garageCount'),
  tabButtons: document.querySelectorAll('.tab-button'),
  detailModal: document.getElementById('detailModal'),
  modalImage: document.getElementById('modalImage'),
  modalName: document.getElementById('modalName'),
  modalType: document.getElementById('modalType'),
  modalCategory: document.getElementById('modalCategory'),
  modalYear: document.getElementById('modalYear'),
  modalPrice: document.getElementById('modalPrice'),
  modalPower: document.getElementById('modalPower'),
  modalEngine: document.getElementById('modalEngine'),
  modalGarageButton: document.getElementById('modalGarageButton'),
  closeModal: document.getElementById('closeModal')
};

function generateVehicles(seedList, total = 108) {
  const result = [];
  for (let index = 0; result.length < total; index += 1) {
    const prototype = seedList[index % seedList.length];
    const cloneIndex = Math.floor(index / seedList.length) + 1;
    const variation = index % 5;
    const priceVariation = prototype.price * (1 + (variation - 2) * 0.03);
    const yearVariation = prototype.year + ((variation % 3) - 1);

    result.push({
      ...prototype,
      id: `${prototype.id}-${cloneIndex}`,
      year: Math.max(1990, yearVariation),
      price: Math.round(priceVariation / 100) * 100,
      specs: {
        power: prototype.specs.power,
        engine: prototype.specs.engine
      },
      imageUrl: `${prototype.imageUrl}&sig=${index}`
    });
  }
  return result;
}

function formatPrice(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

function filterVehicles() {
  return state.loadedVehicles
    .filter((vehicle) => {
      const textMatch = vehicle.name.toLowerCase().includes(state.filterText.toLowerCase());
      const typeMatch = state.activeType === 'all' || vehicle.type === state.activeType;
      return textMatch && typeMatch;
    })
    .sort((a, b) => {
      if (state.sortKey === 'priceAsc') return a.price - b.price;
      if (state.sortKey === 'priceDesc') return b.price - a.price;
      if (state.sortKey === 'yearDesc') return b.year - a.year;
      return 0;
    });
}

function getPageCount(totalCount) {
  return Math.max(1, Math.ceil(totalCount / state.itemsPerPage));
}

function createSkeletonCards(count = 12) {
  return Array.from({ length: count }, () => '<div class="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-glow"><div class="skeleton h-56 w-full rounded-3xl"></div><div class="space-y-3"><div class="skeleton h-5 w-3/4 rounded-full"></div><div class="skeleton h-4 w-1/2 rounded-full"></div><div class="flex items-center justify-between"><div class="skeleton h-10 w-24 rounded-2xl"></div><div class="skeleton h-10 w-24 rounded-2xl"></div></div></div></div>').join('');
}

function renderCards() {
  const filtered = filterVehicles();
  const pageCount = getPageCount(filtered.length);
  if (state.currentPage > pageCount) state.currentPage = pageCount;
  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + state.itemsPerPage);

  dom.itemCount.textContent = filtered.length;
  dom.cardsGrid.innerHTML = pageItems.map((vehicle) => {
    const inGarage = state.garage.has(vehicle.id);
    return `
      <article class="card-hover overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90 shadow-glow">
        <div class="relative overflow-hidden">
          <img src="${vehicle.imageUrl}" alt="${vehicle.name}" class="card-image h-64 w-full object-cover brightness-90 transition" />
          <div class="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-2 text-xs uppercase tracking-[0.35em] text-slate-200">
            ${vehicle.category}
          </div>
          <div class="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.35em] text-slate-200">
            ${vehicle.type === 'auto' ? 'Авто' : vehicle.type === 'moto' ? 'Мото' : 'Эксклюзив'}
          </div>
        </div>
        <div class="space-y-4 p-5">
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-white">${vehicle.name}</h3>
            <p class="text-sm text-slate-400">${vehicle.year} • ${vehicle.specs.power} • ${vehicle.specs.engine}</p>
          </div>
          <div class="flex items-center justify-between gap-3">
            <div>
              <p class="text-2xl font-semibold text-brand">${formatPrice(vehicle.price)}</p>
            </div>
            <button data-id="${vehicle.id}" class="garage-button inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/85 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-brand hover:text-white">
              <span>${inGarage ? '✓' : '+'}</span>
              <span>${inGarage ? 'В гараже' : 'В гараж'}</span>
            </button>
          </div>
          <button data-id="${vehicle.id}" class="detail-button w-full rounded-3xl border border-brand/30 bg-brand/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand transition hover:bg-brand/20">
            Подробнее
          </button>
        </div>
      </article>
    `;
  }).join('');

  renderPagination(filtered.length);
  attachCardEvents();
}

function renderPagination(totalCount) {
  const pageCount = getPageCount(totalCount);
  const pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(`
      <button data-page="${i}" class="${i === state.currentPage ? 'bg-brand text-white' : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800'} rounded-2xl px-4 py-2 text-sm font-semibold transition">
        ${i}
      </button>
    `);
  }
  dom.pagination.innerHTML = `
    <button data-page="prev" class="rounded-2xl border border-slate-700 bg-slate-900/90 px-5 py-2 text-sm text-slate-300 transition hover:border-brand hover:text-white">Назад</button>
    ${pages.join('')}
    <button data-page="next" class="rounded-2xl border border-slate-700 bg-slate-900/90 px-5 py-2 text-sm text-slate-300 transition hover:border-brand hover:text-white">Вперед</button>
  `;
  dom.pagination.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (event) => {
      const pageKey = event.currentTarget.dataset.page;
      if (pageKey === 'prev') {
        if (state.currentPage > 1) state.currentPage -= 1;
      } else if (pageKey === 'next') {
        if (state.currentPage < pageCount) state.currentPage += 1;
      } else {
        state.currentPage = Number(pageKey);
      }
      renderWithLoader();
    });
  });
}

function applyActiveTab() {
  dom.tabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.type === state.activeType);
  });
}

function attachCardEvents() {
  dom.cardsGrid.querySelectorAll('.garage-button').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      toggleGarageItem(id);
    });
  });

  dom.cardsGrid.querySelectorAll('.detail-button').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      openDetailModal(id);
    });
  });
}

function toggleGarageItem(id) {
  if (state.garage.has(id)) {
    state.garage.delete(id);
  } else {
    state.garage.add(id);
  }
  dom.garageCount.textContent = state.garage.size;
  renderWithLoader();
}

function openDetailModal(vehicleId) {
  const vehicle = state.loadedVehicles.find((item) => item.id === vehicleId);
  if (!vehicle) return;
  state.currentModalId = vehicleId;
  dom.modalImage.src = vehicle.imageUrl;
  dom.modalName.textContent = vehicle.name;
  dom.modalType.textContent = vehicle.type === 'auto' ? 'Автомобиль' : vehicle.type === 'moto' ? 'Мотоцикл' : 'Эксклюзив';
  dom.modalCategory.textContent = vehicle.category;
  dom.modalYear.textContent = String(vehicle.year);
  dom.modalPrice.textContent = formatPrice(vehicle.price);
  dom.modalPower.textContent = vehicle.specs.power;
  dom.modalEngine.textContent = vehicle.specs.engine;
  dom.modalGarageButton.textContent = state.garage.has(vehicleId) ? 'Убрать из гаража' : 'Добавить в гараж';
  dom.detailModal.classList.add('show');
}

function closeDetailModal() {
  state.currentModalId = null;
  dom.detailModal.classList.remove('show');
}

function renderWithLoader() {
  dom.cardsGrid.innerHTML = createSkeletonCards();
  clearTimeout(window.loaderTimeout);
  window.loaderTimeout = setTimeout(() => {
    applyActiveTab();
    renderCards();
  }, 170);
}

function resetPagination() {
  state.currentPage = 1;
}

function setupEventListeners() {
  dom.searchInput.addEventListener('input', (event) => {
    state.filterText = event.target.value.trim();
    resetPagination();
    renderWithLoader();
  });

  dom.sortSelect.addEventListener('change', (event) => {
    state.sortKey = event.target.value;
    renderWithLoader();
  });

  dom.tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.activeType = button.dataset.type;
      resetPagination();
      applyActiveTab();
      renderWithLoader();
    });
  });

  dom.closeModal.addEventListener('click', closeDetailModal);
  dom.detailModal.addEventListener('click', (event) => {
    if (event.target === dom.detailModal) closeDetailModal();
  });
  dom.modalGarageButton.addEventListener('click', () => {
    if (state.currentModalId) toggleGarageItem(state.currentModalId);
    openDetailModal(state.currentModalId);
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDetailModal();
  });
}

function init() {
  state.loadedVehicles = generateVehicles(templates, 108);
  applyActiveTab();
  setupEventListeners();
  renderWithLoader();
}

init();
