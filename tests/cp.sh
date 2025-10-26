#!/bin/bash
GREEN="\033[42m\033[30m"
RED="\033[41m\033[30m"
NC="\033[0m"

expected=$(cat <<EOF
Total number of arguments is 4
Arguments: ["echo","Something","other","More"]

Received from master process: Hello
World
EOF
)

output=$( (echo "Hello"; echo "World") | node ../src/cp/cp.js )
status=$?

if [ $status -eq 0 ] && [ "$output" = "$expected" ]; then
    echo -e "${GREEN} SUCCESS ${NC} -- cp.js test done"
else
    echo -e "${RED} FAIL ${NC} -- cp.js test fail"
    echo "Expected:"
    echo "$expected"
    echo "Got:"
    echo "$output"
fi
