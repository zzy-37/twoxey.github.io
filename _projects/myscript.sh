#!/bin/bash
list=$(find -iname "*.png")
for val in $list; do
    read dir name <<< `echo $val | awk -F/ '{OFS="/"; n=$NF; $NF=""; print $0" "n}'`
    #echo $dir $name
    rname=`echo $name|awk -F. '{print $1}'`
    # echo ${dir}scl-${rname}.jpg
    convert $val ${dir}${rname}.jpg
done
