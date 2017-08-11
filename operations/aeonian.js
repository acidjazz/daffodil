let config = {
  bucket: {
    localDir: './dist/',
    prefix: 'daffodil-'
  },
  environments: {
    staging: 'E1AIE4JX7L06ZH'
  }
}
require('aeonian').config(config).deploy(process.argv[2])
