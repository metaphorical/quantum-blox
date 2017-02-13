#!/usr/bin/env bash

#
# Log <type> <msg>
#
log() {
  printf "  \e[0;32m[qB]\033[0m : \033[0m%s\033[0m\n" $1
}

# 
# Getting dir where file is
# 

DIR="$( dirname "${BASH_SOURCE[0]}" )"

#
# Create component
# type complexity code-standard name 
#

boilerplate_component() {
    componentfolder=`$PWD/components/$4`
    templatecss=`cat $DIR/boilerplates/$1-$2/$3/sample.css`
    log DIR

    mkdir $componentfolder
    touch $componentfolder/$4.css

    if [ -f "$PWD/components/$4/$4.css" ]
    then 
        log Creating
        echo "$templatecss" > "$componentfolder/$4.css"
    fi

    printf "$templatecss""
}


if test $# -eq 0; then
    printf "Please provide valid input (help list coming up)"
else
    case $1 in
      -h|--help|-H) printf "Usage:\n qb.sh <command> <name>\n" ;;
      --create|-c) boilerplate_component $2 $3 $4 $5;;
      *) log $1 ;;
    esac
fi
