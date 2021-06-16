#!/bin/bash
cd $1
find -name "*.md"|xargs -I {} cat {} >> file3
cd ..
