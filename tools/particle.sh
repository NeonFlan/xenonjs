#!/bin/sh
cat > $1.js << EndOfMessage
/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

({
update({}, state, tools) {
},
render({}, {}, tools) {
},
template: html\`
\`
});
EndOfMessage