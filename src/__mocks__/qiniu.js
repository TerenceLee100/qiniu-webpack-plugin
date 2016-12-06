module.exports = {
  conf: {},
  rs: {
    PutPolicy: jest.fn(() => {
      return {
        token: () => 'mockToken'
      }
    })
  },
  io: {
    PutExtra: jest.fn(() => 'mockExtra'),
    putFile: jest.fn((token, key, existsAt, extra, cb) => {
      process.nextTick(cb())
    })
  }
};
