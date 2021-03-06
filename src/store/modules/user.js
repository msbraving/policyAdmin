import { login, logout, getInfo } from "@/api/user";
import { getToken, setToken, removeToken, getAuthIds } from "@/utils/auth";
import { resetRouter } from "@/router";

const state = {
  token: getToken(),
  name: "",
  avatar: "",
  roles: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { name, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({
        account: name.trim(),
        password: password
      })
        .then(response => {
          let data = {
            token: "imtoken"
          };
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          // const { data } = response
          let data = {
            roles: [],
            introduction: "oh,gapsong",
            avatar:
              "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            name: "龙头企业管理后台"
          };
          if (!data) {
            reject("验证失败，请重新登录。");
          }
          data.roles = getAuthIds(response);
          const { roles, name, avatar } = data;

          // roles must be a non-empty array
          if (!roles || roles.length <= 0) {
            reject("getInfo: roles must be a non-null array!");
          }

          commit("SET_ROLES", roles);
          commit("SET_NAME", name);
          commit("SET_AVATAR", avatar);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit("SET_TOKEN", "");
          commit("SET_ROLES", []);
          removeToken();
          resetRouter();
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      commit("SET_ROLES", []);
      removeToken();
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
