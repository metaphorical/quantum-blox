#!/usr/bin/env bash

#
# Log <msg>
#
log() {
  printf "  \e[0;32m[qB]\033[0m : \033[0m%s\033[0m\n" "$1"
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
    componentfolder="./ui/components/$4"
    
    boilerplatefolder="$DIR/boilerplates/$1-$2/$3"

    jsxpath="$DIR/boilerplates/$1-$2/$3/sample.jsx"
    jspath="$DIR/boilerplates/$1-$2/$3/index.js"
    csspath="$DIR/boilerplates/$1-$2/$3/sample.css"
   
    if [ ! -d $boilerplatefolder ]
    then
        echo "THESE ARE NOT THE DROIDS YOU ARE LOOKING FOR"
        echo "you supplied wrong parameters, there are no components of type you requested in boilerplate collection";
        exit 66
    fi

    samplecss=`cat $DIR/boilerplates/$1-$2/$3/sample.css`
    


    if [ ! -d $componentfolder ]
    then
        mkdir $componentfolder
        if [ -f $csspath ]
        then 
            log "Creating CSS"
            touch $componentfolder/$4.css
            echo "$samplecss" > "$componentfolder/$4.css"
        fi

        if [ -f $jspath ]
        then 
            log "Creating JS"
            touch $jspath
            sed "s/sample/$4/g" <$jspath >"$componentfolder/index.js"
        fi

        if [ -f $jsxpath ]
        then 
            log "Creating JSX"
            touch $jsxpath
            sed "s/sample/$4/g" <$jsxpath >"$componentfolder/$4.jsx"
        fi

    else
        log "COMPONET NAME TAKEN, Please choose another name";
    fi
}

# create_component() {

# }


if test $# -eq 0; then
    printf "Please provide valid input (help list coming up)"
else
    case $1 in
      -h|--help|-H) printf "Usage:\n qb.sh <command> <name>\n" ;;
      --create|-c) boilerplate_component $2 $3 $4 $5;;
      *) log $1 ;;
    esac
fi
