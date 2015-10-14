#!/bin/bash

s3cmd --config=/Users/k/.s3daffodilcfg sync pub/. s3://daffodildigital.com
s3cmd setacl --config=/Users/k/.s3daffodilcfg s3://daffodildigital.com/ --acl-public --recursive
