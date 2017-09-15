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
# name type complexity code-standard  
#

boilerplate_component() {

    # echo "first: $1"
    # echo "second: $2"
    # echo "3rd: $3"
    # echo "4th: $4"

    if [ ! $1 ] 
    then
        log "You have to, at least, provide name for the component" 
        exit 66
    else
        name=$1
    fi

    if [ ! $2 ] 
    then
        log "Defaulting type to simple" 
        type='simple'
    else

        type=$2
    fi

    if [ ! $3 ] 
    then
        log "Defaulting kind to full" 
        kind='full'
    else
        kind=$3
    fi


    if [ ! $4 ] 
    then
        log "Defaulting approach to classes" 
        approach='classes'
    else
        approach=$4
    fi


    componentfolder="./ui/components/$name"
    
    boilerplatefolder="$DIR/boilerplates/$type-$kind/$approach"

    jsxpath="$DIR/boilerplates/$type-$kind/$approach/sample.jsx"
    jspath="$DIR/boilerplates/$type-$kind/$approach/index.js"
    csspath="$DIR/boilerplates/$type-$kind/$approach/sample.css"
   
    # Use these to debug

    # echo "jspath: $jspath"
    # echo "jsxpath: $jsxpath"
    # echo "csspath: $csspath"

    if [ ! -d $boilerplatefolder ]
    then
        echo "THESE ARE NOT THE DROIDS YOU ARE LOOKING FOR"
        echo "you supplied wrong parameters, there are no components of type you requested in boilerplate collection";
        exit 66
    fi

    samplecss=`cat $DIR/boilerplates/$type-$kind/$approach/sample.css`
    


    if [ ! -d $componentfolder ]
    then
        mkdir $componentfolder
        if [ -f $csspath ]
        then 
            log "Creating CSS"
            touch $componentfolder/$name.css
            echo "$samplecss" > "$componentfolder/$name.css"
        fi

        if [ -f $jspath ]
        then 

            # all files are named in lowercase but classes are named with uppercase first
            # so we need to add that tat the end
            uppercaseName="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}"
            log "Creating JS"
            touch $jspath
            sed "s/sample/$name/g" <$jspath >"$componentfolder/index.tmp.js"

            sed "s/Sample/$uppercaseName/g" <"$componentfolder/index.tmp.js" >"$componentfolder/index.js"
            rm "$componentfolder/index.tmp.js"
        fi

        if [ -f $jsxpath ]
        then 
            log "Creating JSX"
            touch $jsxpath
            sed "s/sample/$name/g" <$jsxpath >"$componentfolder/$name.jsx"
        fi

        printf "\n\n"
        log "============================="
        log "New component created"
        log "============================="
        log "Name (file name): $name"
        log "Type: $type"
        log "Kind: $kind"
        log "Approach: $approach"
        log "================================"
        printf "\n\n"
        log " Component is added to your ui/components folder, you can now start your development"
        log "Note: it is not added aywhere, that is up to you"

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
