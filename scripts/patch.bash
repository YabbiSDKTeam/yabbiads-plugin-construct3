new_version=$1 &&
pattern='s/^[^0-9]*(([0-9]+\.)*[0-9]+).*/\1/p'

patchAddonJson() {
    filename="addon.json" &&

    version_string=$(grep "\"version\":" $filename) &&
    version=$(sed -nre $pattern <<< "$version_string") &&

    search_string="\"version\": \"$version\"," &&
    replace_string="\"version\": \"$new_version\"," &&

    sed -i '' "s/$search_string/$replace_string/" $filename
}


patchPluginJs() {
    filename="plugin.js" &&

    version_string=$(grep "const PLUGIN_VERSION = \"$version\";" $filename) &&
    version=$(sed -nre $pattern <<< "$version_string") &&

    search_string="const PLUGIN_VERSION = \"$version\";" &&
    replace_string="const PLUGIN_VERSION = \"$new_version\";"  &&

    sed -i '' "s/$search_string/$replace_string/" $filename
}

patchAddonJson && patchPluginJs &&
rm -rf ./build/* &&
zip -r ./build/yabbiads-$new_version.c3addon * -x build/\* &&
echo "All done."