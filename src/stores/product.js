const state = {
  products: []
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  }
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      commit('setProducts', response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
};

const getters = {
  getProductById: (state) => (productId) => {
    return state.products.find(product => product.id === productId);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};