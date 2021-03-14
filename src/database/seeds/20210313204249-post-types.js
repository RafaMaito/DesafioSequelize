module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'post_types',
        schema: 'forum',
      },
      [
        {
          name: 'Front-End',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Back-End',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Full-Stack',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'post_types',
        schema: 'forum',
      },
      null,
      {}
    );
  },
};
