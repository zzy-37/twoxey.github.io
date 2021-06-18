#!/bin/bash
list=$(find -name "*.png")
for val in $list; do
read dir name <<< `echo $val | awk -F/ '{OFS="/"; n=$NF; $NF=""; print $0" "n}'`
echo $dir $name
done