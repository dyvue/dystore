const baseURL = process.env.API_MAIN,
apiKey = process.env.API_KEY

export const state = () => ({});
export const mutations = {};
export const actions = {
  async index({ commit, rootState }, { url, payload }) {
    try {
      const mainURL = baseURL + url;
      const response = await this.$axios.$get(mainURL, {
        params: payload,
        headers: {
          // API KEY
        },
      });
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async show({ commit }, { url, id }) {
    try {
      const mainURL = baseURL + url + "/" + id;
      const response = await this.$axios.$get(mainURL, {
        params: payload,
        headers: {
          // API KEY
        },
      });
      return response;
    } catch (err) {
      console.error(err)
    }
  },
  async post({ commit, rootState }, { url, body }) {
    try {
      const mainURL = baseURL + url;
      const response = await this.$axios.$post(mainURL, body, {
        headers: {
          // API KEY
        }
      });
      return response;
    } catch (err) {
      console.error(err)
    }
  }
};
