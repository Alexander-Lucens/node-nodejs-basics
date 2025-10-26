#!/bin/bash

GREEN="\033[42m\033[30m"
RED="\033[41m\033[30m"
NC="\033[0m"

expectedArgs=$(cat <<EOF
some-arg is value1
other is 1337
arg2 is 42
EOF
)

outputArgs=$(node ../src/cli/args.js --some-arg value1 --other 1337 --arg2 42 2>&1)
statusArgs=$?

echo "----- Start of test for args.js -----"

if [ $statusArgs -eq 0 ] && [ "$outputArgs" = "$expectedArgs" ]; then
    echo -e "${GREEN} SUCCESS ${NC} - args.js test passed"
else
    echo -e "${RED} FAIL ${NC} - args.js test fail"
    echo "Error output:"
    echo "$outputArgs"
fi

echo "----- End of test for args.js -----"

expectedENV=$(cat <<EOF
RS_SOME=any
RS_RSS_foo=bar
RS_RSS_bar=baz
EOF
)

outputENV=$(npx cross-env SOME=any RSS_foo=bar RSS_bar=baz node ../src/cli/env.js | tail -3 2>&1)
statusENV=$?

echo "----- Start of test for env.js -----"

if [ $statusENV -eq 0 ] && [ "$outputENV" = "$expectedENV" ]; then
    echo -e "${GREEN} SUCCESS ${NC} - env.js test passed"
else
    echo -e "${RED} FAIL ${NC} - env.js test fail"
    echo "Error output:"
    echo "$outputENV"
fi

echo "----- End of test for env.js -----"
