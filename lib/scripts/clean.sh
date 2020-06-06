#!/usr/bin/env bash
#
# Build clean script
#
# @package:
# @author:  pospi <pospi@spadgos.com>
# @since:   2020-06-06
#
##

rm -Rf build >/dev/null 2>&1
rm json-schema.json >/dev/null 2>&1
rm schema-manifest.js >/dev/null 2>&1
rm ALL_VF_SDL.js >/dev/null 2>&1
rm index.d.ts >/dev/null 2>&1
rm index.flow.js >/dev/null 2>&1
rm LICENSE >/dev/null 2>&1
rm CHANGELOG.md >/dev/null 2>&1
rm README.md >/dev/null 2>&1

exit 0
