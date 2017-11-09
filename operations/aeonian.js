require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'daffodil-'
  },
  environments: {
    staging: 'E1AIE4JX7L06ZH',
    master: 'E2AOOKHH04X1RD',
  }
}).deploy(process.argv[2])
