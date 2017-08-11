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

// AKIAJUC32CFQJKIUNVFQ
// 2WQlgTSRFhwHP3uXaZ7OBj9xVdtXve0X6Dd0msPG
