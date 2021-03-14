module.exports = {
  up: async queryInterface => {
    await queryInterface.createSchema('forum');
  },

  down: async queryInterface => {
    await queryInterface.dropSchema('forum');
  },
};
