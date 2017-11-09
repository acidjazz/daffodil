require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'daffodil-'
  },
  environments: {
    staging: 'E1AIE4JX7L06ZH'
  }
}).deploy(process.argv[2])
